import { Sidebar, Menu, MenuItem, useProSidebar,SubMenu} from 'react-pro-sidebar';
import { Box,  IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useState } from 'react';


const SidebarLayout = () => {
  const { collapseSidebar, collapsed} = useProSidebar();
  const themeT = useTheme();
  const colors = tokens(themeT.palette.mode);
  const [isDark, setIsDark] = useState(true);


  return (
    <Box sx={{
      display: 'flex', height: '100% auto'}}>
      <Sidebar backgroundColor={colors.primary[400]} >
        {/* hamburger&&logo */}
        <Box sx={{ display: 'flex', flexDirection: 'row',alignItems:'center',justifyContent:'space-around',marginLeft:'1rem',marginTop:'0.8rem',marginBottom:'2rem'}}>
          
          {
            collapsed === true ? (
              <IconButton textAlign='center'>
              <MenuOutlinedIcon/>
            </IconButton>
  
            ) : (
                <>
                  <Typography variant='h3' color={colors.grey[100]}>后台管理</Typography>
                  <IconButton>
                    <MenuOutlinedIcon/>
                  </IconButton>

                </>
            )
          }
         
        </Box>
        {/* user */}
        <Box mb={collapsed===false?'1rem':'2rem'} sx={{display:'flex',flexDirection:'column'}}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           
            <img src={`../../assets/user.jpeg`} style={ {cursor:"pointer", borderRadius:'50%'}} width={collapsed===false?'100px':'50px'} height={collapsed===false?'100px':'50px'} alt='profile-user' />
          </Box>
          <Box textAlign='center'>
            <Typography variant={collapsed===false?'h3':'h4'}  color={colors.grey[100]} fontWeight='bold' sx={{m:'10px 0 0 0'}}>
              用户名
            </Typography>
            <Typography variant={collapsed===false?'h5':'h6'} color={colors.greenAccent[500]} sx={{m:'10px 0 0 0'}}>
              超级会员
            </Typography>
          </Box>
        </Box>

              <Menu 
               menuItemStyles={{
                button: ({ level, active, disabled }) => {
                  // only apply styles on first level elements of the tree
                  if (level === 0)
                    return {
                      color: disabled ? 'red' : `${colors.greenAccent[500]}`,
                      backgroundColor: active ? `${colors.primary[100]}` :undefined,
                    };
                },
              }}
              >
          <MenuItem component={<Link to="/" />}>
            <Typography>主页</Typography>
          </MenuItem>
          <SubMenu label="管理" >
            <MenuItem backgroundColor={colors.primary[400]} component={<Link to="/team"/>} icon={<GroupOutlinedIcon/>}>
              <Typography color={colors.grey[500]}>管理组织</Typography>
            </MenuItem>
            <MenuItem component={<Link to="/contacts" />}  icon={ <ContactsOutlinedIcon />}>
              <Typography color={colors.grey[500]}>联络资料</Typography>
            </MenuItem>
            <MenuItem component={<Link to="/invocies" />}  icon={ <ReceiptOutlinedIcon />}>
              <Typography color={colors.grey[500]}>发票结余</Typography>
            </MenuItem>
          </SubMenu>
          <SubMenu label="页面" >
            <MenuItem component={<Link to="/form" />}  icon={ <PersonOutlineOutlinedIcon />}>
              <Typography color={colors.grey[500]}>个人信息</Typography>
            </MenuItem>
            <MenuItem component={<Link to="/calendar" />}  icon={ <CalendarMonthOutlinedIcon />}>
              <Typography color={colors.grey[500]}>日程管理</Typography>
            </MenuItem>
            <MenuItem component={<Link to="/faq" />} icon={<QuizOutlinedIcon />}>
              <Typography color={colors.grey[500]}>FAQ</Typography>
            </MenuItem>
          </SubMenu>

          <SubMenu label="图表">
            <MenuItem component={<Link to="/bar" />} icon={ <BarChartOutlinedIcon />}>
              <Typography color={colors.grey[500]}>柱状图</Typography>
            </MenuItem>
            <MenuItem component={<Link to="/pie" />}  icon={<PieChartOutlineOutlinedIcon />}>

              <Typography color={colors.grey[500]}>饼图</Typography>
            </MenuItem>
            <MenuItem component={<Link to="/line" />}  icon={ <InsightsOutlinedIcon />}>
              <Typography color={colors.grey[500]}>折线图</Typography>
            </MenuItem>
            <MenuItem component={<Link to="/geography" />}  icon={<MapOutlinedIcon/>}>
              <Typography color={colors.grey[500]}>地图</Typography>
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>

      <main>
      <main>
          <IconButton onClick={() => collapseSidebar()}>
            {collapsed===true?(<ChevronRightIcon/>):(<ChevronLeftIcon/>)}
        </IconButton>
      </main>
      </main>
    </Box>
  );
};

export default SidebarLayout;