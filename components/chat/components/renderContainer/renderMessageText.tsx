import moment from 'moment';
import React, {useCallback} from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import {MessageText, MessageTextProps} from 'react-native-gifted-chat';
import messages1 from '../../data';
import {IMessage} from '../../model';
import {GIFTED_CHAT_MESSAGE, GIFTED_CHAT_SPACES} from '../utils';

type RenderMessageText = {
  props: any;
  onPressTextLink: any;
};

export const iconViewFile = (text: string | undefined) => {
  const type = text?.substring(text.length - 3);
  switch (type) {
    case 'doc':
      return (
        <Image
          style={styles.iconFile}
          source={require('../../assets/icon/docs.png')}
        />
      );
    case 'pdf':
      return (
        <Image
          style={styles.iconFile}
          source={require('../../assets/icon/pdf.png')}
        />
      );
    case 'ppt':
      return (
        <Image
          style={styles.iconFile}
          source={require('../../assets/icon/ppt.png')}
        />
      );
    default:
      return (
        <Image
          style={styles.iconFile}
          source={require('../../assets/icon/unknown_mail.png')}
        />
      );
  }
};

interface MessageTextRender {
  props: any;
  handleOnpressMessageText: (id: number) => void;
  handleOnLongPress: (message: IMessage) => void;
}

const RenderMessageText = ({
  props,
  handleOnpressMessageText,
  handleOnLongPress,
}: MessageTextRender) => {
  const current = props.currentMessage;

  return (
    <TouchableOpacity
      onPress={() => handleOnpressMessageText(props.currentMessage._id)}
      onLongPress={() => handleOnLongPress(props.currentMessage)}
      style={styles.viewMessageText}>
      {current.type == 'file' ? iconViewFile(current.text) : <></>}
      <MessageText
        {...props}
        textStyle={{
          right: {
            color: GIFTED_CHAT_MESSAGE.RIGHT,
            fontSize: parseInt(GIFTED_CHAT_MESSAGE.FONTSIZE),
          },
          left: {
            color: GIFTED_CHAT_MESSAGE.LEFT,
            fontSize: parseInt(GIFTED_CHAT_MESSAGE.FONTSIZE),
          },
        }}
        containerStyle={{
          left: {
            maxWidth: parseInt(GIFTED_CHAT_MESSAGE.MAXWIDTH),
            paddingVertical: parseInt(GIFTED_CHAT_MESSAGE.PADDING),
          },
          right: {
            maxWidth: parseInt(GIFTED_CHAT_MESSAGE.MAXWIDTH),
            paddingVertical: parseInt(GIFTED_CHAT_MESSAGE.PADDING),
          },
        }}
        parsePatterns={(linkStyle: TextStyle) => [
          {
            type: 'url',
            onPress: (url: any) => console.log('url: ', url),
            style: {
              fontSize: 14,
              color: current.user._id == 1 ? '#c9c9c7' : '#7f7f7f',
              textDecorationLine: 'underline',
            },
          },
        ]}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  viewMessageText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconFile: {
    height: parseInt(GIFTED_CHAT_MESSAGE.SIZE_ICON_FILE),
    width: parseInt(GIFTED_CHAT_MESSAGE.SIZE_ICON_FILE),
    marginStart: 5,
  },
  textHighlight: {
    fontSize: 14,
    color: '#939393',
    textDecorationLine: 'underline',
  },
});

export default RenderMessageText;
