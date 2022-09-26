import moment from 'moment';
import React from 'react';
import {
  Animated,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Message, MessageProps} from 'react-native-gifted-chat';
import {IMessage, UserSeen} from '../../model';
import {
  element,
  GIFTED_CHAT_MESSAGE,
  GIFTED_CHAT_SPACES,
  isFirstOfGroup,
  isFirstOFGroupOtherUser,
  isLastOfGroup,
  isLastOfGroupTime,
  listMessageScrollDemo,
} from '../utils';

interface RenderMessageProps {
  props: Readonly<MessageProps<IMessage>>;
  listtest: number;
  listMessageSCroll: Array<number>;
  setListMessageScroll: any;
  listMessageDateScroll: any;
}

export const RenderMessage = ({
  props,
  listtest,
  listMessageSCroll,
  setListMessageScroll,
  listMessageDateScroll,
}: RenderMessageProps) => {
  const current = props.currentMessage as IMessage;
  const minuteCurrent = new Date(moment(current?.createdAt).toString());
  const minutePrevious = new Date(
    moment(props.previousMessage?.createdAt).toString(),
  );
  const minuteNext = new Date(moment(props.nextMessage?.createdAt).toString());

  const renderItemListSeen = (index: number, item: UserSeen) => {
    if (index < GIFTED_CHAT_SPACES.NUMBER_LIST_USER_SEEN) {
      return (
        <Image
          style={{
            height: GIFTED_CHAT_SPACES.SIZE_IMAGE_USER_SEEN,
            width: GIFTED_CHAT_SPACES.SIZE_IMAGE_USER_SEEN,
            borderRadius: GIFTED_CHAT_SPACES.SIZE_IMAGE_USER_SEEN / 2,
          }}
          source={{uri: item.image}}
        />
      );
    } else if (index == GIFTED_CHAT_SPACES.NUMBER_LIST_USER_SEEN + 1) {
      return (
        <View
          style={{
            height: GIFTED_CHAT_SPACES.SIZE_IMAGE_USER_SEEN,
            width: GIFTED_CHAT_SPACES.SIZE_IMAGE_USER_SEEN + 5,
            borderRadius: GIFTED_CHAT_SPACES.SIZE_IMAGE_USER_SEEN / 2,
            backgroundColor: 'grey',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>
            +
            {current.listUserSeen.length -
              (GIFTED_CHAT_SPACES.NUMBER_LIST_USER_SEEN + 1)}
          </Text>
        </View>
      );
    } else {
      <></>;
    }
  };

  const renderImageUserSeen = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log('onpress list image user seen: ');
        }}
        style={{
          width: '100%',
          alignItems: 'flex-end',
          marginTop: GIFTED_CHAT_SPACES.PADDING_TOP_LIST_USER_SEEN,
          // paddingRight: props.position == 'right' ? 0 : 56,
          paddingRight: 4,
        }}>
        <FlatList
          inverted
          horizontal
          data={current?.listUserSeen}
          renderItem={({item, index}) => {
            return (
              <View style={{flexDirection: 'row', marginLeft: 3}}>
                {renderItemListSeen(index, item)}
              </View>
            );
          }}
        />
      </TouchableOpacity>
    );
  };

  const renderListNameUserSeen = () => {
    const listName = current?.listUserSeen;
    const textName = listName.map(e => e.name);
    return (
      <View
        style={{
          width: '100%',
          alignItems: 'flex-end',
          maxHeight: listtest == current?._id ? 80 : 0,
          marginRight: 4,
        }}>
        <View style={{maxWidth: 280, backgroundColor: '#FFFFFF'}}>
          <Text>
            {textName.join(', ')}
            <Text> Đã xem</Text>
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{width: '100%'}}
      onLayout={e => {
        listMessageDateScroll.current.push(e.nativeEvent.layout.height);
        console.log('render message on layout: ', e.nativeEvent);
      }}>
      <Message
        {...props}
        containerStyle={{
          left: {
            marginTop: isFirstOFGroupOtherUser(
              minuteCurrent.getTime() / 60000,
              minutePrevious.getTime() / 60000,
              current,
              props.previousMessage,
            )
              ? parseInt(GIFTED_CHAT_MESSAGE.MARGIN_TOP_DEFAULT_OTHER)
              : 0,
            marginBottom: isLastOfGroupTime(
              minuteNext.getTime() / 60000,
              minuteCurrent.getTime() / 60000,
            )
              ? 0
              : parseInt(GIFTED_CHAT_MESSAGE.MARGIN_BOTTOM),
          },
          right: {
            marginTop: isFirstOFGroupOtherUser(
              minuteCurrent.getTime() / 60000,
              minutePrevious.getTime() / 60000,
              current,
              props.previousMessage,
            )
              ? parseInt(GIFTED_CHAT_MESSAGE.MARGIN_TOP_DEFAULT_OTHER)
              : 0,
            marginBottom: isLastOfGroupTime(
              minuteNext.getTime() / 60000,
              minuteCurrent.getTime() / 60000,
            )
              ? 0
              : parseInt(GIFTED_CHAT_MESSAGE.MARGIN_BOTTOM),
          },
        }}
      />
      {/* {renderListNameUserSeen()} */}
      {/* {renderImageUserSeen()} */}
    </View>
  );
};

const styles = StyleSheet.create({
  viewTime: {
    width: '100%',
    alignItems: 'center',
  },
  viewReply: {
    height: 20,
    width: '100%',
    backgroundColor: 'green',
  },
});
