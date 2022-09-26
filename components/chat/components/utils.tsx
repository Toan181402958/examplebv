import moment from 'moment';
import React from 'react';
import {FlatList} from 'react-native';
import {isSameDay, isSameUser} from 'react-native-gifted-chat/lib/utils';
import messages1 from '../data';

export enum GIFTED_CHAT_SPACES {
  MESSAGE_IN_MIN = 30,
  SIZE_IMAGE_USER_SEEN = 20,
  NUMBER_LIST_USER_SEEN = 10,
  PADDING_TOP_LIST_USER_SEEN = 0,
  SIZE_iMAGE_USER = 35,
  PADDING_USER_SEEN = 56,
  MARGIN_BOTTOM_MESSAGE = 10, // + 2 default margin message
}

export enum GIFTED_CHAT_IMAGE {
  HEIGHT_GROUP_ONE = 200,
  WIDTH_GROUP_ONE = 120,
  SIZE_GROUP_TWO_FOUR = 90,
  SIZE_GROUP_OTHER = 70,
  BORDERRADIUS = 15,
  BORDERRADIUS_OTHER = 4,
}

export enum GIFTED_CHAT_VIDEO {
  BORDER_RADIUS = 10,
  HEIGHT = 100,
  WIDTH = 180,
}

export enum GIFTED_CHAT_MESSAGE {
  LEFT = '#000000',
  RIGHT = '#FFFFFF',
  BACKGROUND_LEFT = '#CCCCCC',
  BACKGROUND_RIGHT = 'blue',
  MAXWIDTH = '260',
  FONTSIZE = '16',
  PADDING = '3',
  SIZE_ICON_FILE = '30',
  BORDER = '14',
  BORDER_MESSAGE = '15',
  BORDER_OTHER = '2',
  MARGIN_BOTTOM = '2',
  MARGIN_TOP_TIME = '10',
  MARGIN_BOTTOM_TIME = '10',
  MARGIN_TOP_DEFAULT_OTHER = '0',
  PADDING_BOTTOM_REPLY = '10',
  PADDING_HORIZONTAL_REPLY = '10',
  MARGIN_BOTTOM_REPLY = '7',
  BACKGROUND_REPLY = '#d1d1d1',
}

export enum GIFETD_CHAT_REPLY_MASSAGE {}

export enum GIFTED_CHAT_TEST {
  BACKGROUND_LEFT = 'green',
  BACKGROUND_RIGHT = 'red',
}

const messageLast = messages1[messages1.length - 1];

export const GIFTED_CHAT_BACKGROUND = '#FFFFFF';

//value reanimated gallery
export enum GALLERY_BOTTOMSHEET {
  HEIGHT_BOTTOMSHEET = 200,
  HEIGHT_HEADER = 30,
  MIN_HEIGHT_DONE = 0,
  STARTING_POSITION = 0,
}

//custom scrollbar
export enum GIFTED_CHAT_SCROLLBAR {
  WIDTH = '5',
  HEIGHT = '40',
  BORDER_RADIUS = '15',
  MIN_HEIGHT = '10',
  BACKGROUND = 'grey',
  HEIGHT_VIEW_TEXT = '16',
  PADDINGhORIZOTAL_VIEW_TEXT = '10',
  BORDER_VIEW_TEXT = '8',
  MARGIN_RIGHT_VIEW_TEXT = '4',
  BACKGROUND_VIEW_TEXT = 'grey',
  FONTSIZE_TEXT = '10',
  COLOR_TEXT = 'black',
}

export const isFirstOfGroup = (
  timeCurrent: any,
  timePrevious: any,
  currentMessage: any,
  previousMessage: any,
) => {
  if (
    timeCurrent - timePrevious > GIFTED_CHAT_SPACES.MESSAGE_IN_MIN ||
    !isSameUser(currentMessage, previousMessage)
  ) {
    return true;
  }
  return false;
};

export const isFirstOfGroupUser = (
  timeCurrent: any,
  timePrevious: any,
  currentMessage: any,
  previousMessage: any,
) => {
  if (isSameUser(currentMessage, previousMessage)) {
    return true;
  }
  return false;
};

export const isFirstOFGroupOtherUser = (
  timeCurrent: any,
  timePrevious: any,
  currentMessage: any,
  previousMessage: any,
) => {
  if (
    !isSameUser(currentMessage, previousMessage) &&
    timeCurrent - timePrevious < GIFTED_CHAT_SPACES.MESSAGE_IN_MIN
  ) {
    return true;
  }
  return false;
};

export const isLastOfGroup = (
  currentMessage: any,
  nextMessage: any,
  timeNext: any,
  timeCurrent: any,
) => {
  if (
    timeNext - timeCurrent > GIFTED_CHAT_SPACES.MESSAGE_IN_MIN ||
    !isSameUser(currentMessage, nextMessage)
  ) {
    return true;
  }
  return false;
};

export const isMessageOnly = (
  timeCurrent: any,
  timePrevious: any,
  timeNext: any,
) => {
  if (
    timeCurrent - timePrevious > GIFTED_CHAT_SPACES.MESSAGE_IN_MIN &&
    timeNext - timeCurrent > GIFTED_CHAT_SPACES.MESSAGE_IN_MIN
  ) {
    return true;
  }
  return false;
};

export const isLastOfGroupTime = (timeNext: any, timeCurrent: any) => {
  if (timeNext - timeCurrent > GIFTED_CHAT_SPACES.MESSAGE_IN_MIN) {
    return true;
  }
  return false;
};

export const isFirstOfGroupTime = (timeCurrent: any, timePrevious: any) => {
  if (timeCurrent - timePrevious > GIFTED_CHAT_SPACES.MESSAGE_IN_MIN) {
    return true;
  }
  return false;
};

//example scroll bar value
export const listMessageScrollDemo = [] as Array<any>;
export const element = {} as any;
export const listIndex = [] as Array<number>;
