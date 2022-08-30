import {LinkPreview} from '@flyerhq/react-native-link-preview';
import React, {useEffect} from 'react';
import {
  Image,
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  UIManager,
  View,
} from 'react-native';
// import {RenderItemMessage, RenderMessage} from '../model';
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ViewLinkMessage = (val: any) => {
  var link1 = val.currentMessage.linkMessage.url.toString();

  return (
    <View style={{}}>
      {/* <LinkPreview
        text={link1}
        enableAnimation
        containerStyle={styles.previewContainer}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  previewContainer: {
    backgroundColor: '#e1e1e1',
    borderRadius: 15,
    overflow: 'hidden',
    width: 250,
  },
});

export default ViewLinkMessage;
