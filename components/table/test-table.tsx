import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Table from './table';

const TestTable = () => {
  return (
    <View style={styles.container}>
      <Table isMultipleExpand={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TestTable;
