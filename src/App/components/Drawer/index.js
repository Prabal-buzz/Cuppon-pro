import React from 'react';
import { List, Logo } from '../index';
import { useStyles } from './index.style';
import { AccountCircle } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import {
  AppBar,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  useTheme,
} from '@material-ui/core';

export default function ResponsiveDrawer(props) {
  const {
    window,
    children,
    menus,
    handleLogoutClick,
    handleProfileClick,
  } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const profileMenuOpen = Boolean(anchorEl);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (e) => {
    setAnchorEl(e.target);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

   const handleProfile = () => {
     handleProfileMenuClose();
     handleProfileClick();
  }; 

  const drawerMenu = (
    <div>
      <div className={classes.toolbar}>
        <Logo />
      </div>
      <List items={menus} />
    </div>
  );

  const profileMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={profileMenuOpen}
      onClose={handleProfileMenuClose}
    >
      <MenuItem onClick={handleProfile}>Profile</MenuItem>
      <MenuItem onClick={handleLogoutClick}>Log out</MenuItem>
    </Menu>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <AppBar
        elevation={0}
        position="fixed"
        color="inherit"
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Grid container className={classes.toolbarContainer}>
            <IconButton onClick={handleProfileMenuOpen} color="inherit">
              <AccountCircle />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
      {profileMenu}
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawerMenu}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
            elevation={4}
          >
            {drawerMenu}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}
