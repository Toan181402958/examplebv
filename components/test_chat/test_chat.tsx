import React, {useRef, useState} from 'react';
import {
  Animated,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Test_Chat = () => {
  const [statusSend, setStatusSend] = useState(false);
  const [statusFile, setStatusFile] = useState(false);
  const animFile = useRef(new Animated.Value(30)).current;
  const animOpacityFile = useRef(new Animated.Value(1)).current;

  const handleChangeInput = (text: string) => {
    if (text != '') {
      setStatusSend(true);
      setOpenViewFile();
    } else {
      setStatusSend(false);
    }
  };
  const setOpenViewFile = () => {
    setStatusFile(true);
    Animated.timing(animFile, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(animOpacityFile, {
      toValue: 0,
      duration: 10,
      useNativeDriver: false,
    }).start();
  };
  const setCloseViewFile = () => {
    setStatusFile(false);
    Animated.timing(animFile, {
      toValue: 30,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(animOpacityFile, {
      toValue: 1,
      duration: 10,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewInputToolbar}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Animated.Image
              style={{
                height: animFile,
                width: animFile,
                opacity: animOpacityFile,
              }}
              source={require('./assets/file.png')}
            />
          </TouchableOpacity>
          {statusFile ? (
            <TouchableOpacity onPress={() => setCloseViewFile()}>
              <Image
                style={styles.imgMore}
                source={require('./assets/next.png')}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Image
                style={[styles.image]}
                source={require('./assets/gallery.png')}
              />
            </TouchableOpacity>
          )}
        </View>
        <TextInput
          onFocus={e => setOpenViewFile()}
          onBlur={e => setCloseViewFile()}
          onChangeText={text => handleChangeInput(text)}
          style={styles.input}
          placeholder={'Typeing a message..'}
          onSubmitEditing={Keyboard.dismiss}
        />
        <TouchableOpacity>
          <Image
            style={styles.image}
            source={
              statusSend
                ? require('./assets/send.png')
                : require('./assets/smile.png')
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewInputToolbar: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 8,
    paddingHorizontal: 10,
    flex: 1,
  },
  image: {
    height: 30,
    width: 30,
  },
  imgMore: {
    height: 25,
    width: 25,
  },
});

export default Test_Chat;
