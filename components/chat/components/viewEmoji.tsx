import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Emoji from 'react-native-emoji';
import Svg, {Path} from 'react-native-svg';
import {listEmoji} from '../dataEmoji';

interface EmojiProps {
  index: number;
  showModal: boolean;
  handlePressEmoji: (e: number) => void;
  handlePressMoreEmoji: () => void;
}
const ViewEmoji = ({
  index,
  handlePressEmoji,
  showModal,
  handlePressMoreEmoji,
}: EmojiProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={listEmoji}
        style={{maxHeight: 30, maxWidth: 200}}
        horizontal
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => handlePressEmoji(index)}
            style={[styles.touchableEmoji, {marginLeft: index == 0 ? 0 : 10}]}>
            <Emoji name={item} style={styles.emoji} />
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        onPress={() => handlePressMoreEmoji()}
        style={styles.touchMoreEmoji}>
        <Image
          style={{height: showModal ? 20 : 0, width: showModal ? 20 : 0}}
          source={require('../assets/icon/add.png')}
        />
        {/* <Svg height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <Path d="M0 0h24v24H0z" fill="none" />
          <Path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </Svg> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '5%',
    backgroundColor: '#d3d2cf',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    flexDirection: 'row',
    paddingHorizontal: 13,
  },
  touchableEmoji: {
    borderRadius: 8,
  },
  emoji: {
    fontSize: 20,
  },
  touchMoreEmoji: {
    backgroundColor: '#FFFFFF',
    padding: 3,
    borderRadius: 15,
    marginLeft: 8,
  },
});
export default ViewEmoji;
