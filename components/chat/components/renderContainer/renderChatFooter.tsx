import React from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IMessage} from '../../model';
import {iconViewFile} from './renderMessageText';

interface ChatFooterProps {
  replyMessage: IMessage;
  animFooter: any;
  handleHideChatFooter: () => void;
  animImgClose: any;
}
const RenderChatFooter = ({
  replyMessage,
  animFooter,
  handleHideChatFooter,
  animImgClose,
}: ChatFooterProps) => {
  const viewContentReply = (e: IMessage) => {
    switch (e.type) {
      case 'text':
        return <Text numberOfLines={1}>{e.text}</Text>;
      case 'image': {
        return (
          <View style={styles.caseImage}>
            <Image style={styles.image} source={{uri: e.image.split(',')[0]}} />
            <Text style={styles.textImage}>(Hình ảnh)</Text>
          </View>
        );
      }
      case 'file':
        return (
          <View style={styles.caseImage}>
            {iconViewFile(replyMessage.text)}
            <Text style={styles.textImage}>(File đính kèm)</Text>
          </View>
        );
      default:
        return <Text>default</Text>;
    }
  };

  return (
    <Animated.View style={[styles.container, {height: animFooter}]}>
      <View style={{backgroundColor: 'white', flexDirection: 'column'}}>
        <View>
          <Text style={styles.textTitle}>
            Đang trả lời
            {replyMessage.user._id == 1 ? (
              <Text style={styles.textName}> Chính mình</Text>
            ) : (
              <Text style={{fontWeight: 'bold'}}>
                {' '}
                {replyMessage.user.name}
              </Text>
            )}
          </Text>
        </View>
        {viewContentReply(replyMessage)}
      </View>
      <View style={{alignItems: 'center', flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            handleHideChatFooter();
          }}>
          <Animated.Image
            style={{
              height: animImgClose,
              width: animImgClose,
              resizeMode: 'center',
            }}
            source={require('../../assets/icon/icon_close.png')}
          />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    borderTopWidth: 0.3,
    borderTopColor: 'grey',
  },
  caseImage: {
    flexDirection: 'row',
  },
  image: {
    height: 30,
    width: 30,
  },
  textTitle: {
    fontSize: 13,
    color: 'grey',
  },
  textName: {
    fontSize: 15,
    color: '#000000',
  },
  textImage: {
    marginStart: 5,
    fontSize: 14,
    color: 'grey',
  },
});
export default RenderChatFooter;
