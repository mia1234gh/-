import React from 'react';
import { useTheme } from '@emotion/react';
import { tokens } from '../theme';
import { mockGeographyData as data } from '../data/mockData';
import { ResponsiveChoropleth } from '@nivo/geo'
import { geoFeatures } from './../data/mockGeoFeatures';


const GeographyChart = ({isDashboard=false}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveChoropleth
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
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="nivo"
      domain={[ 0, 1000000 ]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionTranslation={isDashboard?[0.49,0.6]:[0.5, 0.5]}
      projectionScale={isDashboard?40:120}
        projectionRotation={[ -18, -2, 0 ]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
      borderColor="#152538"
      
      defs={[
        {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
        },
        {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
        },
        {
            id: 'gradient',
            type: 'linearGradient',
            colors: [
                {
                    offset: 0,
                    color: '#000'
                },
                {
                    offset: 100,
                    color: 'inherit'
                }
            ]
        }
      ]}
      legends={[
        {
            anchor: 'bottom-left',
            direction: 'column',
            justify: true,
            translateX: 20,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: 'left-to-right',
            itemTextColor: '#444444',
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemTextColor: '#000000',
                        itemOpacity: 1
                    }
                }
            ]
        }
    ]}
    />
  )
}

export default GeographyChart