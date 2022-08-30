import React from 'react';
import {ImageURISource} from 'react-native';
export interface ImageFile {
  id: number;
  image: ImageURISource;
  type: String;
  status: boolean;
}
