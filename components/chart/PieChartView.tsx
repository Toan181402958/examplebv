import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  processColor,
  ProcessedColorValue,
  StyleSheet,
} from 'react-native';
import {ChartSelectEvent, PieChart} from 'react-native-charts-wrapper';
import {PropsVal} from './BarChartView';

export interface dataPie {
  value: number;
  label: string;
  color: ProcessedColorValue;
}
const PieChartView = ({val}: PropsVal) => {
  const listValue = [
    {
      value: 65,
      label: 'Sandwiches',
      color: processColor('#C0FF8C'),
    },
    {
      value: 44,
      label: 'Salads',
      color: processColor('#FFF78C'),
    },
    {
      value: 12,
      label: 'Soup',
      color: processColor('#FFD08C'),
    },
    {
      value: 30,
      label: 'Beverages',
      color: processColor('#8CEAFF'),
    },
    {
      value: 20,
      label: 'Desserts',
      color: processColor('#FF8C9D'),
    },
  ] as Array<dataPie>;
  const data = {
    dataSets: [
      {
        values: listValue,
        label: 'Pie dataset',
        config: {
          colors: listValue.map(e => e.color),
          valueTextSize: 20,
          valueTextColor: processColor('green'),
          sliceSpace: 5,
          selectionShift: 13,
          valueFormatter: "#.#'%'",
          valueLineColor: processColor('green'),
          valueLinePart1Length: 0.5,
        },
      },
    ],
  };
  const marker = {
    enabled: true,
    markerColor: processColor('#F0C0FF8C'),
    textColor: processColor('black'),
    markerFontSize: 14,
  };

  const handleIndex = (e: any) => {
    console.log('piechart: ', e.nativeEvent);
    console.log(
      'index: ',
      listValue.map(e => e.label).indexOf(e.nativeEvent.label),
    );
  };

  return (
    <PieChart
      animation={{durationX: 1000, durationY: 1000}}
      marker={marker}
      style={styles.chart}
      logEnabled={true}
      chartBackgroundColor={processColor('pink')}
      chartDescription={{text: ''}}
      data={data}
      highlights={[{x: 0}]}
      entryLabelColor={processColor('green')}
      entryLabelTextSize={14}
      drawEntryLabels={true}
      rotationEnabled={true}
      rotationAngle={val ? 180 : 180.1}
      usePercentValues={true}
      styledCenterText={{
        text: 'Pie center text!',
        color: processColor('black'),
        size: 12,
      }}
      centerTextRadiusPercent={100}
      holeRadius={40}
      holeColor={processColor('#f0f0f0')}
      transparentCircleRadius={45}
      transparentCircleColor={processColor('#f0f0f088')}
      maxAngle={360}
      legend={{
        enabled: true,
        textSize: 10,
        form: 'CIRCLE',
        horizontalAlignment: 'RIGHT',
        verticalAlignment: 'TOP',
        orientation: 'VERTICAL',
        wordWrapEnabled: true,
      }}
      onSelect={e => handleIndex(e)}
    />
  );
};

const styles = StyleSheet.create({
  chart: {
    flex: 1,
  },
});

export default PieChartView;
