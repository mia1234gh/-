import React from 'react';
import { useTheme } from '@emotion/react';
import { tokens } from '../theme';
import { mockBarData as data } from '../data/mockData';
import { ResponsiveBar } from '@nivo/bar';
import {patternDotsDef, patternLinesDef } from "@nivo/core"



const BarChart = ({isDashboard=false}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveBar
      data={data}
      theme={{
        // added
        axis: {
          domain: {
            line: {
             stroke:colors.grey[100],
            },
          },
          legend: {
            text: {
              fill:colors.grey[100]
            }
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth:1
            },
            text: {
              fill:colors.grey[100],
            }
          },
        },
        
        legends: {
          text: {
          fill:colors.grey[100]
        }
      },
      }}

      keys={["hot dog", "burger", "kebab", "donut"]} 
      indexBy="country"
      layout="vertical"
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      colors={{ scheme: "nivo" }}
      defs={
        [
          patternDotsDef('dots-pattern', {
            "size": 4,
            "padding": 1,
            "stagger": false,
            "background": "inherit",
            "color": "#38bcb2"
          }),
          patternLinesDef('lines-pattern', {
            "spacing": 10,
            "rotation": -45,
            "lineWidth": 6,
            "background": "#inherit",
            "color": "#eed312"
          }),
        ]}
      borderColor={{
        from: 'color',
        modifiers: [[
              'darker',
              1.6
          ]]
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend:isDashboard?undefined: '国家',
        legendPosition: 'middle',
        legendOffset: 32
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend:isDashboard?undefined: '食物',
        legendPosition: 'middle',
        legendOffset: -40
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
          from: 'color',
          modifiers: [
              [
                  'darker',
                  '1.6'
              ]
          ]
      }}

      legends={[{
        dataFrom: "keys",
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity:1
            },
          }
        ]
      }]}
      role="application"
      barAriaLabel={function (e) {
        return e.id+":"+e.formattedValue+"在国家："+e.indexValue
      }}
    />
  )
}

export default BarChart