import React, {useCallback, useState} from 'react';
import {Image} from 'react-native';
import {Actions, ActionsProps} from 'react-native-gifted-chat';
import Doccu from 'react-native-document-picker';

type RenderActionsView = {
  action: ActionsProps;
  handleOpenAttachment: any;
  handleOpenGallery: any;
};
const RenderActions = ({
  action,
  handleOpenAttachment,
  handleOpenGallery,
}: RenderActionsView) => {
  // const [fileResponse, setFileResponse] = useState([]);
  // const handleDocumentSelection = useCallback(async () => {
  //   try {
  //     const response = await DocumentPicker.pick({
  //       presentationStyle: 'fullScreen',
  //     });
  //     setFileResponse(response);
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // }, []);
  return (
    <>
      <Actions
        {...action}
        icon={() => (
          <Image
            style={{height: 25, width: 25, marginRight: 10, marginBottom: 10}}
            source={require('../../assets/icon/attachment.png')}
          />
        )}
        onSend={() => console.log('icon action file')}
        onPressActionButton={handleOpenAttachment}
      />
      <Actions
        {...action}
        icon={() => (
          <Image
            style={{height: 25, width: 25, marginRight: 10, marginBottom: 10}}
            source={require('../../assets/icon/gallery.png')}
          />
        )}
        onSend={() => console.log('icon smile')}
        onPressActionButton={handleOpenGallery}
      />
    </>
  );
};

export default RenderActions;
