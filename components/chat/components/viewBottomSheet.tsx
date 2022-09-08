import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  scrollTo,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

export const {height: SCREEN_HEIGHT} = Dimensions.get('window');

interface BottomSheetProps {
  animMoreEmoji: any;
  topMoreEmoji: any;
  handleCloseMoreEmoji: () => void;
}
const BottomSheet = ({
  animMoreEmoji,
  topMoreEmoji,
  handleCloseMoreEmoji,
}: BottomSheetProps) => {
  const translateY = useSharedValue(0);
  const context = useSharedValue({y: 0});

  const onScrollFirst = () => {
    console.log('on scroll first');
  };

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {y: translateY.value};
    })
    .onUpdate(e => {
      translateY.value = e.translationY + context.value.y;
    })
    .onEnd(() => {
      if (translateY.value > SCREEN_HEIGHT / 3) {
        onScrollFirst();
      } else if (translateY.value < SCREEN_HEIGHT / 1.5) {
      }
    });
  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[styles.bottomSheetContainer, rBottomSheetStyle, topMoreEmoji]}>
        <View style={styles.line} />
      </Animated.View>
    </GestureDetector>
  );
};
const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: 'grey',
    position: 'absolute',
    borderRadius: 25,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: '#000000',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
});
export default BottomSheet;
