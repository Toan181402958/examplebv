import React from 'react';
import {IMessage} from './model';

export const messageDefault = {
  _id: 2000,
  text: 'This is a system message',
  createdAt: new Date(2010, 5, 11, 17, 20, 0),
  system: true,
  image: '',
  user: {
    _id: '',
    name: '',
    avatar: '',
  },
  file_type: '',
  file_id: Date.now() * Math.random(),
  size_file: 0,
  listUserSeen: [],
  messageStatus: false,
  showUserSeen: false,
  isReply: false,
  messageReply: null,
  showTimeSeen: false,
  video: '',
  type: '',
  listImageUserSeen: [],
} as IMessage;

const messages1 = [
  {
    _id: 1,
    text: 'This is a system message',
    createdAt: new Date(2016, 4, 10, 20, 20, 0),
    system: false,
    image: '',
    user: {
      _id: '',
      name: '',
      avatar: '',
    },
    file_type: '',
    file_id: Date.now() * Math.random(),
    size_file: 0,
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    showTimeSeen: false,

    video: '',
    type: 'text',
    listImageUserSeen: [],
  },
  {
    _id: 2,
    text: 'Hello developer',
    createdAt: new Date(2016, 4, 11, 17, 20, 0),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'text',
  },
  {
    _id: 3,
    text: '',
    createdAt: new Date(2016, 4, 12, 17, 20, 0),
    user: {
      _id: 1,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FWKJxp5J3bFWot4VzCgNbSX6yu6XFC49Gw&usqp=CAU,https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FWKJxp5J3bFWot4VzCgNbSX6yu6XFC49Gw&usqp=CAU,https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FWKJxp5J3bFWot4VzCgNbSX6yu6XFC49Gw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FWKJxp5J3bFWot4VzCgNbSX6yu6XFC49Gw&usqp=CAU,https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FWKJxp5J3bFWot4VzCgNbSX6yu6XFC49Gw&usqp=CAU,https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FWKJxp5J3bFWot4VzCgNbSX6yu6XFC49Gw&usqp=CAU,https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMt1xsZni5fO2yUBx5ITfncJjWLlKT8e_PVw&usqp=CAU',
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'image',
  },
  {
    _id: 4,
    text: 'This is a quick reply. Do you love Gifted Chat? (radio) KEEP IT',
    createdAt: new Date(2016, 4, 13, 17, 20, 0),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'text',
  },
  {
    _id: 5,
    text: 'Th @@react @react-native @react-native',
    createdAt: new Date(2016, 4, 14, 17, 20, 0),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'text',
  },
  {
    _id: 6,
    text: 'Come on!',
    createdAt: new Date(2016, 4, 15, 18, 20, 0),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'text',
  },
  {
    _id: 7,
    text: `Hello this is an example of the ParsedText, links like http://www.google.com or http://www.facebook.com are clickable and phone number 444-555-6666 can call too.
        But you can also do more with this package, for example Bob will change style and David too. foo@gmail.com
        And the magic number is 42! www.google.com and https://google.com and http://google.com and google.com
        @react @react-native`,
    createdAt: new Date(2016, 4, 16, 17, 20, 0),
    user: {
      _id: 1,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'text',
  },
  {
    _id: 8,
    createdAt: new Date(2016, 4, 17, 2, 10, 0),
    user: {
      _id: 1,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FWKJxp5J3bFWot4VzCgNbSX6yu6XFC49Gw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMh6fkH3wdRgjaKACzV9SPQvYjAOTfXGfOLw&usqp=CAU',
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'image',
  },
  {
    _id: 9,
    text: ``,
    createdAt: new Date(2016, 4, 18, 19, 20, 0),
    user: {
      _id: 1,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FWKJxp5J3bFWot4VzCgNbSX6yu6XFC49Gw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMh6fkH3wdRgjaKACzV9SPQvYjAOTfXGfOLw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3g-wCxkSNAqRmzIdMisD3coSZhWdlmUoajg&usqp=CAU',
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'image',
  },
  {
    _id: Date.now() * Math.random(),
    text: ``,
    createdAt: new Date(2016, 4, 19, 19, 20, 0),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FWKJxp5J3bFWot4VzCgNbSX6yu6XFC49Gw&usqp=CAU',
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'image',
  },
  {
    _id: Date.now() * Math.random(),
    text: ``,
    createdAt: new Date(2016, 4, 20, 19, 20, 0),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FWKJxp5J3bFWot4VzCgNbSX6yu6XFC49Gw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMh6fkH3wdRgjaKACzV9SPQvYjAOTfXGfOLw&usqp=CAU',
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'image',
  },
  {
    _id: Date.now() * Math.random(),
    text: ``,
    createdAt: new Date(2016, 4, 21, 19, 20, 0),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FWKJxp5J3bFWot4VzCgNbSX6yu6XFC49Gw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMh6fkH3wdRgjaKACzV9SPQvYjAOTfXGfOLw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3g-wCxkSNAqRmzIdMisD3coSZhWdlmUoajg&usqp=CAU',
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'image',
  },
  {
    _id: Date.now() * Math.random(),
    text: ``,
    createdAt: new Date(2016, 4, 22, 19, 20, 0),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FWKJxp5J3bFWot4VzCgNbSX6yu6XFC49Gw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMh6fkH3wdRgjaKACzV9SPQvYjAOTfXGfOLw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3g-wCxkSNAqRmzIdMisD3coSZhWdlmUoajg&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVb9ejigL8HgMWbG8UMlpi-kmykFG4a8uDw&usqp=CAU',
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'image',
  },
  {
    _id: Date.now() * Math.random(),
    text: ``,
    createdAt: new Date(2016, 4, 22, 19, 20, 0),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FWKJxp5J3bFWot4VzCgNbSX6yu6XFC49Gw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMh6fkH3wdRgjaKACzV9SPQvYjAOTfXGfOLw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3g-wCxkSNAqRmzIdMisD3coSZhWdlmUoajg&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVb9ejigL8HgMWbG8UMlpi-kmykFG4a8uDw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmiJ-zQmnl-BbUO69wCMri8ipB4GhDA_shXg&usqp=CAU',
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'image',
  },
  {
    _id: Date.now() * Math.random(),
    text: ``,
    createdAt: new Date(2016, 4, 23, 19, 20, 0),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FWKJxp5J3bFWot4VzCgNbSX6yu6XFC49Gw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMh6fkH3wdRgjaKACzV9SPQvYjAOTfXGfOLw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3g-wCxkSNAqRmzIdMisD3coSZhWdlmUoajg&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVb9ejigL8HgMWbG8UMlpi-kmykFG4a8uDw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmiJ-zQmnl-BbUO69wCMri8ipB4GhDA_shXg&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMt1xsZni5fO2yUBx5ITfncJjWLlKT8e_PVw&usqp=CAU',
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'image',
  },
  {
    _id: Date.now() * Math.random(),
    text: ``,
    createdAt: new Date(2016, 4, 24, 19, 20, 0),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMt1xsZni5fO2yUBx5ITfncJjWLlKT8e_PVw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMh6fkH3wdRgjaKACzV9SPQvYjAOTfXGfOLw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3g-wCxkSNAqRmzIdMisD3coSZhWdlmUoajg&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVb9ejigL8HgMWbG8UMlpi-kmykFG4a8uDw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmiJ-zQmnl-BbUO69wCMri8ipB4GhDA_shXg&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMt1xsZni5fO2yUBx5ITfncJjWLlKT8e_PVw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FWKJxp5J3bFWot4VzCgNbSX6yu6XFC49Gw&usqp=CAU',
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'image',
  },
  {
    _id: Date.now() * Math.random(),
    text: ``,
    createdAt: new Date(2016, 4, 25, 19, 20, 0),
    user: {
      _id: 1,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FWKJxp5J3bFWot4VzCgNbSX6yu6XFC49Gw&usqp=CAU',
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'image',
  },
  {
    _id: Date.now() * Math.random(),
    text: ``,
    createdAt: new Date(2016, 4, 26, 19, 20, 0),
    user: {
      _id: 1,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FWKJxp5J3bFWot4VzCgNbSX6yu6XFC49Gw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMh6fkH3wdRgjaKACzV9SPQvYjAOTfXGfOLw&usqp=CAU',
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'image',
  },
  {
    _id: Date.now() * Math.random(),
    text: ``,
    createdAt: new Date(2016, 4, 27, 19, 20, 0),
    user: {
      _id: 1,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FWKJxp5J3bFWot4VzCgNbSX6yu6XFC49Gw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMh6fkH3wdRgjaKACzV9SPQvYjAOTfXGfOLw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3g-wCxkSNAqRmzIdMisD3coSZhWdlmUoajg&usqp=CAU',
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'image',
  },
  {
    _id: Date.now() * Math.random(),
    text: ``,
    createdAt: new Date(2016, 4, 28, 19, 20, 0),
    user: {
      _id: 1,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FWKJxp5J3bFWot4VzCgNbSX6yu6XFC49Gw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMh6fkH3wdRgjaKACzV9SPQvYjAOTfXGfOLw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3g-wCxkSNAqRmzIdMisD3coSZhWdlmUoajg&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVb9ejigL8HgMWbG8UMlpi-kmykFG4a8uDw&usqp=CAU',
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'image',
  },
  {
    _id: Date.now() * Math.random(),
    text: ``,
    createdAt: new Date(2016, 5, 1, 19, 20, 0),
    user: {
      _id: 1,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FWKJxp5J3bFWot4VzCgNbSX6yu6XFC49Gw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMh6fkH3wdRgjaKACzV9SPQvYjAOTfXGfOLw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3g-wCxkSNAqRmzIdMisD3coSZhWdlmUoajg&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVb9ejigL8HgMWbG8UMlpi-kmykFG4a8uDw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmiJ-zQmnl-BbUO69wCMri8ipB4GhDA_shXg&usqp=CAU',
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'image',
  },
  {
    _id: Date.now() * Math.random(),
    text: ``,
    createdAt: new Date(2016, 5, 2, 19, 20, 0),
    user: {
      _id: 1,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FWKJxp5J3bFWot4VzCgNbSX6yu6XFC49Gw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMh6fkH3wdRgjaKACzV9SPQvYjAOTfXGfOLw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3g-wCxkSNAqRmzIdMisD3coSZhWdlmUoajg&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVb9ejigL8HgMWbG8UMlpi-kmykFG4a8uDw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmiJ-zQmnl-BbUO69wCMri8ipB4GhDA_shXg&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMt1xsZni5fO2yUBx5ITfncJjWLlKT8e_PVw&usqp=CAU',
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'image',
  },
  {
    _id: Date.now() * Math.random(),
    text: ``,
    createdAt: new Date(2016, 5, 3, 19, 20, 0),
    user: {
      _id: 1,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FWKJxp5J3bFWot4VzCgNbSX6yu6XFC49Gw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMh6fkH3wdRgjaKACzV9SPQvYjAOTfXGfOLw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3g-wCxkSNAqRmzIdMisD3coSZhWdlmUoajg&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVb9ejigL8HgMWbG8UMlpi-kmykFG4a8uDw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmiJ-zQmnl-BbUO69wCMri8ipB4GhDA_shXg&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMt1xsZni5fO2yUBx5ITfncJjWLlKT8e_PVw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FWKJxp5J3bFWot4VzCgNbSX6yu6XFC49Gw&usqp=CAU',
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'image',
  },
  {
    _id: Date.now() * Math.random(),
    text: ``,
    createdAt: new Date(2016, 5, 4, 19, 20, 0),
    user: {
      _id: 1,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FWKJxp5J3bFWot4VzCgNbSX6yu6XFC49Gw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMh6fkH3wdRgjaKACzV9SPQvYjAOTfXGfOLw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3g-wCxkSNAqRmzIdMisD3coSZhWdlmUoajg&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVb9ejigL8HgMWbG8UMlpi-kmykFG4a8uDw&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmiJ-zQmnl-BbUO69wCMri8ipB4GhDA_shXg&usqp=CAU,' +
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMt1xsZni5fO2yUBx5ITfncJjWLlKT8e_PVw&usqp=CAU',
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'image',
  },
  // {
  //   _id: Date.now() * Math.random(),
  //   text: ``,
  //   createdAt: new Date(Date.UTC(2016, 5, 13, 19, 20, 0)),
  //   user: {
  //     _id: 1,
  //     name: 'React Native',
  //     avatar: 'https://placeimg.com/140/140/any',
  //   },
  //   image:
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FWKJxp5J3bFWot4VzCgNbSX6yu6XFC49Gw&usqp=CAU,' +
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMh6fkH3wdRgjaKACzV9SPQvYjAOTfXGfOLw&usqp=CAU,' +
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3g-wCxkSNAqRmzIdMisD3coSZhWdlmUoajg&usqp=CAU,' +
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVb9ejigL8HgMWbG8UMlpi-kmykFG4a8uDw&usqp=CAU,' +
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmiJ-zQmnl-BbUO69wCMri8ipB4GhDA_shXg&usqp=CAU,' +
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMt1xsZni5fO2yUBx5ITfncJjWLlKT8e_PVw&usqp=CAU,' +
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FWKJxp5J3bFWot4VzCgNbSX6yu6XFC49Gw&usqp=CAU',
  // },
  {
    _id: Date.now() * Math.random(),
    createdAt: new Date(2016, 5, 5, 19, 20, 0),
    text: 'https://file-examples.com/wp-content/uploads/2017/02/file-sample_500kB.doc',
    user: {
      _id: 1,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    file_id: Date.now() * Math.random(),
    size_file: 121,
    listUserSeen: [
      {
        _id: 2,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPy8Ma_CGIVt-d8YP32GwJ_yUIeGYD6gG0yg&usqp=CAU',
        name: 'Hùng',
      },
      {
        _id: 3,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAPzCwCxaZsERPMQZTNvcsmfb-1hnTcdueQ&usqp=CAU',
        name: 'Trường',
      },
      {
        _id: 5,
        image: 'https://placeimg.com/140/140/any',
        name: 'A',
      },
      {
        _id: 3,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAPzCwCxaZsERPMQZTNvcsmfb-1hnTcdueQ&usqp=CAU',
        name: 'Trường',
      },
      {
        _id: 2,
        image: 'https://placeimg.com/140/140/any',
        name: 'Hùng',
      },
      {
        _id: 3,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAPzCwCxaZsERPMQZTNvcsmfb-1hnTcdueQ&usqp=CAU',
        name: 'Trường',
      },
      {
        _id: 2,
        image: 'https://placeimg.com/140/140/any',
        name: 'Hùng',
      },
      {
        _id: 3,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAPzCwCxaZsERPMQZTNvcsmfb-1hnTcdueQ&usqp=CAU',
        name: 'Trường',
      },
      {
        _id: 2,
        image: 'https://placeimg.com/140/140/any',
        name: 'Hùng',
      },
      {
        _id: 3,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAPzCwCxaZsERPMQZTNvcsmfb-1hnTcdueQ&usqp=CAU',
        name: 'Trường',
      },
      {
        _id: 4,
        image: 'https://placeimg.com/140/140/any',
        name: 'Trình',
      },
      {
        _id: 3,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAPzCwCxaZsERPMQZTNvcsmfb-1hnTcdueQ&usqp=CAU',
        name: 'Trường',
      },
    ],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'file',
  },
  {
    _id: Date.now() * Math.random(),
    createdAt: new Date(2021, 5, 20, 10, 0, 0),
    text: 'https://file-examples.com/wp-content/uploads/2017/08/file_example_PPT_500kB.ppt',
    user: {
      _id: 3,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    file_id: Date.now() * Math.random(),
    size_file: 564,
    listUserSeen: [
      {
        _id: 2,
        image: 'https://placeimg.com/140/140/any',
        name: 'Hùng',
      },
      {
        _id: 3,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAPzCwCxaZsERPMQZTNvcsmfb-1hnTcdueQ&usqp=CAU',
        name: 'Trường',
      },
      {
        _id: 5,
        image: 'https://placeimg.com/140/140/any',
        name: 'A',
      },
    ],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'file',
  },
  {
    _id: Date.now() * Math.random(),
    createdAt: new Date(2021, 5, 20, 10, 10, 0),
    text: 'http://www.africau.edu/images/default/sample.pdf',
    // text: 'file here',
    user: {
      _id: 3,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    file_id: Date.now() * Math.random(),
    size_file: 321,
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'file',
  },
  {
    _id: Date.now() * Math.random(),
    createdAt: new Date(2021, 6, 13, 19, 30, 0),
    text: 'http://www.africau.edu/images/default/sample.tsx',
    user: {
      _id: 6,
      name: 'Flutter',
      avatar: 'https://placeimg.com/140/140/any',
    },
    file_id: Date.now() * Math.random(),
    size_file: 321,
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'file',
  },
  {
    _id: Date.now() * Math.random(),
    text: 'react native un android 10:00 20/8',
    createdAt: new Date(2022, 7, 20, 10, 0, 0),
    user: {
      _id: 3,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'text',
  },
  {
    _id: Date.now() * Math.random(),
    text: 'react native un androiddfhkjadfLUFY 10:10 20/8',
    createdAt: new Date(2022, 7, 20, 10, 10, 0),
    user: {
      _id: 3,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'text',
  },
  {
    _id: Date.now() * Math.random(),
    text: 'react native un android expoasfkashflafsaf 10:10 21/8',
    createdAt: new Date(2022, 7, 21, 10, 10, 0),
    user: {
      _id: 1,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'text',
  },
  {
    _id: Date.now() * Math.random(),
    text: 'react native un android expoasfkashflafsaf 10:50 21/8',
    createdAt: new Date(2022, 7, 21, 10, 50, 0),
    user: {
      _id: 1,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'text',
  },
  {
    _id: Date.now() * Math.random(),
    text: 'react native un android expoasfkashflafsaf 10:55 21/8',
    createdAt: new Date(2022, 7, 21, 10, 55, 0),
    user: {
      _id: 1,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'text',
  },
  {
    _id: Date.now() * Math.random(),
    text: 'reat natifdkasjhd 10:00 22/8',
    createdAt: new Date(2022, 7, 22, 10, 0, 0),
    user: {
      _id: 1,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'text',
  },
  {
    _id: Date.now() * Math.random(),
    text: 'reat natifdkasjhd 10:15 22/8',
    createdAt: new Date(2022, 7, 22, 10, 15, 0),
    user: {
      _id: 1,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'text',
  },
  {
    _id: Date.now() * Math.random(),
    text: 'reat natifdkasjhd kjwyhdfkj caksfhsdkfhsd cdskn 11:00 22/8',
    createdAt: new Date(2022, 7, 22, 11, 0, 0),
    user: {
      _id: 3,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'text',
  },
  {
    _id: Date.now() * Math.random(),
    text: 'reat natifdkasjhd kjwyhdfk 12:15 22/8',
    createdAt: new Date(2022, 7, 22, 12, 15, 0),
    user: {
      _id: 3,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'text',
  },
  {
    _id: 1987,
    text: 'reat natifdkasjhd cdskn 13:09 22/8',
    createdAt: new Date(2022, 7, 22, 13, 9, 0),
    user: {
      _id: 4,
      name: 'Nodejs',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8kQL47PtECE3iRRjzyfgXbNcPgFX4txEG6w&usqp=CAU',
    },
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'text',
  },
  {
    _id: 1989,
    text: 'reat natifdkasjhd cdskn 13:10 22/8',
    createdAt: new Date(2022, 7, 22, 13, 10, 0),
    user: {
      _id: 2,
      name: 'Reactjs',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8kQL47PtECE3iRRjzyfgXbNcPgFX4txEG6w&usqp=CAU',
    },
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'text',
  },
  {
    _id: 1990,
    text: 'reat natifdkasjhd cdskn 13:15 22/8',
    createdAt: new Date(2022, 7, 22, 13, 15, 0),
    user: {
      _id: 2,
      name: 'Reactjs',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8kQL47PtECE3iRRjzyfgXbNcPgFX4txEG6w&usqp=CAU',
    },
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'text',
  },
  {
    _id: 1991,
    text: 'reat nkfhsd cdskn 13:19 22/8',
    createdAt: new Date(2022, 7, 22, 13, 19, 0),
    user: {
      _id: 1,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'text',
  },
  {
    _id: 1992,
    text: 'reat nkfhsd cdskn 13:20 22/8',
    createdAt: new Date(2022, 7, 22, 13, 20, 0),
    user: {
      _id: 1,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'text',
  },
  {
    _id: 1993,
    text: 'reat nkfhsd cdskn 13:30 22/8',
    createdAt: new Date(2022, 7, 22, 13, 30, 0),
    user: {
      _id: 1,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'text',
  },
  {
    _id: 1994,
    text: 'reat nkfhsd cdskn 13:30 22/8',
    createdAt: new Date(2022, 7, 22, 13, 30, 0),
    user: {
      _id: 3,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'text',
  },
  {
    _id: 1995,
    text: 'reat nkfhsd cdskn 13:40 22/8',
    createdAt: new Date(2022, 7, 22, 13, 40, 0),
    user: {
      _id: 3,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'text',
  },
  {
    _id: 1996,
    text: 'reat nkfhsd cdskn 13:41 22/8',
    createdAt: new Date(2022, 7, 22, 13, 41, 0),
    user: {
      _id: 3,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'text',
  },
  {
    _id: 1997,
    text: 'reat nkfhsd cdskn 14:30 22/8',
    createdAt: new Date(2022, 7, 22, 14, 30, 0),
    user: {
      _id: 3,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'text',
  },
  {
    _id: 1998,
    text: 'reat nkfhsd cdskn 14:31 22/8',
    createdAt: new Date(2022, 7, 22, 14, 31, 0),
    user: {
      _id: 3,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'text',
  },
  {
    _id: 1999,
    text: 'reat nkfhsd cdskn 15:31 22/8',
    createdAt: new Date(2022, 7, 22, 15, 31, 0),
    user: {
      _id: 3,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    listUserSeen: [
      {
        _id: 3,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAPzCwCxaZsERPMQZTNvcsmfb-1hnTcdueQ&usqp=CAU',
        name: 'Trường',
      },
      {
        _id: 5,
        image: 'https://placeimg.com/140/140/any',
        name: 'A',
      },
      {
        _id: 3,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAPzCwCxaZsERPMQZTNvcsmfb-1hnTcdueQ&usqp=CAU',
        name: 'Trường',
      },
      {
        _id: 3,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAPzCwCxaZsERPMQZTNvcsmfb-1hnTcdueQ&usqp=CAU',
        name: 'Trường',
      },
      {
        _id: 5,
        image: 'https://placeimg.com/140/140/any',
        name: 'A',
      },
      {
        _id: 3,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAPzCwCxaZsERPMQZTNvcsmfb-1hnTcdueQ&usqp=CAU',
        name: 'Trường',
      },
      {
        _id: 3,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAPzCwCxaZsERPMQZTNvcsmfb-1hnTcdueQ&usqp=CAU',
        name: 'Trường',
      },
      {
        _id: 5,
        image: 'https://placeimg.com/140/140/any',
        name: 'A',
      },
      {
        _id: 3,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAPzCwCxaZsERPMQZTNvcsmfb-1hnTcdueQ&usqp=CAU',
        name: 'Trường',
      },
    ],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'text',
  },
  {
    _id: 2000,
    text: 'reat nkfhsd cdskn 15:35 22/8',
    createdAt: new Date(2022, 7, 22, 15, 35, 0),
    user: {
      _id: 3,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    listUserSeen: [
      {
        _id: 3,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAPzCwCxaZsERPMQZTNvcsmfb-1hnTcdueQ&usqp=CAU',
        name: 'Trường',
      },
    ],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'text',
  },
  {
    _id: 2001,
    text: 'one piece 7:3 24/8',
    createdAt: new Date(2022, 7, 24, 7, 30, 0),
    user: {
      _id: 1,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'text',
  },
  {
    _id: 2002,
    createdAt: new Date(2022, 7, 25, 10, 30, 0),
    user: {
      _id: 1,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    listUserSeen: [],
    messageStatus: false,
    showUserSeen: false,
    isReply: false,
    messageReply: null,
    type: 'video',
    video:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3_dwILTe_hhBHdYQWWYGMecBBPlNfp7hdhA&usqp=CAU',
  },
].reverse() as Array<IMessage>;

export default messages1;
