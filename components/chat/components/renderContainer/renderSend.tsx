import React from 'react';
import {Image} from 'react-native';
import {Send} from 'react-native-gifted-chat';
type RenderSendView = {
  props: any;
};
const RenderSend = ({props}: RenderSendView) => {
  return (
    <Send
      containerStyle={{borderTopWidth: 0, backgroundColor: '#FFFFFF'}}
      {...props}>
      <Image
        style={{height: 25, width: 25, marginBottom: 10, marginRight: 10}}
        source={require('../../assets/icon/send_message.png')}
      />
    </Send>
  );
};

export default RenderSend;
