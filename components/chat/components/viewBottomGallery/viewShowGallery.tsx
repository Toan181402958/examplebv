import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Gesture,
  GestureDetector,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {transformer} from '../../../../metro.config';
import {GALLERY_BOTTOMSHEET} from '../utils';
export const {height: SCREEN_HEIGHT} = Dimensions.get('window');

interface ShowGalleryProps {
  styleGalleryBottomSheet: any;
  translateYGalleryBottomSheet: any;
}

const ViewShowGallery = ({
  styleGalleryBottomSheet,
  translateYGalleryBottomSheet,
}: ShowGalleryProps) => {
  const heightViewDone = useSharedValue(GALLERY_BOTTOMSHEET.MIN_HEIGHT_DONE);
  //   consttranslateYGalleryBottomSheet = useSharedValue(SCREEN_HEIGHT);
  const context1 = useSharedValue({y: 0});
  const iconDone = useSharedValue(false);
  const eventHandle = useAnimatedGestureHandler({
    onStart(event, context) {
      context1.value = {y: translateYGalleryBottomSheet.value};
    },
    onActive(event, context) {
      //  translateYGalleryBottomSheet.value = startingPosition + event.translationY;
      translateYGalleryBottomSheet.value =
        event.translationY + context1.value.y;
    },
    onEnd(event, context) {
      if (translateYGalleryBottomSheet.value > -SCREEN_HEIGHT / 3) {
        translateYGalleryBottomSheet.value = withTiming(
          GALLERY_BOTTOMSHEET.STARTING_POSITION,
          {
            duration: 200,
          },
        );
        heightViewDone.value = withTiming(0, {duration: 100});
      } else {
        translateYGalleryBottomSheet.value = withTiming(
          -(
            SCREEN_HEIGHT -
            GALLERY_BOTTOMSHEET.HEIGHT_BOTTOMSHEET -
            GALLERY_BOTTOMSHEET.HEIGHT_HEADER
          ),
          {duration: 200},
        );
        heightViewDone.value = withTiming(GALLERY_BOTTOMSHEET.HEIGHT_HEADER, {
          duration: 200,
        });
      }
    },
  });
  const rLine = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateYGalleryBottomSheet.value}],
    };
  });
  const rBottomView = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY:
            SCREEN_HEIGHT -
            GALLERY_BOTTOMSHEET.HEIGHT_BOTTOMSHEET +
            translateYGalleryBottomSheet.value,
        },
      ],
    };
  });
  const rViewDone = useAnimatedStyle(() => {
    return {
      height: heightViewDone.value,
    };
  });

  const handleDone = () => {
    translateYGalleryBottomSheet.value = withTiming(
      GALLERY_BOTTOMSHEET.STARTING_POSITION,
      {
        duration: 200,
      },
    );
    heightViewDone.value = withTiming(0, {duration: 200});
  };
  const tap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      translateYGalleryBottomSheet.value = withTiming(
        -(
          SCREEN_HEIGHT -
          GALLERY_BOTTOMSHEET.HEIGHT_BOTTOMSHEET -
          GALLERY_BOTTOMSHEET.HEIGHT_HEADER
        ),
        {duration: 200},
      );
      heightViewDone.value = withTiming(GALLERY_BOTTOMSHEET.HEIGHT_HEADER, {
        duration: 200,
      });
    });
  return (
    <Animated.View style={[styles.container, styleGalleryBottomSheet]}>
      <PanGestureHandler onGestureEvent={eventHandle}>
        <Animated.View
          style={[
            styles.header,
            {height: GALLERY_BOTTOMSHEET.HEIGHT_HEADER},
            rLine,
          ]}>
          <GestureDetector gesture={tap}>
            <View style={{height: '100%', justifyContent: 'center'}}>
              <View style={styles.line} />
            </View>
          </GestureDetector>
          <Animated.View style={[styles.viewDone, rViewDone]}>
            <TouchableOpacity onPress={handleDone}>
              <Text style={styles.textDone}>Done</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
      <Animated.View
        style={[
          rBottomView,
          {
            height: SCREEN_HEIGHT - GALLERY_BOTTOMSHEET.HEIGHT_HEADER,
          },
          styles.child,
        ]}
      />
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bfbfbf',
    position: 'absolute',
  },
  line: {
    height: 3,
    backgroundColor: 'black',
    width: 50,
    marginBottom: 10,
  },
  child: {
    width: '100%',
    backgroundColor: 'blue',
    bottom: 0,
    position: 'absolute',
  },
  viewDone: {
    position: 'absolute',
    start: 0,
    top: 0,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  textDone: {
    color: '#007fff',
    fontSize: 15,
  },
});
export default ViewShowGallery;
