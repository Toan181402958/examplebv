import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Animated, {withTiming} from 'react-native-reanimated';

interface OptionsGalleryProps {
  styleOptionsGallery: any;
  heightOptionsGallery: any;
}
const ViewOptionsGallery = ({
  styleOptionsGallery,
  heightOptionsGallery,
}: OptionsGalleryProps) => {
  const onpressCancel = () => {
    // heightOptionsGallery.value = withTiming(0, {duration: 200});
  };
  return (
    <Animated.View style={[styles.viewOptions, styleOptionsGallery]}>
      <TouchableOpacity
        onPress={() => console.log('onpress camera')}
        style={[styles.touchable, {height: 50, marginBottom: 3}]}>
        <Text style={styles.titleTouchable}>Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('onpress gallery')}
        style={[styles.touchable, {height: 50, marginBottom: 8}]}>
        <Text style={styles.titleTouchable}>Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onpressCancel}
        style={[
          styles.touchable,
          {marginBottom: 0, height: 40, backgroundColor: '#fc5f5f'},
        ]}>
        <Text style={[styles.titleTouchable, {color: 'white'}]}>Cancel</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  viewOptions: {
    width: '100%',
    paddingHorizontal: 20,
  },
  touchable: {
    width: '100%',
    backgroundColor: '#CCCCCC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  titleTouchable: {
    fontSize: 16,
  },
});
export default ViewOptionsGallery;
