import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../theme';

const Header = ({title,subTitle}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb='30px'>
      <Typography variant='h2' color={colors.grey[100]} sx={{m:'0 0 5px 0'}}>
        {title}
      </Typography >
      <Typography variant='h6' color={colors.greenAccent[300]}>
        {subTitle}
      </Typography>
    </Box>
  )
}

export default Header