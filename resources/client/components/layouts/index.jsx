import React, { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import AppleIcon from '@mui/icons-material/Apple';
import { sidebar_other } from './sidebarData'
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import ProfileDropdown from '../../components/dropdown/profiledropdown'
import { NavLink as RouterLink } from 'react-router-dom';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
const LinkRouted = styled(ListItem)({
  color: "inherit"
})

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const location = useLocation()
  let CustomListItem = ({ to, primary, icon }) => (
    <ListItem
    // component={NavLink}
    // to={to}
    // selected={to === location.pathname}
    >
      <ListItemIcon
      >
        {icon}
      </ListItemIcon>
      <ListItemText primary={primary} sx={{
        opacity: open ? 1 : 0
      }} />
    </ListItem>
  )
  const classNameFunc = ({ isActive }) => (isActive ? "active" : "navlink");

  useEffect(() => {
    // console.log("location" ,location)
    if (location.pathname === "/") {

    } else {
      // window.location.href = "/login"
    }
  })


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          boxShadow: "0 2px 10px 0 rgba(0,0,0,0.05)",
          backgroundColor: '#fff'
        }}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography color="black" variant="h6" noWrap component="div">
            Axonstech
          </Typography> */}
          <div className='app-bar__toolbar'>
            <ProfileDropdown />
          </div>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Toolbar>
            <div className='AxonsTitle'>
              <AllInclusiveIcon fontSize='large'color="success" />&nbsp;
              Meetingtrack
            </div>
          </Toolbar>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>

        {/* <MenuItem open={open} data={sidebar_other} /> */}
        <List>
          {sidebar_other.map((item, key) => (
            <LinkRouted
              component={RouterLink}
              to={item.path}
              disablePadding
              // className={classNameFunc}
              key={key}
            >
              {/* <ListItemButton>
                <ListItemText primary={item.name} />
              </ListItemButton> */}
              <CustomListItem icon={item.icon} to={item.path} primary={item.name} />
            </LinkRouted>

          ))}

        </List>


      </Drawer>

      <Box component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "#FAFAFB",
          minHeight: "100vh"
        }}
        className='w-100'
      >

        <DrawerHeader />
        <Typography paragraph>
          {props.children}
        </Typography>
      </Box>


      {/* <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "#FAFAFB",
          minHeight: "100vh",
        }}
        className="w-100"
      >
        <DrawerHeader />
        {props.children}
      </Box> */}
    </Box>
  );
}
