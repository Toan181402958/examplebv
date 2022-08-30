import React, {useEffect, useImperativeHandle, useRef, useState} from 'react';
import {
  processColor,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BarChart, PieChart} from 'react-native-charts-wrapper';
import {useRecoilState} from 'recoil';
import {default1} from '../../atom';
import BartChartView from './BarChartView';
import GroupBarChartView from './GroupBarChartView';
import PieChartView from './PieChartView';
import StackBarChartView from './StackedBarChartView';

const ChartWrapper = () => {
  const [type, setType] = useState(0);
  const [valueDefault, setValueDefault] = useState(true);

  const handleDefault = () => {
    setValueDefault(!valueDefault);
  };

  const renderView = () => {
    switch (type) {
      case 0:
        return <BartChartView val={valueDefault} />;
      case 1:
        return <StackBarChartView val={valueDefault} />;
      case 2:
        return <GroupBarChartView val={valueDefault} />;
      case 3:
        return <PieChartView val={valueDefault} />;

      default:
        return <BartChartView val={valueDefault} />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 9, backgroundColor: 'white'}}>
        <TouchableOpacity
          onPress={() => {
            handleDefault();
          }}
          style={{
            height: 30,
            width: 60,
            borderWidth: 1,
            borderRadius: 10,
            backgroundColor: 'blue',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#FFFFFF'}}>Default</Text>
        </TouchableOpacity>
        {renderView()}
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => setType(0)} style={styles.touchButton}>
          <Text>BarChart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setType(1)} style={styles.touchButton}>
          <Text>StackedBarChart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setType(2)} style={styles.touchButton}>
          <Text>GroupBarChart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setType(3)} style={styles.touchButton}>
          <Text>PieChart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  chart: {
    flex: 1,
  },
  touchButton: {
    height: 40,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
  },
});

export default ChartWrapper;
