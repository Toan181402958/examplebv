import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParams} from '../test-chat';
const DemoWebrtc = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    // <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
    //   <TouchableOpacity style={styles.button}>
    //     <Text>call</Text>
    //   </TouchableOpacity>
    // </View>
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
        <View style={styles.footer}></View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    width: 200,
    borderColor: '#000000',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginBottom: 20,
  },
  body: {
    backgroundColor: '#FFFFFF',
  },
  stream: {
    flex: 1,
  },
  footer: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default DemoWebrtc;
