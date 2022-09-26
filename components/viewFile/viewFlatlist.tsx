import React, {useCallback, useRef, useState} from 'react';
import {
  Animated,
  Easing,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {dataImage} from './data';

const ViewFlatlist = () => {
  const [data, setData] = useState(dataImage);
  const marginAnim = useRef(new Animated.Value(0)).current;
  const [heightChange, setHeightchange] = useState(1);
  const [heightScreen, setHeightScreen] = useState(0);
  const opacity = useRef(new Animated.Value(0)).current;
  const [test, setTest] = useState(0);
  const itemVisiblePercentThreshold = useRef(50);

  const sizeScrollBar =
    heightChange > heightScreen
      ? (heightScreen * heightScreen) / heightChange
      : heightScreen;

  const difference =
    heightScreen > sizeScrollBar ? heightScreen - sizeScrollBar : 1;

  const scrollIndicatorPosition = Animated.multiply(
    marginAnim,
    heightScreen / heightChange,
  ).interpolate({
    inputRange: [0, difference],
    outputRange: [0, difference],
    extrapolate: 'clamp',
  });

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 100,
      useNativeDriver: false,
      easing: Easing.bounce,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      delay: 500,
      useNativeDriver: false,
    }).start();
  };

  const handleTest = (e: any) => {
    // setTest(e.nativeEvent.contentOffset.y);
    // console.log('e: ', e.nativeEvent);
  };
  const _onViewableItemsChanged = useCallback(
    (viewableItems: any, changed: any) => {
      console.log('Visible items are', viewableItems);
      console.log('changed: ', changed);
    },
    [],
  );

  return (
    <View style={styles.container}>
      <View style={styles.viewList}>
        <FlatList
          contentContainerStyle={{paddingRight: 14}}
          showsVerticalScrollIndicator={false}
          onViewableItemsChanged={_onViewableItemsChanged}
          // viewabilityConfig={itemVisiblePercentThreshold.current}
          onScrollBeginDrag={e => {}}
          onResponderStart={e => {
            // console.log('responder: ');
          }}
          onTouchStart={e => {
            fadeIn();
            // console.log('start: ');
          }}
          onLayout={e => {
            setHeightScreen(e.nativeEvent.layout.height);
          }}
          onContentSizeChange={(w, h) => {
            setHeightchange(h);
          }}
          onScrollEndDrag={e => {
            // console.log('scroll end: ', e.nativeEvent);
            fadeOut();
          }}
          onScrollAnimationEnd={() => {}}
          onScroll={Animated.event(
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
              listener: e => {
                handleTest(e);
              },
            },
          )}
          scrollEventThrottle={16}
          data={data}
          renderItem={({item, index}) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                //   setIdImage(item.id);
                //   handleStatus(item);
                console.log(item.status);
              }}
              style={[styles.imageItem, {padding: item.status ? 5 : 0}]}>
              <Image
                style={{height: '100%', width: '100%', borderRadius: 5}}
                source={item.image}
              />
            </TouchableOpacity>
          )}
        />
        <Animated.View
          style={{
            position: 'absolute',
            borderRadius: 8,
            right: 0,
            height: sizeScrollBar,
            opacity: opacity,
            width: 5,
            transform: [{translateY: scrollIndicatorPosition}],
            backgroundColor: '#FF0000',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  viewList: {
    height: '100%',
    width: 300,
  },
  imageItem: {
    height: 300,
    width: 300,
    marginTop: 10,
  },
});
export default ViewFlatlist;
