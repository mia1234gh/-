import React from 'react';
import Header from '../../components/Header';
import { Box } from '@mui/material';
import LineChart from './../../components/LineChart';

const Line = () => {
  return (
      <Box>
          <Header title="折线图" subTitle="简单折线图" />
          <Box height="75vh">
              <LineChart/>
          </Box>
    </Box>
  )
}

export default Line