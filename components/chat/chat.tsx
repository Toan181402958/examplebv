import Clipboard from '@react-native-clipboard/clipboard';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  Easing,
  Image,
  Linking,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Actions,
  ActionsProps,
  ComposerProps,
  GiftedChat,
  InputToolbar,
  LoadEarlierProps,
} from 'react-native-gifted-chat';
import RenderActions from './components/renderContainer/renderActions';
import {renderAvatar} from './components/renderContainer/renderAvatar';
import RenderBubble from './components/renderContainer/renderBubble';
import RenderChatFooter from './components/renderContainer/renderChatFooter';
import ChatComposer from './components/renderContainer/renderComposer';
import {renderDay} from './components/renderContainer/renderDay';
import RenderSend from './components/renderContainer/renderSend';
import {
  GALLERY_BOTTOMSHEET,
  GIFTED_CHAT_BACKGROUND,
  GIFTED_CHAT_SCROLLBAR,
} from './components/utils';
import ViewActionBottom from './components/viewActionBottom';
import ViewEmoji from './components/viewEmoji';
import viewTabBar from './components/viewTabBar';
import messages1, {messageDefault} from './data';
import {IMessage, UserSeen} from './model';
import {RootStackParams} from './test-chat';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet from './components/viewBottomSheet';
import viewInputToolBar from './components/viewInputToolBar';
import ViewCustomInputToolBar from './components/viewCustomInputToolBar';
import ViewOptionsGallery from './components/viewOptionsGallery';
import ViewShowGallery from './components/viewBottomGallery/viewShowGallery';
import {renderMessage} from './components/renderContainer/renderMessage';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

