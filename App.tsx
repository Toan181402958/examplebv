import React, {useImperativeHandle, useRef, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RecoilRoot} from 'recoil';
import TestChart from './components/chart/test-chart';
import TestChat from './components/chat/test-chat';
import DatePicker from './components/datepicker/DatePicker';
import TestDateTimeScreen from './components/datepicker/test-datetime';
import TestScrollViewInput from './components/scrollViewInput/test-scrollView-Input';
import TestTable from './components/table/test-table';
import Test_Chat from './components/test_chat/test_chat';
import Test_Reanimated from './components/test_reanimated/test_reanimated';
import TestViewFile from './components/viewFile/test-viewFile';

const App = () => {
  // const refButton = useRef<any>(null);
  // const [text, setText] = useState('');

  // const handleClick = () => {
  //   setText(refButton.current.textDate + ' ' + refButton.current.textTime);
  // };
  return (
    // <TestDateTimeScreen />
    // <TestTable />
    // <TestChart />
    // <TestViewFile />
    //      <ViewTest />
    <TestChat />
    // <Test_Chat />
    // <TestScrollViewInput />
    // <Test_Reanimated />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewButton: {
    flexDirection: 'row',
  },
  touchButton: {
    height: 40,
    width: 100,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 20,
  },
});
export default App;
