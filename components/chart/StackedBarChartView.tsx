import React, {useEffect, useState} from 'react';
import {processColor, StyleSheet} from 'react-native';
import {BarChart} from 'react-native-charts-wrapper';
import {PropsVal} from './BarChartView';

const StackBarChartView = ({val}: PropsVal) => {
  const [chart2Zoom, setChart2Zoom] = useState();
  const [colorStyle, setColorStyle] = useState(1);
  const values = [
    {x: 0, y: [40, 30, 20], marker: ['row1', 'row2', 'row3']},
    {x: 1, y: [0, 50, 0], marker: ['', 'second', '']},
    {x: 2, y: [30, 20, 50], marker: ['hello', 'world', 'third']},
    {x: 3, y: [30, 50, 10], marker: 'fourth'},
  ];

  const data = {
    dataSets: [
      {
        values: values,
        label: 'Stacked Bar dataset',
        config: {
          valueTextSize: 14,

          colors: [
            processColor('#C0FF8C'),
            processColor('#FFF78C'),
            processColor('#FFD08C'),
          ],
          stackLabels: ['Engineering', 'Sales', 'Marketing'],
        },
      },
    ],
    config: {
      barWidth: 0.7,
    },
  };

  const data1 = {
    dataSets: [
      {
        values: values,
        label: 'Stacked Bar dataset',
        config: {
          valueTextSize: 0,

          colors: [
            processColor('#C0FF8C'),
            processColor('#FFF78C'),
            processColor('#FFD08C'),
          ],
          stackLabels: ['Engineering', 'Sales', 'Marketing'],
        },
      },
    ],
    config: {
      barWidth: 0.7,
    },
  };

  const highlights = [
    {x: 0, stackIndex: 1},
    {x: 2, stackIndex: 1},
  ];

  //custom label
  const marker = {
    enabled: true,
    markerColor: processColor('#F0C0FF8C'),
    textColor: processColor('black'),
    markerFontSize: 14,
  };

  useEffect(() => {
    values.map(e => {
      e.y.map(val => {
        if (val == 0) {
          setColorStyle(0);
        } else {
          setColorStyle(1);
          console.log(val);
        }
      });
    });
  });

  const handleColor = () => {
    var value = 0;
    values.map(e => {
      e.y.map(val => {
        if (val == 0) {
          value = 0;
        } else {
          value = 14;
        }
      });
    });
    return value;
  };
  console.log('color handle: ', handleColor());

  const handleSelect = (e: any) => {
    console.log('e: ', e.nativeEvent);
  };
  return (
    <BarChart
      animation={{durationX: 2000}}
      style={styles.chart}
      xAxis={{
        valueFormatter: ['Q1', 'Q2', 'Q3', 'Q4'],
        granularityEnabled: true,
        granularity: 1,
        drawGridLines: false,
        position: 'BOTTOM',
        labelCount: 7,
        textColor: processColor('green'),
        textSize: 15,
        gridLineWidth: 0,
      }}
      yAxis={{
        left: {drawGridLines: false, gridLineWidth: 0},
        right: {drawGridLines: false},
      }}
      data={data}
      chartDescription={{text: ''}}
      drawValueAboveBar={true}
      highlights={highlights}
      onSelect={handleSelect}
      marker={marker}
      doubleTapToZoomEnabled={false}
      zoom={{
        scaleX: val ? 0 : 0.1,
        scaleY: val ? 0 : 0.1,
        xValue: 0,
        yValue: 0,
        axisDependency: 'LEFT',
      }}
      dragDecelerationFrictionCoef={val ? 0 : 0.1}
      legend={{
        enabled: false,
        textSize: 14,
        form: 'SQUARE',
        formSize: 14,
        xEntrySpace: 10,
        yEntrySpace: 5,
        wordWrapEnabled: true,
      }}
    />
  );
};

const styles = StyleSheet.create({
  chart: {
    flex: 1,
  },
});

export default StackBarChartView;
