import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

interface BottomSheetProps {
  height: any;
  style: any;
}
const BottomSheet = ({height, style}: BottomSheetProps) => {
  const translateY = useSharedValue(0);
  const context = useSharedValue({y: 0});
  const gesture = Gesture.Pan()
    // .onStart(() => [(context.value = {y: translateY.value})])
    .onUpdate(e => {
      translateY.value = e.translationY;
    });
  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[styles.bottomSheetContainer, style, rBottomSheetStyle]}>
        <View style={styles.line} />
      </Animated.View>
    </GestureDetector>
  );
};
const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    borderRadius: 25,
    bottom: 0,
    top: SCREEN_HEIGHT / 1,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
});
export default BottomSheet;
