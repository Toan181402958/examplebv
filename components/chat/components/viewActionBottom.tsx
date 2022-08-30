import React from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity} from 'react-native';

interface ViewActionBottomProps {
  animBotBar: any;
  handleReply: () => void;
  handleCloseView: () => void;
}
const ViewActionBottom = ({
  animBotBar,
  handleReply,
  handleCloseView,
}: ViewActionBottomProps) => {
  return (
    <Animated.View style={[styles.viewBottomBar, {height: animBotBar}]}>
      <TouchableOpacity
        onPress={() => {
          handleReply();
        }}>
        <Text style={styles.textBottomBar}>Trả lời</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          handleCloseView();
          // handleCoppyText();
        }}>
        <Text style={styles.textBottomBar}>Sao Chép</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  viewBottomBar: {
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 0.3,
  },
  textBottomBar: {
    fontSize: 16,
    fontWeight: 'normal',
    color: 'blue',
  },
});

export default ViewActionBottom;
