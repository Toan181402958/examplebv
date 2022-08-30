import React from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import {chatMessage} from '../../model';
import {IMessage} from '../chat/model';

type RenderChatFooterView = {
  animFooter: any;
  replyMessage: any;
  animImgClose: any;
  handleHideFooter: () => void;
};

const RenderChatFooter = ({
  animFooter,
  replyMessage,
  animImgClose,
  handleHideFooter,
}: RenderChatFooterView) => {
  // const typeFileMessage = (text: string) => {
  //   const type = text?.substring(text.length - 3);
  //   switch (type) {
  //     case 'doc':
  //       return require('../../assets/icon/docs.png');
  //     case 'pdf':
  //       return require('../../assets/icon/pdf.png');
  //     case 'ppt':
  //       return require('../../assets/icon/ppt.png');
  //     default:
  //       return require('../../assets/icon/unknown_mail.png');
  //   }
  // };

  const typeReplyMessage = (val: IMessage) => {
    if (val?.text) {
      return (
        <Text numberOfLines={2} style={{maxWidth: 330}}>
          {val.text}
        </Text>
      );
    }
    if (val?.image) {
      return <Text>(Hình ảnh)</Text>;
    }
    if (val?.file_type) {
      return <Text>(File đính kèm)</Text>;
    }
  };

  return (
    <Animated.View
      style={{
        height: animFooter,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
      }}>
      <View style={{backgroundColor: 'white', flexDirection: 'row'}}>
        <View>
          <Text>
            Đang trả lời
            <Text style={{fontWeight: 'bold'}}>
              {' '}
              {replyMessage?.user._id == 1
                ? 'Chính mình'
                : replyMessage?.user.name}
            </Text>
          </Text>
          {typeReplyMessage(replyMessage)}
        </View>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}></View>
      <View style={{alignItems: 'center', flexDirection: 'row'}}>
        {replyMessage?.typeMessage == 'image' ||
        replyMessage?.typeMessage == 'video' ? (
          <Animated.Image
            style={{
              height: animImgClose,
              width: animImgClose,
              marginRight: 10,
            }}
            source={{
              uri:
                replyMessage.typeMessage == 'image'
                  ? replyMessage.imageUser.listImage[0].toString()
                  : replyMessage.videoMessage.url,
            }}
          />
        ) : (
          <></>
        )}
        <TouchableOpacity
          onPress={() => {
            handleHideFooter();
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

const styles = StyleSheet.create({});

export default RenderChatFooter;
