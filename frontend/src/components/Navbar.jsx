import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useLocation } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';

const drawerWidth = 240;
const default_user = "sport24.dk";

export default function Navbar({ children }) {
  const location = useLocation();

  const [username, setUsername] = React.useState(default_user);
  const [editing, setEditing] = React.useState(false);
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const savedUser = localStorage.getItem('username');
    if (savedUser) setUsername(savedUser);
    else setUsername(default_user);
  }, []);

  React.useEffect(() => {
    fetch('http://localhost:8000/api/clients/')
      .then((res) => res.json())
      .then((data) => {
        const names = data.map((user) => user.name);
        setUsers(names);
      })
      .catch((err) => console.error('Error fetching users:', err));
  }, []);

  const handleSwitchUser = (newUser) => {
    if (!newUser) return;
    setUsername(newUser);
    localStorage.setItem('username', newUser);
    window.dispatchEvent(new Event('usernameChanged'));

    setEditing(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Rank Tracker
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          },
        }}
      >
        <Box>
          <Toolbar />
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/" selected={location.pathname === '/'}>
                <ListItemIcon>
                  <AutoGraphIcon />
                </ListItemIcon>
                <ListItemText primary="Keywords" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/dashboard2" selected={location.pathname === '/dashboard2'}>
                <ListItemIcon>
                  <AutoGraphIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard 2" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>

        {/* Bottom: Switch User with Autocomplete */}
        <Box sx={{ p: 2 }}>
          {editing ? (
            <Autocomplete
              options={users}
              value={username || null}
              onChange={(event, newValue) => handleSwitchUser(newValue)}
              renderInput={(params) => <TextField {...params} label="Select User" size="small" />}
              freeSolo={false}
              autoHighlight
            />
          ) : (
            <Button fullWidth onClick={() => setEditing(true)}>
              {username ? `User: ${username}` : 'Switch User'}
            </Button>
          )}
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
