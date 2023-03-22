import React from 'react';
import { Box, Typography, useTheme, IconButton, Button } from '@mui/material';
import { tokens } from './../../theme';
import { mockTransactions } from "../../data/mockData";
import Header from './../../components/Header';
import LineChart from './../../components/LineChart';
import BarChart from './../../components/BarChart';
import GeographyChart from './../../components/GeographyChart';
import StatBox from '../../components/StatBox';
import ProgressCircle from '../../components/ProgressCircle';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import TrafficOutlinedIcon from '@mui/icons-material/TrafficOutlined';


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <Box>
      {/* header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" >
        <Header title="后台管理" subTitle="欢迎来到你的后台管理" />
        <Box>
          <Button sx={{backgroundColor:colors.blueAccent[700], color:colors.grey[100],fontSize:"14px",fontWeight:"bold",padding:"10px 20px"}}>
            <DownloadOutlinedIcon sx={{mr:"10px"}} />
            点击下载
          </Button>
        </Box>
      </Box>

      {/* grid & charts */}
      <Box display="grid" gridTemplateColumns="repeat(12,1fr)" gridAutoRows="140px" gap="20px">
        {/* 第一行,数据显示，4个*/}
        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
          <StatBox title="12,631" subTitle="邮箱来往" progress="0.75" increase="+14%" icon={<EmailOutlinedIcon sx={{color:colors.greenAccent[600],fontSize:"26px"}}/> } />
        </Box>
        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
          <StatBox title="431225" subTitle="销售所得" progress="0.50" increase="+21%" icon={<PointOfSaleOutlinedIcon sx={{color:colors.greenAccent[600],fontSize:"26px"}}/> } />
        </Box>
        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
          <StatBox title="32441" subTitle="新客户" progress="0.30" increase="+5%" icon={<PersonAddAlt1OutlinedIcon sx={{color:colors.greenAccent[600],fontSize:"26px"}}/> } />
        </Box>
        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
          <StatBox title="1325134" subTitle="访问量" progress="0.80" increase="+43%" icon={<TrafficOutlinedIcon sx={{color:colors.greenAccent[600],fontSize:"26px"}}/> } />
        </Box>

        {/* 第二行 */}
        <Box  gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}>
        {/* header */}
        <Box  mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center">
          <Box>
            <Typography  variant="h5"
                fontWeight="600"
                color={colors.grey[100]}>收支</Typography>
            <Typography variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}>￥59,34221</Typography>
          </Box>
          <Box>
            <IconButton>
              <DownloadOutlinedIcon sx={{ fontSize: "26px", color: colors.greenAccent[500] }}/>
            </IconButton>
          </Box>
        </Box>
        {/* chart */}
        <Box height="250px" m="-20px 0 0 0">
          <LineChart isDashboard={true}/>
        </Box>
      </Box>

      <Box  gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto">
        <Box display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px">
          <Typography color={colors.grey[100]} variant="h5" fontWeight="600">最近</Typography>
        </Box>
        {
          mockTransactions.map((transaction, i) => (
            <Box key={`${transaction.txId}-${i}`}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px">
              <Box>
                <Typography  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600">
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>
                {transaction.date}
              </Box>
              <Box  backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px">
                  ￥{transaction.cost}
              </Box>
            </Box>
          ))
        }
        </Box>
        
        {/* 第三行 */}
        <Box  gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px">
          <Typography variant="h5" fontWeight="600">
            公司
          </Typography>
          <Box display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px">
            <ProgressCircle size="125" />
            <Typography variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}>
              创收￥57,4227
            </Typography>
            <Typography>
              包括大会与额外花销
            </Typography>
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            销售量
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            战略图
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>

      </Box>

    
    </Box>
  )
}

export default Dashboard