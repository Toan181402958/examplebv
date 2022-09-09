import React, {useCallback, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Actions, ActionsProps} from 'react-native-gifted-chat';
import Doccu from 'react-native-document-picker';
import Animated from 'react-native-reanimated';

interface RenderActionsView {
  animatedViewArrowIcon: any;
  animatedArrowIcon: any;
  animatedIconAction: any;
  animatedMoreAction: any;
  statusMoreAction: boolean;
  refMoreAction: React.LegacyRef<Actions>;
  action: ActionsProps;
  handleOpenAttachment: any;
  handleOpenGallery: any;
  handleMoreAction: () => void;
}
const RenderActions = ({
  animatedViewArrowIcon,
  animatedArrowIcon,
  animatedIconAction,
  animatedMoreAction,
  statusMoreAction,
  refMoreAction,
  action,
  handleOpenAttachment,
  handleOpenGallery,
  handleMoreAction,
}: RenderActionsView) => {
  return (
    <View style={styles.container}>
      <Animated.View style={[{flexDirection: 'row'}, animatedMoreAction]}>
        <Actions
          {...action}
          containerStyle={{}}
          icon={() => (
            <Animated.Image
              style={[
                {height: 25, width: 25, marginRight: 10, marginBottom: 10},
                animatedIconAction,
              ]}
              source={require('../../assets/icon/attachment.png')}
            />
          )}
          onSend={() => console.log('icon action file')}
          onPressActionButton={handleOpenAttachment}
        />
        <Actions
          {...action}
          ref={refMoreAction}
          icon={() => (
            <Animated.Image
              style={[
                {height: 25, width: 25, marginRight: 10, marginBottom: 10},
                animatedIconAction,
              ]}
              source={require('../../assets/icon/gallery.png')}
            />
          )}
          onSend={() => console.log('icon smile')}
          onPressActionButton={handleOpenGallery}
        />
      </Animated.View>
      <Animated.View style={animatedViewArrowIcon}>
        <Actions
          {...action}
          containerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            margin: 0,
          }}
          icon={() => (
            <Animated.Image
              style={[{height: 16, width: 16}, animatedArrowIcon]}
              source={require('../../assets/icon/right_arrow.png')}
            />
          )}
          onPressActionButton={handleMoreAction}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default RenderActions;
