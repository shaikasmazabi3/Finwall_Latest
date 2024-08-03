import React,{useContext, useState} from 'react'
import {Box, IconButton, useTheme, InputBase } from "@mui/material"
import { ColorModeContext, tokens } from "../theme";
import { LightModeOutlined, DarkModeOutlined, SearchOutlined, SettingsOutlined, NotificationsOutlined, PersonOutlined, MenuOpen } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from './SideBar';
const TopBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const [menu, setMenu] = useState(false);
  return (
    <>
       <Box display="flex" justifyContent="space-between" p={2}>
        <IconButton >
          <MenuIcon/>
        </IconButton>
      

      
      <Box display="flex">
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[300]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1, width: 300 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchOutlined />
        </IconButton>
      </Box>
      {/* ICONS */}
        <IconButton onClick={colorMode.toggleColorMode} style={{marginLeft:4}}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutlined />
        </IconButton>
      </Box>
    </Box>
    </>
  )
}

export default TopBar
