import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParams} from './test-chat';

const ViewChat = () => {
  const snapPoints = ['10%', '50%', '90%'];
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Chat')}
        style={styles.button}>
        <Text>Group chat</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('DemoWebrtc')}
        style={styles.button}>
        <Text>DemoWebrtc</Text>
      </TouchableOpacity>
    </View>
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
});
export default ViewChat;
