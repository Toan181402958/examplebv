import React from 'react';
import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated from 'react-native-reanimated';

interface ViewCustomInputProps {
  placeholder: string;
  styleIconHide: any;
  styleIconAction: any;
  inputCustom: string;
  refInputCustom: any;
  statusSend: boolean;
  changeTextInputCustom: (text: string) => void;
  onSendCustomInput: () => void;
  onPressEmojiCustomInput: () => void;
  showIconAction: () => void;
  hideIconAction: () => void;
  onPressGalleryCustom: () => void;
  onPressFileCustom: () => void;
}
const ViewCustomInputToolBar = ({
  placeholder,
  styleIconHide,
  styleIconAction,
  inputCustom,
  refInputCustom,
  statusSend,
  changeTextInputCustom,
  onSendCustomInput,
  onPressEmojiCustomInput,
  showIconAction,
  hideIconAction,
  onPressGalleryCustom,
  onPressFileCustom,
}: ViewCustomInputProps) => {
  return (
    <View style={[styles.container]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={onPressFileCustom}>
          <Animated.Image
            style={[styles.icon, styleIconAction]}
            source={require('../assets/icon/attachment.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressGalleryCustom}>
          <Animated.Image
            style={[styles.icon, styleIconAction]}
            source={require('../assets/icon/gallery.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={showIconAction}>
          <Animated.Image
            style={[styles.iconHide, styleIconHide]}
            source={require('../assets/icon/right_arrow.png')}
          />
        </TouchableOpacity>
      </View>
      <TextInput
        onFocus={hideIconAction}
        onBlur={showIconAction}
        ref={refInputCustom}
        onChangeText={changeTextInputCustom}
        multiline
        style={styles.textInput}
        placeholder={placeholder}
        blurOnSubmit
        keyboardType="ascii-capable"
        onSubmitEditing={Keyboard.dismiss}
      />
      <TouchableOpacity
        onPress={statusSend ? onSendCustomInput : onPressEmojiCustomInput}>
        <Image
          style={[styles.icon]}
          source={
            statusSend
              ? require('../assets/icon/send_message.png')
              : require('../assets/icon/smile.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
    backgroundColor: 'white',
    paddingEnd: 8,
  },
  textInput: {
    width: 200,
    borderWidth: 1,
    minHeight: 40,
    paddingVertical: 0,
    borderRadius: 15,
    paddingHorizontal: 10,
    maxHeight: 80,
    flex: 1,
    marginHorizontal: 8,
  },
  icon: {
    height: 25,
    width: 25,
  },
  iconHide: {
    height: 20,
    width: 20,
  },
});

export default ViewCustomInputToolBar;
