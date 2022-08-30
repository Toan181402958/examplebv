import moment from 'moment';
import React from 'react';
import {Text, View} from 'react-native';
import {Avatar, AvatarProps, GiftedAvatar} from 'react-native-gifted-chat';
import {IMessage} from '../../model';
import {
  GIFTED_CHAT_MESSAGE,
  GIFTED_CHAT_SPACES,
  isFirstOFGroupOtherUser,
} from '../utils';

export const renderAvatar = (props: any) => {
  const minuteCurrent = new Date(
    moment(props.currentMessage?.createdAt).toString(),
  );

  const minutePrevious = new Date(
    moment(props.previousMessage?.createdAt).toString(),
  );
  const minuteNext = new Date(moment(props.nextMessage?.createdAt).toString());
  return (
    <Avatar
      {...props}
      imageStyle={{
        left: {
          height: GIFTED_CHAT_SPACES.SIZE_iMAGE_USER,
          width: GIFTED_CHAT_SPACES.SIZE_iMAGE_USER,
          marginTop: parseInt(GIFTED_CHAT_MESSAGE.MARGIN_TOP_DEFAULT_OTHER),
        },
        right: {},
      }}
      containerStyle={{
        left: {
          marginRight: 1,
        },
        right: {},
      }}
    />
  );
};
