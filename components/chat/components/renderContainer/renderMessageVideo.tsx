import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RenderMessageVideoProps} from 'react-native-gifted-chat';
import {IMessage} from '../../model';
import {GIFTED_CHAT_VIDEO} from '../utils';

interface MessageVideoProps {
  props: RenderMessageVideoProps<IMessage>;
  handleOnLongPress: (e: IMessage) => void;
}
const RenderMessageVideo = ({props, handleOnLongPress}: MessageVideoProps) => {
  const current = props.currentMessage as IMessage;
  return (
    <TouchableOpacity onLongPress={() => handleOnLongPress(current)}>
      <Image
        style={styles.image}
        source={{uri: props.currentMessage?.video.toString()}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: GIFTED_CHAT_VIDEO.HEIGHT,
    width: GIFTED_CHAT_VIDEO.WIDTH,
    borderRadius: GIFTED_CHAT_VIDEO.BORDER_RADIUS,
  },
});

export default RenderMessageVideo;
