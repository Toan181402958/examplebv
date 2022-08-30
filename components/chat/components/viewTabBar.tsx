import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParams} from '../test-chat';

//#0091FF
const viewTabBar = (
  clickExample: () => void,
  clickCamera: () => void,
  setMessages: any,
) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Image
            style={styles.iconBack}
            source={require('../assets/icon/back.png')}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Group chat</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            clickExample();
            console.log('onpress call');
          }}>
          <Image
            style={[styles.iconBack, {marginEnd: 10}]}
            source={require('../assets/icon/call.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            clickCamera();
            console.log('onpress video camera');
          }}>
          <Image
            style={styles.iconBack}
            source={require('../assets/icon/video_camera.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    backgroundColor: '#CFCFCF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  iconBack: {
    height: 23,
    width: 23,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#403F3F',
    marginStart: 10,
  },
});

export default viewTabBar;
