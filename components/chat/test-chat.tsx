import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Chat from './chat';
import DemoWebrtc from './DemoWebrtc/demoWebrtc';
import ViewChat from './viewChat';

export type RootStackParams = {
  ViewChat: undefined;
  Chat: undefined;
  ViewShowImage: {
    image: string;
    id: number;
  };
  DemoWebrtc: undefined;
};

const stack = createNativeStackNavigator<RootStackParams>();

const TestChat = () => {
  return (
    // <MultipleText />
    // <ViewChat />
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="ViewChat" component={ViewChat} />
        <stack.Screen name="Chat" component={Chat} />
        <stack.Screen name="DemoWebrtc" component={DemoWebrtc} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default TestChat;
