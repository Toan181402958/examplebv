import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const MultipleText = () => {
  const validateEmail = (email: string) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(emailRegex.test(email)){
        return true;
    }else{
        return false;
    }
}
  return (
    <View>
      <Text>
        <TouchableOpacity
          onPress={() => {
            console.log('onpress text here 1');
          }}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'red', fontSize: 20}} onPress={() => {}}>
            onPress here
          </Text>
        </TouchableOpacity>
        <Text style={{}}>hello</Text>
      </Text>
      <Text
        onPress={() => {
          console.log('second');
        }}>
        text second
      </Text>
    </View>
  );
};
export default MultipleText;
