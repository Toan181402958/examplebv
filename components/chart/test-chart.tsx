import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RecoilRoot} from 'recoil';
import ChartWrapper from './ChartWrapper';

const TestChart = () => {
  return (
    <View style={styles.container}>
      <ChartWrapper />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TestChart;
