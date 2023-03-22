import React from 'react';
import Header from '../../components/Header';
import { Box } from '@mui/material';
import PieChart from './../../components/PieChart';

const Pie = () => {
  return (
      <Box>
          <Header title="饼图" subTitle="简单饼状图" />
          <Box height="75vh">
              <PieChart/>
          </Box>
    </Box>
  )
}

export default Pie