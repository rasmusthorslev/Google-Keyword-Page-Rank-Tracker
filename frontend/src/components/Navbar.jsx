import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { Link, useLocation } from 'react-router-dom';
const drawerWidth = 240;

export default function Navbar({children}) {
    const location = useLocation()
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Google Keyword Page Rank Tracker
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
            <ListItem key={1} disablePadding>
            <ListItemButton component={Link} to={"/"} selected={"/" === location.pathname}>
                <ListItemIcon>
                    <AutoGraphIcon />
                </ListItemIcon>
                <ListItemText primary={"Keywords"} />
            </ListItemButton>
            </ListItem>
            <ListItem key={1} disablePadding>
            <ListItemButton component={Link} to={"/dashboard2"} selected={"/dashboard2" === location.pathname}>
                <ListItemIcon>
                    <AutoGraphIcon />
                </ListItemIcon>
                <ListItemText primary={"Dashboard 2"} />
            </ListItemButton>
            </ListItem>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
            {children}
      </Box>
    </Box>
  );
}
