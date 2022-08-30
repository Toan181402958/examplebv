import React, {useState} from 'react';
import {Image, TextInput, View} from 'react-native';
import {InputToolbar} from 'react-native-gifted-chat';

const RenderInputBar = () => {
  const handleImage = () => {
    //   if (valueInput == '') {
    //     return require('./assets/icon/gallery.png');
    //   } else if (valueInput != '') {
    //     return require('./assets/icon/send_message.png');
    //   }
    return require('../assets/icon/send_message.png');
  };

  return (
    <InputToolbar
      renderComposer={e => {
        return (
          <View
            style={{
              height: 50,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{height: 25, width: 25, resizeMode: 'cover'}}
                source={require('../assets/icon/smile.png')}
              />
            </View>
            <TextInput
              // onChangeText={e => {
              //   setValueInput(e);
              // }}
              style={{height: 50, flex: 8}}
              placeholder="Aa"
            />
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{height: 25, width: 25, resizeMode: 'cover'}}
                source={handleImage()}
              />
            </View>
          </View>
        );
      }}
    />
  );
};

export default RenderInputBar;
