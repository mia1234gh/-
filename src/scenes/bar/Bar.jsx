import React from 'react';
import Header from '../../components/Header';
import { Box } from '@mui/material';
import BarChart from './../../components/BarChart';

const Bar = () => {
  return (
      <Box>
          <Header title="柱状图" subTitle="简单柱状图" />
          <Box height="75vh">
              <BarChart/>
          </Box>
    </Box>
  )
}

export default Bar