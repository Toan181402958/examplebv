import React from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import {IMessage} from '../../model';
import {GIFTED_CHAT_BACKGROUND, GIFTED_CHAT_IMAGE} from '../utils';

interface MessageImageProp {
  props: any;
  handleOnLongPress: (e: IMessage) => void;
}
const RenderMessageImage = ({props, handleOnLongPress}: MessageImageProp) => {
  const imgs = props.currentMessage.image.split(',');
  const length = imgs.length;
  const _id = props.currentMessage.user._id;
  var ValueBottomLeft = 0;

  const handleBorderBottomLeft = (
    index: number,
    length: number,
    id: number,
    value: number,
  ) => {
    switch (length) {
      case 1:
        return (ValueBottomLeft = GIFTED_CHAT_IMAGE.BORDERRADIUS);
      case 2:
        ValueBottomLeft =
          index + 1 == 1
            ? GIFTED_CHAT_IMAGE.BORDERRADIUS
            : GIFTED_CHAT_IMAGE.BORDERRADIUS_OTHER;
        return ValueBottomLeft;
      case GIFTED_CHAT_IMAGE.BORDERRADIUS_OTHER:
        ValueBottomLeft =
          index + 1 == 3
            ? GIFTED_CHAT_IMAGE.BORDERRADIUS
            : GIFTED_CHAT_IMAGE.BORDERRADIUS_OTHER;
        return ValueBottomLeft;
      default:
        switch (value) {
          case 0:
            ValueBottomLeft =
              index + 1 == length - 2
                ? GIFTED_CHAT_IMAGE.BORDERRADIUS
                : GIFTED_CHAT_IMAGE.BORDERRADIUS_OTHER;
            return ValueBottomLeft;
          case 1:
            if (index + 1 == length && id != 1) {
              ValueBottomLeft = GIFTED_CHAT_IMAGE.BORDERRADIUS;
            } else if (
              index + 1 == length ||
              (index + 1 == length - 3 && id == 1)
            ) {
              ValueBottomLeft = GIFTED_CHAT_IMAGE.BORDERRADIUS;
            } else {
              ValueBottomLeft = GIFTED_CHAT_IMAGE.BORDERRADIUS_OTHER;
            }
            return ValueBottomLeft;
          case 2:
            if (index + 1 == length - 1) {
              ValueBottomLeft = GIFTED_CHAT_IMAGE.BORDERRADIUS;
            } else if (
              index + 1 == length - GIFTED_CHAT_IMAGE.BORDERRADIUS_OTHER &&
              id == 1
            ) {
              ValueBottomLeft = GIFTED_CHAT_IMAGE.BORDERRADIUS;
            } else {
              ValueBottomLeft = GIFTED_CHAT_IMAGE.BORDERRADIUS_OTHER;
            }
            return ValueBottomLeft;
          default:
            return GIFTED_CHAT_IMAGE.BORDERRADIUS_OTHER;
        }
    }
  };
  return (
    <TouchableOpacity
      onLongPress={() => handleOnLongPress(props.currentMessage)}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          maxWidth:
            length == 1
              ? GIFTED_CHAT_IMAGE.WIDTH_GROUP_ONE + 30
              : length == 2 || length == GIFTED_CHAT_IMAGE.BORDERRADIUS_OTHER
              ? GIFTED_CHAT_IMAGE.SIZE_GROUP_TWO_FOUR * 2 + 30
              : GIFTED_CHAT_IMAGE.SIZE_GROUP_OTHER * 3 + 30,
          justifyContent: _id == 1 ? 'flex-end' : 'flex-start',
          backgroundColor: GIFTED_CHAT_BACKGROUND,
        }}>
        {imgs.map((e: any, index: number) => {
          {
            handleBorderBottomLeft(index, length, _id, length % 3);
          }
          return (
            <Image
              key={Date.now() * Math.random()}
              source={{uri: e}}
              style={{
                height:
                  length == 1
                    ? GIFTED_CHAT_IMAGE.HEIGHT_GROUP_ONE
                    : length == 2 ||
                      length == GIFTED_CHAT_IMAGE.BORDERRADIUS_OTHER
                    ? GIFTED_CHAT_IMAGE.SIZE_GROUP_TWO_FOUR
                    : GIFTED_CHAT_IMAGE.SIZE_GROUP_OTHER,
                width:
                  length == 1
                    ? GIFTED_CHAT_IMAGE.WIDTH_GROUP_ONE
                    : length == 2 ||
                      length == GIFTED_CHAT_IMAGE.BORDERRADIUS_OTHER
                    ? GIFTED_CHAT_IMAGE.SIZE_GROUP_TWO_FOUR
                    : GIFTED_CHAT_IMAGE.SIZE_GROUP_OTHER,
                marginRight: 2,
                marginBottom: 2,
                borderTopLeftRadius:
                  index + 1 == 1
                    ? GIFTED_CHAT_IMAGE.BORDERRADIUS
                    : GIFTED_CHAT_IMAGE.BORDERRADIUS_OTHER,
                borderTopRightRadius:
                  length == 1
                    ? GIFTED_CHAT_IMAGE.BORDERRADIUS
                    : length == 2 ||
                      length == GIFTED_CHAT_IMAGE.BORDERRADIUS_OTHER
                    ? index + 1 == 2
                      ? GIFTED_CHAT_IMAGE.BORDERRADIUS
                      : GIFTED_CHAT_IMAGE.BORDERRADIUS_OTHER
                    : index + 1 == 3
                    ? GIFTED_CHAT_IMAGE.BORDERRADIUS
                    : GIFTED_CHAT_IMAGE.BORDERRADIUS_OTHER,
                borderBottomRightRadius:
                  length == 1
                    ? GIFTED_CHAT_IMAGE.BORDERRADIUS
                    : length == 2 ||
                      length == GIFTED_CHAT_IMAGE.BORDERRADIUS_OTHER
                    ? index + 1 == length
                      ? GIFTED_CHAT_IMAGE.BORDERRADIUS
                      : GIFTED_CHAT_IMAGE.BORDERRADIUS_OTHER
                    : index + 1 == length ||
                      (index + 1 == Math.floor(length / 3) * 3 && _id != 1)
                    ? GIFTED_CHAT_IMAGE.BORDERRADIUS
                    : GIFTED_CHAT_IMAGE.BORDERRADIUS_OTHER,
                borderBottomLeftRadius: ValueBottomLeft,
              }}
            />
          );
        })}
      </View>
    </TouchableOpacity>
  );
};

export default RenderMessageImage;