export var newMessagesChat12 = [
  {
    _id: 29,
    text: 'one piece 7:3 24/8',
    createdAt: new Date(2022, 7, 29, 10, 0, 0),
    listUserSeen: [] as Array<UserSeen>,
    messageStatus: false,
    user: {
      _id: 1,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    showUserSeen: false,
    isReply: false,
  },
] as Array<IMessage>;

const Chat = () => {
  const [listtest, setlisttest] = useState(0);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [messages, setMessages] = useState<Array<IMessage>>([]);
  const animBotBar = useRef(new Animated.Value(0)).current;
  const animBottom = useRef(new Animated.Value(0)).current;
  var heightBotBar = 60;
  const [replyMessage, setReplyMessage] = useState<IMessage>(messageDefault);
  const animFooter = useRef(new Animated.Value(0)).current;
  const animImgClose = useRef(new Animated.Value(0)).current;
  const giftedChatref = useRef<any>(null);
  const animScroll = useRef(new Animated.Value(0)).current;
  const animOptionPhone = useRef(new Animated.Value(0)).current;
  const [isReply, setIsReply] = useState(false);
  const [isLoadingEarlier, setIsLoadingEarlier] = useState(false);
  const [hideLoadEarlier, setHideLoadEarlier] = useState(false);
  const refBubble = useRef(1);
  const [isPressSeen, setIsPressSeen] = useState('');
  const [showModal, setShowModal] = useState(false);
  const animBottomSheet = useRef(new Animated.Value(0)).current;
  const translateY = useSharedValue(0);
  const animMoreEmoji = useRef(new Animated.Value(0)).current;
  const animIconMoreEmoji = useRef(new Animated.Value(0)).current;
  const animTouchBottomSheet = useRef(new Animated.Value(0)).current;
  const refMoreAction = useRef(null);
  const [statusMoreAction, setStatusMoreAction] = useState(false);
  //state height input tool bar
  const [heightViewInput, setHeightViewInput] = useState(40);
  //text change input custom
  const [inputCustom, setInputCustom] = useState('');
  const [statusSend, setStatusSend] = useState(false);
  const refInputCustom = useRef<any>(null);

  //reanimated more action
  const maxWidthMoreAction = useSharedValue(0);
  const animatedMoreAction = useAnimatedStyle(() => {
    return {
      maxWidth: maxWidthMoreAction.value,
    };
  });
  //reanimated icon action
  const sizeIconActionComposer = useSharedValue(0);
  const animatedIconAction = useAnimatedStyle(() => {
    return {
      height: sizeIconActionComposer.value,
      width: sizeIconActionComposer.value,
    };
  });

  //reanimated icon arrow action
  const hideArrowIconACtion = useSharedValue(16);
  const animatedArrowIcon = useAnimatedStyle(() => {
    return {
      height: hideArrowIconACtion.value,
      width: hideArrowIconACtion.value,
    };
  });
  const hideViewArrowIcon = useSharedValue(100);
  const animatedViewArrowIcon = useAnimatedStyle(() => {
    return {
      maxWidth: hideViewArrowIcon.value,
    };
  });

  //reanimated bottomsheet more emoji
  const topMoreEmoji = useSharedValue(SCREEN_HEIGHT);
  const styleMoreEmoji = useAnimatedStyle(() => {
    return {
      top: topMoreEmoji.value,
    };
  });

  //reanimated custom input tool bar
  ////icon hide
  const sizeIconHide = useSharedValue(0);
  const marginStartIconHide = useSharedValue(0);
  const styleIconHide1 = useAnimatedStyle(() => {
    return {
      height: sizeIconHide.value,
      width: sizeIconHide.value,
      marginStart: marginStartIconHide.value,
    };
  });
  ////view action
  const sizeIconAction = useSharedValue(25);
  const marginStartIconAction = useSharedValue(8);
  const styleIconAction = useAnimatedStyle(() => {
    return {
      height: sizeIconAction.value,
      width: sizeIconAction.value,
      marginStart: marginStartIconAction.value,
    };
  });

  //reanimated view options gallery
  const heightOptionsGallery = useSharedValue(0);
  const styleOptionsGallery = useAnimatedStyle(() => {
    return {
      height: heightOptionsGallery.value,
    };
  });
  const animBottomOptionsGallery = useRef(new Animated.Value(0)).current;

  //reanimated gallery bottomsheet
  const [isShowGallery, setisShowGallery] = useState(true);
  const heightGalleryBottomSheet = useSharedValue(
    GALLERY_BOTTOMSHEET.STARTING_POSITION,
  );
  const styleGalleryBottomSheet = useAnimatedStyle(() => {
    return {
      height: heightGalleryBottomSheet.value,
    };
  });
  const translateYGalleryBottomSheet = useSharedValue(SCREEN_HEIGHT);

  //custom scrollbar gifted chat
  const [heightChange, setHeightChange] = useState(1);
  const [heightScreen, setHeightScreen] = useState(0);
  const marginAnim = useRef(new Animated.Value(0)).current;
  const sizeScrollBar =
    heightChange > heightScreen
      ? (heightScreen * heightScreen) / heightChange
      : 0;
  const difference =
    heightScreen > sizeScrollBar ? heightScreen - sizeScrollBar : 1;

  const scrollIndicatorPosition = Animated.multiply(
    marginAnim,
    heightScreen / heightChange,
  ).interpolate({
    inputRange: [0, difference],
    outputRange: [0, difference * -1],
    extrapolate: 'clamp',
  });
  const opacityScroll = useRef(new Animated.Value(0)).current;
  const fadeInScroll = () => {
    Animated.timing(opacityScroll, {
      toValue: 1,
      duration: 100,
      useNativeDriver: false,
      easing: Easing.bounce,
    }).start();
  };

  const fadeOutScroll = () => {
    Animated.timing(opacityScroll, {
      toValue: 0,
      duration: 500,
      delay: 500,
      useNativeDriver: false,
    }).start();
  };

  const handleFooter = () => {
    Animated.timing(animFooter, {
      toValue: 50,
      duration: 100,
      useNativeDriver: false,
    }).start();
    Animated.timing(animImgClose, {
      toValue: 30,
      duration: 10,
      useNativeDriver: false,
    }).start();
  };
  const handleHideFooter = () => {
    Animated.timing(animFooter, {
      toValue: 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
    Animated.timing(animImgClose, {
      toValue: 0,
      duration: 10,
      useNativeDriver: false,
    }).start();
    setIsReply(false);
  };

  const handleSizeBottomBar = (val: IMessage) => {
    Animated.timing(animBotBar, {
      toValue: heightBotBar,
      duration: 150,
      useNativeDriver: false,
    }).start();
    Animated.timing(animBottom, {
      toValue: 1,
      duration: 10,
      useNativeDriver: false,
    }).start();
    Animated.timing(animIconMoreEmoji, {
      toValue: 20,
      duration: 10,
      useNativeDriver: false,
    }).start();
  };

  const handleCloseView = () => {
    Animated.timing(animBotBar, {
      toValue: 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
    Animated.timing(animBottom, {
      toValue: 0,
      duration: 10,
      useNativeDriver: false,
    }).start();
    Animated.timing(animOptionPhone, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(animIconMoreEmoji, {
      toValue: 0,
      duration: 10,
      useNativeDriver: false,
    }).start();
  };

  const handleOptionPhone = () => {
    Animated.timing(animOptionPhone, {
      toValue: 150,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(animBottom, {
      toValue: 1,
      duration: 10,
      useNativeDriver: false,
    }).start();
  };

  const onPressTextLink = useCallback(async (url: any, type: any) => {
    switch (type) {
      case 'url':
        return await Linking.openURL(url);
      case 'phone':
        console.log('open option phone');
        return handleOptionPhone();
      case 'email':
        return console.log('email');
      default:
        return null;
    }
  }, []);

  const handleReply = () => {
    handleCloseView();
    handleFooter();
    giftedChatref.current?.textInput?.focus();
    console.log('onpress tra loi');
    setIsReply(true);
    refInputCustom.current.focus();
  };

  const handleScrollCustom = () => {
    giftedChatref.current?._messageContainerRef?.current?.scrollToIndex({
      animated: true,
      index: 0,
    });
  };

  const handleShowScroll = () => {
    Animated.timing(animScroll, {
      toValue: 0.7,
      duration: 50,
      useNativeDriver: false,
    }).start();
  };

  const handleHideScroll = () => {
    Animated.timing(animScroll, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    setMessages(messages1);
  }, []);

  const onSend = (newMessages: Array<IMessage>) => {
    console.log('onsend: ', newMessages);
    var newMessagesChat = [
      {
        _id: newMessages[0]._id,
        createdAt: newMessages[0].createdAt,
        text: newMessages[0].text,
        listUserSeen: [] as Array<UserSeen>,
        messageStatus: false,
        user: {
          _id: newMessages[0].user._id,
          name: newMessages[0].user.name,
          avatar: newMessages[0].user.avatar,
        },
        isReply: isReply,
        messageReply: replyMessage,
      },
    ] as Array<IMessage>;
    setMessages(prevMessages =>
      GiftedChat.append(prevMessages, newMessagesChat),
    );
    handleHideFooter();
    setIsReply(false);
  };

  const renderSend = (props: any) => {
    return <RenderSend props={props} />;
  };

  //onsend in custom input
  const onSendCustomInput = () => {
    let user = {
      _id: 1,
    };
    let newMessage = {} as any;
    const newmessages = [] as Array<any>;
    newMessage['createdAt'] = new Date(Date.now());
    newMessage['_id'] = (Date.now() * Math.random()).toString();
    newMessage['user'] = user;
    newMessage['text'] = inputCustom;
    newMessage['listUserSeen'] = [] as Array<UserSeen>;
    newMessage['isReply'] = isReply;
    newMessage['messageReply'] = replyMessage;
    newmessages.push(newMessage);
    setMessages(prevMessages => GiftedChat.append(prevMessages, newmessages));
    refInputCustom?.current.clear();
    handleHideFooter();
    setIsReply(false);
    setStatusSend(false);
  };

  //onpress emoji custom input
  const onPressEmojiCustomInput = () => {
    console.log('onpress emoji');
  };

  //render compose
  const renderComposer = (props: ComposerProps) => {
    return <ChatComposer {...props} />;
  };

  //handle action
  const handleMoreAction = () => {
    console.log('ref: ');
    maxWidthMoreAction.value = withTiming(100, {duration: 500});
    sizeIconActionComposer.value = withTiming(25, {duration: 500});
    hideArrowIconACtion.value = withTiming(0, {duration: 100});
    hideViewArrowIcon.value = withTiming(0, {duration: 100});
  };

  const renderActions = (action: ActionsProps) => {
    return (
      <RenderActions
        animatedViewArrowIcon={animatedViewArrowIcon}
        animatedArrowIcon={animatedArrowIcon}
        animatedIconAction={animatedIconAction}
        animatedMoreAction={animatedMoreAction}
        statusMoreAction={statusMoreAction}
        refMoreAction={refMoreAction}
        action={action}
        handleOpenAttachment={() => console.log('attachment')}
        handleOpenGallery={null}
        handleMoreAction={handleMoreAction}
      />
    );
  };

  const renderInputToolbar = (input: any) => {
    return (
      <InputToolbar
        containerStyle={{
          backgroundColor: 'pink',
          borderTopColor: '#FFFFFF',
        }}
        {...input}></InputToolbar>
    );
  };
  const renderLoading = () => {
    return <ActivityIndicator size={'large'} color={'blue'} />;
  };

  const renderLoadEarlier = (props: Readonly<LoadEarlierProps>) => {
    return (
      <ActivityIndicator
        {...props}
        hidesWhenStopped={true}
        size={'large'}
        color={'green'}
      />
    );
  };

  const clickExample = () => {
    setlisttest(2001);
    setIsPressSeen('1');
  };

  const clickCamera = () => {
    setlisttest(2000);
    setIsPressSeen('2');
  };

  const handleOnpressMessageText = (e: any) => {
    setlisttest(e);
  };

  const handleOnLongPressMessageText = (e: IMessage) => {
    handleSizeBottomBar(e);
    // setNameReply(e.user.name);
    setReplyMessage(e);
    setShowModal(!showModal);
  };

  const handleOnPressImageUserSeen = (e: IMessage) => {
    // setIsPressSeen('2000');
    const newList = messages1.map(val => {
      if (val._id == e._id) {
        return {...val, showUserSeen: true};
      } else {
        return {...val};
      }
    });
    setMessages(newList);
  };

  //handle click emoji in viewemoji
  const handlePressEmoji = (e: number) => {
    handleCloseView();
  };

  //handle click more emoji
  const handlePressMoreEmoji = () => {
    console.log('click more emoji');
    Animated.timing(animTouchBottomSheet, {
      toValue: SCREEN_HEIGHT,
      duration: 10,
      useNativeDriver: false,
    }).start();

    topMoreEmoji.value = withTiming(SCREEN_HEIGHT / 2, {duration: 300});
  };
  const handleCloseMoreEmoji = () => {
    Animated.timing(animTouchBottomSheet, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
    topMoreEmoji.value = withTiming(SCREEN_HEIGHT, {duration: 300});
  };

  //handle on change text input custom
  const changeTextInputCustom = (text: string) => {
    setInputCustom(text);
    if (text != '') {
      setStatusSend(true);
      hideIconAction();
    } else {
      setStatusSend(false);
      showIconAction();
    }
  };
  const onPressGalleryCustom = () => {
    console.log('onpress gallery custom');

    heightGalleryBottomSheet.value = withTiming(
      isShowGallery
        ? GALLERY_BOTTOMSHEET.HEIGHT_BOTTOMSHEET
        : GALLERY_BOTTOMSHEET.STARTING_POSITION,
      {
        duration: isShowGallery ? 300 : 100,
      },
    );
    translateYGalleryBottomSheet.value = withTiming(
      isShowGallery ? GALLERY_BOTTOMSHEET.STARTING_POSITION : SCREEN_HEIGHT,
      {
        duration: isShowGallery ? 300 : 100,
      },
    );
    setisShowGallery(!isShowGallery);
    refInputCustom.current.blur();
  };
  const hideGalleryBottomSheet = (time: number) => {
    heightGalleryBottomSheet.value = withTiming(
      GALLERY_BOTTOMSHEET.STARTING_POSITION,
      {
        duration: time,
      },
    );
    translateYGalleryBottomSheet.value = withTiming(SCREEN_HEIGHT, {
      duration: time,
    });
    setisShowGallery(true);
  };

  const onPressFileCustom = () => {
    console.log('file');
    heightOptionsGallery.value = withTiming(200, {duration: 200});
    Animated.timing(animBottomOptionsGallery, {
      toValue: 1,
      duration: 10,
      useNativeDriver: false,
    }).start();
  };

  //function show / hide icon action
  const showIconAction = () => {
    sizeIconAction.value = withTiming(25, {duration: 200});
    marginStartIconAction.value = withTiming(8, {duration: 150});
    sizeIconHide.value = withTiming(0, {duration: 150});
    marginStartIconHide.value = withTiming(0, {duration: 150});
  };
  const hideIconAction = () => {
    sizeIconHide.value = withTiming(20, {duration: 200});
    marginStartIconHide.value = withTiming(8, {duration: 200});
    sizeIconAction.value = withTiming(0, {duration: 150});
    marginStartIconAction.value = withTiming(0, {duration: 200});
    hideGalleryBottomSheet(100);
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={{flex: 1}}>
        {viewTabBar(clickExample, clickCamera, setMessages)}
        <GiftedChat
          ref={giftedChatref}
          messages={messages}
          onSend={messages1 => {
            onSend(messages1);
          }}
          user={{
            _id: 1,
          }}
          renderMessage={props => renderMessage(props, listtest)}
          // renderInputToolbar={input => renderInputToolbar(input)}
          renderInputToolbar={() => <></>}
          renderActions={action => renderActions(action)}
          renderSend={send => renderSend(send)}
          renderComposer={props => renderComposer(props)}
          renderLoading={() => renderLoading()}
          loadEarlier={false}
          renderLoadEarlier={renderLoadEarlier}
          // onInputTextChanged={handleChangeTextInput}
          renderBubble={props => (
            <RenderBubble
              props={props}
              messages={messages}
              listtest={listtest}
              refBubble={refBubble}
              handleChild={handleOnpressMessageText}
              setlisttest={setlisttest}
              handleOnLongPress={handleOnLongPressMessageText}
              replyMessage={replyMessage}
              handleOnPressImageUserSeen={handleOnPressImageUserSeen}
              isPressSeen={isPressSeen}
            />
          )}
          renderChatFooter={() => (
            <RenderChatFooter
              replyMessage={replyMessage}
              animFooter={animFooter}
              animImgClose={animImgClose}
              handleHideChatFooter={handleHideFooter}
            />
          )}
          renderDay={renderDay}
          renderAvatar={renderAvatar}
          isCustomViewBottom
          messagesContainerStyle={{backgroundColor: GIFTED_CHAT_BACKGROUND}}
          maxComposerHeight={100}
          isTyping
          renderAvatarOnTop
          infiniteScroll
          minInputToolbarHeight={0}
          onLongPress={(context: any, message: IMessage) => {
            console.log('onlongpress', context, 'message: ', message);
          }}
          parsePatterns={linkStyle => [
            //Type: Link, phone, email
            {
              pattern: /@(\w+)/,
              style: linkStyle,
              onPress: (tag: any, index: any) =>
                console.log(`Pressed on hashtag: ${tag}`, index),
            },
            {
              type: 'url',
              onPress: (url: any) => onPressTextLink(url, 'url'),
              style: styles.textHighlight,
            },
            {
              type: 'phone',
              onPress: (url: any) => onPressTextLink(url, 'phone'),
              style: styles.textHighlight,
            },
            {
              type: 'email',
              onPress: (url: any) => onPressTextLink(url, 'email'),
              style: styles.textHighlight,
            },
          ]}
          listViewProps={{
            //onScroll gifted chat
            onTouchStart: () => {
              fadeInScroll();
            },
            onTouchEnd: () => {
              refInputCustom.current.blur();
              hideGalleryBottomSheet(300);
              fadeOutScroll();
            },
            onScrollEndDrag: () => {
              // fadeOutScroll();
            },
            onMomentumScrollEnd: () => {
              console.log('scroll stop');
              fadeOutScroll();
            },
            onScroll: Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      y: marginAnim,
                    },
                  },
                },
              ],
              {
                useNativeDriver: false,
                listener: (e: any) => {
                  if (e.nativeEvent.contentOffset.y > 30) {
                    handleShowScroll();
                  } else {
                    handleHideScroll();
                  }
                  if (
                    e.nativeEvent.contentSize.height -
                      e.nativeEvent.layoutMeasurement -
                      80 <=
                    e.nativeEvent.contentOffset.y
                  ) {
                    setHideLoadEarlier(true);
                  } else {
                    setHideLoadEarlier(false);
                  }
                },
              },
            ),
            onContentSizeChange: (w: any, h: any) => {
              setHeightChange(h);
            },
            onLayout: (e: any) => {
              setHeightScreen(e.nativeEvent.layout.height);
            },
            scrollEventThrottle: 16,
          }}
        />

        {/*custom input tool bar*/}
        <ViewCustomInputToolBar
          placeholder="Typing a message..."
          styleIconHide={styleIconHide1}
          styleIconAction={styleIconAction}
          inputCustom={inputCustom}
          refInputCustom={refInputCustom}
          statusSend={statusSend}
          changeTextInputCustom={changeTextInputCustom}
          onSendCustomInput={onSendCustomInput}
          onPressEmojiCustomInput={onPressEmojiCustomInput}
          showIconAction={showIconAction}
          hideIconAction={hideIconAction}
          onPressGalleryCustom={onPressGalleryCustom}
          onPressFileCustom={onPressFileCustom}
        />
        {/*custom scrollbar */}
        <Animated.View
          style={[
            styles.scrollbar,
            {
              height: sizeScrollBar,
              transform: [{translateY: scrollIndicatorPosition}],
              opacity: opacityScroll,
            },
          ]}></Animated.View>
        <Animated.View
          style={{
            opacity: animScroll,
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: 'grey',
            position: 'absolute',
            bottom: 100,
            right: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={() => handleScrollCustom()}>
            <Image
              style={{height: 35, width: 35}}
              source={require('./assets/icon/scroll.png')}
            />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={{
            flex: 1,
            position: 'absolute',
            bottom: 0,
            height: animBottom.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%'],
            }),
            width: '100%',
            flexDirection: 'column-reverse',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => handleCloseView()}
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
            }}></TouchableOpacity>
          <ViewEmoji
            index={0}
            showModal={showModal}
            animIconMoreEmoji={animIconMoreEmoji}
            handlePressEmoji={handlePressEmoji}
            handlePressMoreEmoji={handlePressMoreEmoji}
          />
          <ViewActionBottom
            animBotBar={animBotBar}
            handleCloseView={handleCloseView}
            handleReply={handleReply}
          />
          <Animated.View
            style={{
              width: '100%',
              height: animTouchBottomSheet,
            }}>
            <TouchableOpacity
              onPress={() => handleCloseMoreEmoji()}
              style={{height: '100%', width: '100%'}}
            />
            <BottomSheet
              animMoreEmoji={animMoreEmoji}
              topMoreEmoji={styleMoreEmoji}
              handleCloseMoreEmoji={handleCloseMoreEmoji}
            />
          </Animated.View>
        </Animated.View>
        {/*view options gallery test */}
        <Animated.View
          style={{
            flex: 1,
            position: 'absolute',
            bottom: 0,
            height: animBottomOptionsGallery.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%'],
            }),
            width: '100%',
            flexDirection: 'column-reverse',
          }}>
          <TouchableOpacity
            onPress={() => {
              Animated.timing(animBottomOptionsGallery, {
                toValue: 0,
                duration: 10,
                useNativeDriver: false,
              }).start();
              heightOptionsGallery.value = withTiming(0, {duration: 200});
            }}
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
            }}></TouchableOpacity>
          <ViewOptionsGallery
            styleOptionsGallery={styleOptionsGallery}
            heightOptionsGallery={heightOptionsGallery}
          />
        </Animated.View>
        <ViewShowGallery
          styleGalleryBottomSheet={styleGalleryBottomSheet}
          translateYGalleryBottomSheet={translateYGalleryBottomSheet}
        />
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  viewTextUser: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginEnd: 10,
  },
  image24: {
    height: 100,
    width: 100,
  },
  image: {
    height: 200,
    width: 100,
    borderRadius: 15,
  },
  images: {
    height: 80,
    width: 80,
  },
  viewListImage2: {
    borderRadius: 10,
  },
  containerInput: {
    borderRadius: 10,
    borderWidth: 0.5,
    marginHorizontal: 5,
  },
  viewBottomBar: {
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textBottomBar: {
    fontSize: 16,
    fontWeight: 'normal',
    color: 'blue',
  },
  textHighlight: {
    fontSize: 14,
    color: '#939393',
    textDecorationLine: 'underline',
  },
  viewOptionPhone: {
    width: '100%',
    alignItems: 'center',
  },
  textOptionPhone: {
    fontSize: 16,
    fontWeight: '600',
  },
  touchGesture: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollbar: {
    width: GIFTED_CHAT_SCROLLBAR.WIDTH,
    borderRadius: GIFTED_CHAT_SCROLLBAR.BORDER_RADIUS,
    backgroundColor: 'red',
    height: GIFTED_CHAT_SCROLLBAR.HEIGHT,
    position: 'absolute',
    bottom: 0,
    marginTop: 50,
    marginBottom: 44,
    right: 0,
  },
});

export default Chat;
