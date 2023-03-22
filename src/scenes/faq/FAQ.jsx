import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Box,Typography,useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';
import Header from '../../components/Header';

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      
         <Box>
          <Header title="我们可随时提供帮助" subTitle="请告诉我们你的问题，以便我们为你提供正确的帮助和支持" />
          
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">推荐的解决方案</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                当你依次选择“设置及更多“设置”时，Microsoft Edge 中的大多数工具和选项是可用的。
                </Typography>
              </AccordionDetails>
        </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
            expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">从应用列表中固定或取消固定应用</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                当你依次选择“设置及更多“设置”时，Microsoft Edge 中的大多数工具和选项是可用的。
                </Typography>
              </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
              <AccordionSummary
            expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">修改任务栏对齐方式</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                当你依次选择“设置及更多“设置”时，Microsoft Edge 中的大多数工具和选项是可用的。
                </Typography>
              </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
              <AccordionSummary
            expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">重新排列任务栏上的按钮</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                当你依次选择“设置及更多“设置”时，Microsoft Edge 中的大多数工具和选项是可用的。
                </Typography>
              </AccordionDetails>
            </Accordion>
          
            
   </Box> 
  )
}

export default FAQ