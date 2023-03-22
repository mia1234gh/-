import React from 'react';
import Header from '../../components/Header';
import { Box } from '@mui/material';
import GeographyChart from './../../components/GeographyChart';

const Geography = () => {
  return (
      <Box>
          <Header title="地图" subTitle="简单地图" />
          <Box height="75vh">
              <GeographyChart/>
          </Box>
    </Box>
  )
}

export default Geography