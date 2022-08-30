import React, {useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DatePicker from './DatePicker';

const TestDateTimeScreen = () => {
  const refButton = useRef<any>(null);
  const [text, setText] = useState('');

  const handleClick = () => {
    setText(refButton.current.textDate + ' ' + refButton.current.textTime);
  };
  return (
    <View style={styles.container}>
      <DatePicker
        ref={refButton}
        typeDate="12h"
        dateTime="07/09/2022"
        time="07:20:00"
      />
      <Text>{text}</Text>
      <TouchableOpacity style={styles.touchButton} onPress={handleClick}>
        <Text>Show</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewButton: {
    flexDirection: 'row',
  },
  touchButton: {
    height: 40,
    width: 100,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 20,
  },
});
export default TestDateTimeScreen;
