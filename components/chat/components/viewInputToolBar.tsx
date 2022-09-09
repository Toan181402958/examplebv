import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {InputToolbar} from 'react-native-gifted-chat';

const viewInputToolBar = (input: any) => {
  return (
    <View style={styles.container}>
      <TextInput multiline style={styles.input} />
      <Text>Send</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default viewInputToolBar;
