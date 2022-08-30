export interface User {
  _id: string | number;
  name: string;
  avatar: string;
}

export interface UserSeen {
  _id: string | number;
  image: string;
  name: string;
}

export interface ImageUserSeen {
  image: string;
}

export interface Image {
  _id: string | number;
  uri: string;
}

export interface IMessage {
  _id: number;
  text: string;
  createdAt: Date | number;
  user: User;
  system: boolean;
  image: string;
  file_type: string;
  file_id: string | number;
  size_file: number;
  listUserSeen: Array<UserSeen>;
  showUserSeen: boolean;
  listImageUserSeen: Array<ImageUserSeen>;
  messageStatus: boolean;
  showTimeSeen: boolean;
  video: string;
  type: string;
  isReply: boolean;
  messageReply: any;
}
