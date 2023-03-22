import { useContext } from 'react';
import { Box, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { ColorModeContext, tokens } from '../../theme';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const Topbar = () => {
  const themeT = useTheme();
  const colors = tokens(themeT.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display='flex' justifyContent='space-between' p={2}>
      {/* 搜索框 */}
      <Box display='flex' backgroundColor={colors.primary[400]} borderRadius='3px'>
        <InputBase placeholder='搜索' sx={{ml:2,flex:1}}/>
        <IconButton type="button" sx={{p:1}}>
          <SearchOutlinedIcon/>
        </IconButton>
      </Box>

      {/* icons指示栏 */}
      <Box display='flex'>
      <IconButton onClick={colorMode.toggleColorMode}>
        {themeT.palette.mode === 'dark' ? (
        <DarkModeOutlinedIcon/>
        ) : (
            <LightModeOutlinedIcon/>
        )}
      </IconButton>
      <IconButton>
        <NotificationsOutlinedIcon/>
      </IconButton>
      <IconButton>
        <SettingsSuggestOutlinedIcon/>
      </IconButton>
      <IconButton>
        <PersonOutlineOutlinedIcon/>
      </IconButton>
      </Box>
    </Box>
  )
}

export default Topbar