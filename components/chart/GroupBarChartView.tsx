import React from 'react';
import {processColor, StyleSheet} from 'react-native';
import {BarChart} from 'react-native-charts-wrapper';
import {Props} from '../datepicker/DatePicker';
import {PropsVal} from './BarChartView';

const GroupBarChartView = ({val}: PropsVal) => {
  const data = {
    dataSets: [
      {
        values: [5, 40, 77, 81, 43],
        label: 'Company A',
        config: {
          drawValues: false,
          colors: [processColor('red')],
        },
      },
      {
        values: [40, 5, 50, 23, 79],
        label: 'Company B',
        config: {
          drawValues: false,
          colors: [processColor('blue')],
        },
      },
      {
        values: [10, 55, 35, 90, 82],
        label: 'Company C',
        config: {
          drawValues: false,
          colors: [processColor('green')],
        },
      },
    ],
    config: {
      barWidth: 0.2,
      group: {
        fromX: 0,
        groupSpace: 0.1,
        barSpace: 0.1,
      },
    },
  };
  const xAxis = {
    valueFormatter: ['1990', '1991', '1992', '1993', '1994'],
    granularityEnabled: true,
    granularity: 1,
    axisMaximum: 5,
    axisMinimum: 0,
    centerAxisLabels: true,
  };
  const legend = {
    enabled: true,
    textSize: 14,
    form: 'SQUARE',
    formSize: 14,
    xEntrySpace: 10,
    yEntrySpace: 5,
    wordWrapEnabled: true,
  };
  const marker = {
    enabled: true,
    markerColor: processColor('#F0C0FF8C'),
    textColor: processColor('black'),
    markerFontSize: 14,
  };

  const handleSelect = (e: any) => {
    var index = 0;
    console.log('groupbarchart: ', e.nativeEvent);
    console.log('YValue: ', e.nativeEvent.y);
    console.log('XValue: ', e.nativeEvent.x);
    console.log('Column XValue: ', Math.floor(e.nativeEvent.x));
    var val = 1;
    if (e.nativeEvent.x > 1) {
      val = e.nativeEvent.x % Math.floor(e.nativeEvent.x);
    } else {
      val = e.nativeEvent.x;
    }

    if (val < 0.4) {
      index = 0;
    } else if (val % 1 > 0.4 && val < 0.6) {
      index = 1;
    } else {
      index = 2;
    }
    console.log('index: ', index);
    // console.log('length: ', 1 / data.dataSets.length);
  };
  const highlights = [
    {x: 1, y: 40},
    {x: 2, y: 50},
  ];
  return (
    <BarChart
      animation={{durationX: 2000}}
      style={styles.chart}
      data={data}
      drawValueAboveBar={false}
      highlights={highlights}
      onSelect={handleSelect}
      // onChange={e => console.log(e.eventPhase)}
      zoom={{
        scaleX: val ? 0 : 0.1,
        scaleY: val ? 0 : 0.1,
        xValue: 0,
        yValue: 0,
        axisDependency: 'LEFT',
      }}
      xAxis={{
        valueFormatter: ['1990', '1991', '1992', '1993', '1994'],
        granularityEnabled: true,
        granularity: 1,
        axisMaximum: 5,
        axisMinimum: 0,
        centerAxisLabels: true,
        position: 'BOTTOM',
        textColor: processColor('green'),
        textSize: 15,
      }}
      marker={marker}
      chartDescription={{text: ''}}
      doubleTapToZoomEnabled={false}
      dragDecelerationFrictionCoef={val ? 0 : 0.1}
      // onTouchStart={e => console.log(e)}
    />
  );
};

const styles = StyleSheet.create({
  chart: {
    flex: 1,
  },
});

export default GroupBarChartView;
