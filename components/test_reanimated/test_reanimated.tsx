import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import BottomSheet from './viewBottomSheet';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const Test_Reanimated = () => {
  const height = useSharedValue(SCREEN_HEIGHT);

  const style = useAnimatedStyle(() => {
    return {
      top: height.value,
    };
  }, []);

  const btnTest = () => {
    height.value = withTiming(SCREEN_HEIGHT / 1.5, {duration: 500});
  };

  const hideBottomSheet = () => {
    height.value = withTiming(SCREEN_HEIGHT, {duration: 300});
  };
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => hideBottomSheet()}
        style={styles.container}>
        {/* <TouchableOpacity style={styles.button} onPress={onPress} /> */}
        <TouchableOpacity onPress={() => btnTest()}>
          <Text style={{color: '#FFFFFF'}}>Show</Text>
        </TouchableOpacity>
        <BottomSheet height={height} style={style} />
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Test_Reanimated;
