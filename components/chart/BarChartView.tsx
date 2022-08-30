import React, {useEffect, useRef, useState} from 'react';
import {Animated, processColor, StyleSheet, View} from 'react-native';
import {BarChart} from 'react-native-charts-wrapper';

export interface PropsVal {
  val: boolean;
}
const BartChartView = ({val}: PropsVal) => {
  const data = {
    dataSets: [
      {
        values: [
          {y: 100, marker: 'a'},
          {y: 105},
          {y: 102},
          {y: 110},
          {y: 114},
          {y: 109},
          {y: 105},
          {y: 99},
          {y: 95},
        ],
        label: 'Bar dataSet',
        config: {
          // color: processColor('red'),
          colors: [
            processColor('red'),
            processColor('blue'),
            processColor('#00FF00'),
            processColor('#FFFF00'),
            processColor('#00FFFF'),
            processColor('#FF00FF'),
            processColor('#CCCCFF'),
            processColor('#FF9966'),
            processColor('#9966FF'),
          ],
          barShadowColor: processColor('lightgrey'),
          highlightAlpha: 90,
          highlightColor: processColor('black'),
        },
      },
    ],

    config: {
      barWidth: 0.7,
    },
  };

  const highlights = [{x: 0}];
  const marker = {
    enabled: false,
    markerColor: processColor('#F0C0FF8C'),
    textColor: processColor('black'),
    markerFontSize: 14,
  };
  return (
    <BarChart
      style={styles.chart}
      data={data}
      xAxis={{
        valueFormatter: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
        granularityEnabled: true,
        granularity: 1,
        drawGridLines: false,
        position: 'BOTTOM',
        labelCount: 7,
        textColor: processColor('green'),
        textSize: 15,
      }}
      yAxis={{
        left: {drawGridLines: false},
        right: {drawGridLines: false},
      }}
      legend={{
        enabled: true,
        textSize: 14,
        form: 'SQUARE',
        formSize: 14,
        xEntrySpace: 10,
        yEntrySpace: 5,
        formToTextSpace: 5,
        wordWrapEnabled: false,
        maxSizePercent: 0.5,
        custom: {
          colors: [
            processColor('red'),
            processColor('blue'),
            processColor('#00FF00'),
            processColor('#FFFF00'),
            processColor('#00FFFF'),
            processColor('#FF00FF'),
            processColor('#CCCCFF'),
            processColor('#FF9966'),
            processColor('#9966FF'),
          ],
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        },
      }}
      animation={{durationX: 2000}}
      gridBackgroundColor={processColor('#ffffff')}
      drawGridBackground={false}
      visibleRange={{x: {min: 9, max: 9}}}
      drawBarShadow={false}
      drawValueAboveBar={true}
      highlights={highlights}
      onSelect={e => console.log('barchart: ', e.nativeEvent)}
      marker={marker}
      zoom={{
        scaleX: 0,
        scaleY: val ? 0 : 0.1,
        xValue: 0,
        yValue: 0,
        axisDependency: 'RIGHT',
      }}
      dragDecelerationFrictionCoef={val ? 0 : 0.1}
      scaleYEnabled={false}
    />
  );
};

const styles = StyleSheet.create({
  chart: {
    flex: 1,
  },
});

export default BartChartView;
