import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated from 'react-native-reanimated';

interface ViewCustomInputProps {
  placeholder: string;
  styleIconHide: any;
}
const ViewCustomInputToolBar = ({
  placeholder,
  styleIconHide,
}: ViewCustomInputProps) => {
  return (
    <View style={[styles.container]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity>
          <Animated.Image
            style={styles.icon}
            source={require('../assets/icon/attachment.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require('../assets/icon/gallery.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={[styles.iconHide]}
            source={require('../assets/icon/back.png')}
          />
        </TouchableOpacity>
      </View>
      <TextInput
        //   onFocus={e => setOpenViewFile()}
        //   onBlur={e => setCloseViewFile()}
        //   onChangeText={text => handleChangeInput(text)}
        multiline
        style={styles.textInput}
        placeholder={placeholder}
        //   onSubmitEditing={Keyboard.dismiss}
      />
      <TouchableOpacity>
        <Image
          style={[styles.icon, {marginStart: 10, marginEnd: 5}]}
          source={require('../assets/icon/send_message.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
  },
  textInput: {
    width: 200,
    borderWidth: 1,
    minHeight: 40,
    paddingVertical: 0,
    borderRadius: 15,
    paddingHorizontal: 10,
    maxHeight: 80,
    flex: 1,
  },
  icon: {
    height: 25,
    width: 25,
    marginStart: 5,
  },
  iconHide: {
    height: 20,
    width: 20,
    marginHorizontal: 10,
  },
});

export default ViewCustomInputToolBar;
