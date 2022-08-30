import {CurrentRenderContext} from '@react-navigation/native';
import moment from 'moment';
import React, {useRef, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Bubble, BubbleProps, GiftedAvatar} from 'react-native-gifted-chat';
import {isSameDay, isSameUser} from 'react-native-gifted-chat/lib/utils';
import {IMessage, UserSeen} from '../../model';
import {
  GIFTED_CHAT_IMAGE,
  GIFTED_CHAT_MESSAGE,
  GIFTED_CHAT_SPACES,
  GIFTED_CHAT_VIDEO,
  isFirstOfGroup,
  isLastOfGroup,
} from '../utils';
import RenderMessageImage from './renderMessageImage';
import RenderMessageText, {iconViewFile} from './renderMessageText';
import RenderMessageVideo from './renderMessageVideo';
interface BubbleRender {
  props: Readonly<BubbleProps<IMessage>>;
  messages: Array<IMessage>;
  listtest: number;
  handleChild: (id: number) => void;
  refBubble: any;
  setlisttest: any;
  handleOnLongPress: (e: IMessage) => void;
  replyMessage: IMessage;
  handleOnPressImageUserSeen: (e: IMessage) => void;
  isPressSeen: string;
}
const RenderBubble = ({
  props,
  messages,
  listtest,
  handleChild,
  refBubble,
  setlisttest,
  handleOnLongPress,
  replyMessage,
  handleOnPressImageUserSeen,
  isPressSeen,
}: BubbleRender) => {
  const current = props.currentMessage as IMessage;
  const minuteCurrent = new Date(
    moment(props.currentMessage?.createdAt).toString(),
  );
  const minutePrevious = new Date(
    moment(props.previousMessage?.createdAt).toString(),
  );
  const minuteNext = new Date(moment(props.nextMessage?.createdAt).toString());
  const handleOnpressMessageText = () => {
    refBubble.current == current._id;
    // handleChild(current._id);
    setlisttest(current._id);
    console.log(listtest);
  };

  const handleOnLongPressMessageText = (e: IMessage) => {
    handleOnLongPress(e);
    console.log('location: ', props.touchableProps);
  };

  const handleOnLongPressMessageImage = (e: IMessage) => {
    handleOnLongPress(e);
  };

  const handleOnLongPressMessageVideo = (e: IMessage) => {
    handleOnLongPress(e);
  };

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
        onPress={() => handleOnPressImageUserSeen(current)}
        style={{
          width: '100%',
          alignItems: 'flex-end',
          marginTop: GIFTED_CHAT_SPACES.PADDING_TOP_LIST_USER_SEEN,
          paddingRight: props.position == 'right' ? 0 : 56,
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

  const renderNameUser = () => {
    if (
      isFirstOfGroup(
        minuteCurrent.getTime() / 60000,
        minutePrevious.getTime() / 60000,
        current,
        props.previousMessage,
      )
    ) {
      return (
        <Text
          style={{
            height: props.position == 'left' ? 20 : 0,
            marginTop: parseInt(GIFTED_CHAT_MESSAGE.MARGIN_TOP_DEFAULT_OTHER),
          }}>
          {current?.user.name}
        </Text>
      );
    }
    return <></>;
  };

  const renderAvatarBubble = () => {
    if (
      isFirstOfGroup(
        minuteCurrent.getTime() / 60000,
        minutePrevious.getTime() / 60000,
        current,
        props.previousMessage,
      ) &&
      isSameUser(current, props.previousMessage)
    ) {
      return (
        <View
          style={{
            height: '100%',
            justifyContent: 'flex-start',
            position: 'absolute',
            start: -45,
            marginTop: parseInt(GIFTED_CHAT_MESSAGE.MARGIN_TOP_DEFAULT_OTHER),
          }}>
          <GiftedAvatar
            user={current.user}
            avatarStyle={{
              height: GIFTED_CHAT_SPACES.SIZE_iMAGE_USER,
              width: GIFTED_CHAT_SPACES.SIZE_iMAGE_USER,
            }}
          />
        </View>
      );
    } else {
      <></>;
    }
  };

  const renderViewBubble = () => {
    return (
      <Bubble
        {...props}
        containerStyle={{
          left: {},
          right: {},
        }}
        wrapperStyle={{
          left: {
            borderTopLeftRadius: isFirstOfGroup(
              minuteCurrent.getTime() / 60000,
              minutePrevious.getTime() / 60000,
              current,
              props.previousMessage,
            )
              ? parseInt(GIFTED_CHAT_MESSAGE.BORDER_MESSAGE)
              : parseInt(GIFTED_CHAT_MESSAGE.BORDER_OTHER),
            borderBottomLeftRadius: isLastOfGroup(
              current,
              props.nextMessage,
              minuteNext.getTime() / 60000,
              minuteCurrent.getTime() / 60000,
            )
              ? parseInt(GIFTED_CHAT_MESSAGE.BORDER_MESSAGE)
              : parseInt(GIFTED_CHAT_MESSAGE.BORDER_OTHER),
            borderTopRightRadius: parseInt(GIFTED_CHAT_MESSAGE.BORDER_MESSAGE),
            borderBottomRightRadius: parseInt(
              GIFTED_CHAT_MESSAGE.BORDER_MESSAGE,
            ),
          },
          right: {
            borderTopRightRadius: isFirstOfGroup(
              minuteCurrent.getTime() / 60000,
              minutePrevious.getTime() / 60000,
              current,
              props.previousMessage,
            )
              ? parseInt(GIFTED_CHAT_MESSAGE.BORDER_MESSAGE)
              : parseInt(GIFTED_CHAT_MESSAGE.BORDER_OTHER),
            borderBottomRightRadius: isLastOfGroup(
              current,
              props.nextMessage,
              minuteNext.getTime() / 60000,
              minuteCurrent.getTime() / 60000,
            )
              ? parseInt(GIFTED_CHAT_MESSAGE.BORDER_MESSAGE)
              : parseInt(GIFTED_CHAT_MESSAGE.BORDER_OTHER),
            borderTopLeftRadius: parseInt(GIFTED_CHAT_MESSAGE.BORDER_MESSAGE),
            borderBottomLeftRadius: parseInt(
              GIFTED_CHAT_MESSAGE.BORDER_MESSAGE,
            ),
          },
        }}
        renderMessageText={(props: any) => (
          <RenderMessageText
            props={props}
            handleOnpressMessageText={handleOnpressMessageText}
            handleOnLongPress={handleOnLongPressMessageText}
          />
        )}
        renderMessageImage={(props: any) => (
          <RenderMessageImage
            props={props}
            handleOnLongPress={handleOnLongPressMessageImage}
          />
        )}
        renderMessageVideo={(props: any) => (
          <RenderMessageVideo
            props={props}
            handleOnLongPress={handleOnLongPressMessageVideo}
          />
        )}
        renderTime={() => <></>}
      />
    );
  };

  const renderViewUserSeen = () => {
    return (
      <View
        style={{
          maxHeight: current.showUserSeen ? 100 : 0,
          width: '100%',
          alignItems: 'flex-end',
          paddingRight:
            current.user._id == 1 ? 0 : GIFTED_CHAT_SPACES.PADDING_USER_SEEN,
          backgroundColor: 'pink',
        }}>
        <Text>
          {current.listUserSeen.map(val => val.name).join(', ')}
          <Text style={{fontWeight: '700'}}> đã xem</Text>
        </Text>
      </View>
    );
  };

  const renderReplyMessage = () => {
    if (current.isReply == true) {
      return (
        <View>
          <Text style={styles.titleReply}>
            Đang trả lời
            {current.messageReply.user._id == 1 ? (
              <Text style={{color: '#000000'}}> Chính mình</Text>
            ) : (
              <Text style={{color: '#000000'}}>
                {' '}
                {current.messageReply.user.name}
              </Text>
            )}
          </Text>
          <View style={styles.viewReply}>
            {caseItemMessageReply(current.messageReply)}
          </View>
        </View>
      );
    } else {
      return <></>;
    }
  };

  const caseItemMessageReply = (replyMessage1: IMessage) => {
    switch (replyMessage1.type) {
      case 'text':
        return (
          <View
            style={{
              borderRadius: parseInt(GIFTED_CHAT_MESSAGE.BORDER_MESSAGE),
              backgroundColor: GIFTED_CHAT_MESSAGE.BACKGROUND_REPLY,
            }}>
            <Text style={styles.textReply}>{replyMessage1.text}</Text>
          </View>
        );
      case 'image':
        return (
          <Image
            style={styles.imageReply}
            source={{uri: replyMessage1.image.split(',')[0]}}
          />
        );
      case 'video':
        return (
          <Image
            style={styles.videoReply}
            source={{uri: replyMessage1.video}}
          />
        );
      case 'file':
        return (
          <View
            style={{
              borderRadius: parseInt(GIFTED_CHAT_MESSAGE.BORDER_MESSAGE),
              backgroundColor: GIFTED_CHAT_MESSAGE.BACKGROUND_REPLY,
              paddingTop: parseInt(GIFTED_CHAT_MESSAGE.PADDING),
              paddingHorizontal: parseInt(
                GIFTED_CHAT_MESSAGE.PADDING_HORIZONTAL_REPLY,
              ),
              paddingBottom: parseInt(GIFTED_CHAT_MESSAGE.PADDING_BOTTOM_REPLY),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {iconViewFile(replyMessage1.text)}
            <Text>{replyMessage1.text}</Text>
          </View>
        );
      default:
        return <Text>default</Text>;
    }
  };

  const renderViewEmoji = () => {
    return (
      <View
        style={{
          height: 30,
          width: 30,
          backgroundColor: 'grey',
          marginTop: -5,
        }}></View>
    );
  };

  return (
    <View
      style={{
        width: '100%',
        alignItems: props.position == 'left' ? 'flex-start' : 'flex-end',
      }}>
      {renderAvatarBubble()}
      {renderNameUser()}
      {renderReplyMessage()}
      {renderViewBubble()}
      {/* {renderViewEmoji()} */}
      {renderViewUserSeen()}
      {renderImageUserSeen()}
    </View>
  );
};

const styles = StyleSheet.create({
  viewReply: {
    opacity: 0.5,
    maxWidth: 260,
    marginBottom: parseInt(GIFTED_CHAT_MESSAGE.MARGIN_BOTTOM_REPLY) * -1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textReply: {
    fontSize: 14,
    color: '#000000',
    paddingTop: parseInt(GIFTED_CHAT_MESSAGE.PADDING),
    paddingHorizontal: parseInt(GIFTED_CHAT_MESSAGE.PADDING_HORIZONTAL_REPLY),
    paddingBottom: parseInt(GIFTED_CHAT_MESSAGE.PADDING_BOTTOM_REPLY),
  },
  imageReply: {
    height: GIFTED_CHAT_IMAGE.HEIGHT_GROUP_ONE,
    width: GIFTED_CHAT_IMAGE.WIDTH_GROUP_ONE,
    borderRadius: GIFTED_CHAT_IMAGE.BORDERRADIUS,
  },
  videoReply: {
    height: GIFTED_CHAT_VIDEO.HEIGHT,
    width: GIFTED_CHAT_VIDEO.WIDTH,
    borderRadius: GIFTED_CHAT_VIDEO.BORDER_RADIUS,
  },
  titleReply: {
    fontSize: 13,
    color: 'grey',
  },
});

export default RenderBubble;
