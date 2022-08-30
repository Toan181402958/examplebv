import React, {Ref, useImperativeHandle, useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DateTimePicker, {
  DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';
import moment from 'moment';

export type Props = {
  typeDate: string;
  dateTime: string;
  time: string;
};
const DatePicker = ({typeDate, dateTime, time}: Props, ref: any) => {
  const [date, setDate] = useState(new Date(Date.parse(dateTime + ' ' + time)));
  const [textDate, setTextDate] = useState(
    moment(Date.parse(dateTime)).format('DD/MM/YYYY'),
  );
  const [textTime, setTextTime] = useState(
    moment(time, ['HH.mm']).format(typeDate == '12h' ? 'hh:mm A' : 'HH:mm'),
  );

  useImperativeHandle(ref, () => ({
    textDate,
    textTime,
  }));

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    if (event.type == 'set') {
      setDate(currentDate);
      setTextDate(moment(currentDate).format('DD/MM/YYYY'));
    }
  };
  const onChangeTime = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    if (event.type == 'set') {
      setDate(currentDate);
      setTextTime(
        typeDate == '24h'
          ? moment(currentDate).format('HH:mm ')
          : moment(currentDate).format('LT'),
      );
    }
  };

  const showMode = (currentMode: any) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: currentMode == 'date' ? onChange : onChangeTime,
      mode: currentMode,
      is24Hour: typeDate == '24h' ? true : false,
      display: currentMode == 'date' ? 'calendar' : 'clock',
    });
  };
  const showDatepicker = () => {
    showMode('date');
  };
  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Date} onPress={showDatepicker}>
        <Text>{textDate}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Time} onPress={showTimepicker}>
        <Text>{textTime}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  Date: {
    justifyContent: 'center',
    height: 40,
    borderRadius: 8,
    borderWidth: 0.5,
    width: 120,
    paddingLeft: 10,
  },
  Time: {
    height: 40,
    borderRadius: 8,
    borderWidth: 0.5,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 20,
  },
});

export default React.forwardRef(DatePicker);
