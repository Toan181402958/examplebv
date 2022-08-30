import {CurrentRenderContext} from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import {Text, View} from 'react-native';
import {Day, DayProps} from 'react-native-gifted-chat';
import {isSameDay} from 'react-native-gifted-chat/lib/utils';
import {IMessage} from '../../model';
import {
  GIFTED_CHAT_MESSAGE,
  GIFTED_CHAT_SPACES,
  isFirstOfGroup,
  isFirstOFGroupOtherUser,
  isFirstOfGroupUser,
} from '../utils';
export const renderDay = (props: DayProps<IMessage>) => {
  const current = props.currentMessage as IMessage;
  const dateCurrent = moment(current.createdAt).format('l');
  const hourCurrent = moment(props.currentMessage?.createdAt).format('H');
  const minuteCurrent1 = moment(props.currentMessage?.createdAt).format('mm');
  const timeCurrent = parseInt(hourCurrent) * 60 + minuteCurrent1;
  const hourPrevious = moment(props.previousMessage?.createdAt).format('H');
  const minutePrevious1 = moment(props.previousMessage?.createdAt).format('mm');
  const timePrevious = parseInt(hourPrevious) * 60 + minutePrevious1;

  const dayCurrent = moment(current.createdAt).format('DD');
  const dayNow = moment(Date.now()).format('DD');

  const minuteCurrent = new Date(
    moment(props.currentMessage?.createdAt).toString(),
  );
  const minutePrevious = new Date(
    moment(props.previousMessage?.createdAt).toString(),
  );

  const timeMessage = () => {
    if (dayNow == dayCurrent) {
      return hourCurrent + ':' + minuteCurrent1;
    } else {
      return hourCurrent + ':' + minuteCurrent1 + ',' + dateCurrent;
    }
  };

  const renderTimeAndDay = () => {
    if (
      minuteCurrent.getTime() / 60000 - minutePrevious.getTime() / 60000 >
      GIFTED_CHAT_SPACES.MESSAGE_IN_MIN
    ) {
      return (
        <Text
          style={{
            marginTop: parseInt(GIFTED_CHAT_MESSAGE.MARGIN_TOP_TIME),
            marginBottom: parseInt(GIFTED_CHAT_MESSAGE.MARGIN_BOTTOM_TIME),
          }}>
          {timeMessage()}
        </Text>
      );
    } else {
      return <></>;
    }
  };
  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
      }}>
      {renderTimeAndDay()}
    </View>
  );
};
