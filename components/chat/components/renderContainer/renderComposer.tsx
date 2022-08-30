import React, {FC, useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  LayoutAnimation,
  TextInput,
  UIManager,
} from 'react-native';
import {DEFAULT_PLACEHOLDER} from 'react-native-gifted-chat/lib/Constant';
import {ComposerProps} from 'react-native-gifted-chat';

interface ContentSize {
  width: number;
  height: number;
}

type NativeElement = {
  nativeEvent: {
    contentSize: ContentSize;
  };
};

const CustomLayoutSpring = {
  duration: 200,
  create: {
    type: LayoutAnimation.Types.easeOut,
    property: LayoutAnimation.Properties.opacity,
    springDamping: 0.7,
  },
  update: {
    type: LayoutAnimation.Types.easeOut,
    springDamping: 0.7,
  },
  delete: {
    type: LayoutAnimation.Types.easeOut,
    property: LayoutAnimation.Properties.opacity,
    springDamping: 0.7,
  },
};

const ChatComposer: FC<ComposerProps> = ({
  text = '',
  placeholder = DEFAULT_PLACEHOLDER,
  placeholderTextColor,
  textInputProps,
  onTextChanged,
  onInputSizeChanged,
  multiline = true,
  disableComposer = false,
  textInputAutoFocus,
  keyboardAppearance,
}) => {
  // if (isAndroid) {
  //   UIManager.setLayoutAnimationEnabledExperimental &&
  //     UIManager.setLayoutAnimationEnabledExperimental(true);
  // }
  const inputRef: any = useRef(null);
  const [newContentSize, setNewContentSize] = useState<
    ContentSize | undefined
  >();
  const [finalInputHeight, setFinalInputHeight] = useState(28);

  const calcInputHeight = (contentSize: ContentSize) => {
    if (contentSize?.height) {
      if (!text?.length && finalInputHeight) {
        LayoutAnimation.configureNext(CustomLayoutSpring);
        setFinalInputHeight(0);

        return;
      }
      LayoutAnimation.configureNext(CustomLayoutSpring);
      setFinalInputHeight(contentSize.height);
    }
  };

  const onContentSizeChange = ({nativeEvent: {contentSize}}: NativeElement) => {
    if (!contentSize) {
      return;
    }
    if (
      !newContentSize ||
      (newContentSize && newContentSize.height !== contentSize.height)
    ) {
      setNewContentSize(contentSize);
      if (!text?.length && onInputSizeChanged) {
        LayoutAnimation.configureNext(CustomLayoutSpring);
        setFinalInputHeight(0);
        onInputSizeChanged({width: 0, height: 0});
      } else if (onInputSizeChanged) {
        calcInputHeight(contentSize);
        onInputSizeChanged(contentSize);
      }
    }
  };

  const onChangeText = (text: string) => {
    // if (text.length < 2) {
    //   LayoutAnimation.configureNext(CustomLayoutSpring);
    // }
    onTextChanged && onTextChanged(text);
  };

  return (
    <View
      style={[
        styles.composer,
        {
          marginTop: finalInputHeight > 44 ? 3 : 6,
          height: finalInputHeight,
        },
      ]}>
      <TextInput
        ref={inputRef}
        testID={placeholder}
        accessible
        accessibilityLabel={placeholder}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        multiline={multiline}
        editable={!disableComposer}
        onContentSizeChange={onContentSizeChange}
        onChangeText={onChangeText}
        textBreakStrategy="highQuality"
        style={styles.textInput}
        autoFocus={textInputAutoFocus}
        value={text}
        keyboardType={'default'}
        // autoCompleteType="off"
        enablesReturnKeyAutomatically
        underlineColorAndroid="transparent"
        keyboardAppearance={keyboardAppearance}
        {...textInputProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  composer: {
    flex: 1,
    position: 'relative',
    justifyContent: 'flex-start',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 6,
    paddingBottom: 4,
    paddingLeft: 12,
    paddingRight: 12,
    borderWidth: 0.5,
    borderColor: '#000000',
    minHeight: 38,
    maxHeight: 100,
  },
  textInput: {
    flex: undefined,
    lineHeight: 22,
    paddingTop: 0,
    paddingBottom: 4,
    paddingLeft: 0,
    borderRadius: 0,
    borderWidth: 0,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    paddingRight: 0,
    margin: 0,
    marginLeft: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    minHeight: 55,
    height: 80,
    maxHeight: 100,
    textAlignVertical: 'top',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontSize: 16,
  },
});
export default ChatComposer;
