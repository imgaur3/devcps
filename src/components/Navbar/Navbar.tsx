/* eslint-disable no-undef */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  {
    name: 'Home',
    path: '/',
    key: 'home',
  },
];

const Navbar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        CPR Internatinal
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText
                primary={item.name}
                onClick={() => Navigate(item.path)}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const Navigate = useNavigate();
  return (
    <>
      <Box sx={{ display: 'flex', fontFamily: 'open sans' }}>
        <AppBar component="nav">
          <Grid
            container
            spacing={1}
            style={{
              background: '#efefef',
            }}
          >
            <Grid
              item
              lg={3}
              md={3}
              xs={12}
              sm={12}
              style={{
                textAlign: 'center',
                color: '#737373',
              }}
            >
              <i className="fa fa-phone" aria-hidden="true"></i>&nbsp;
              <span>0562-2424554</span>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              xs={12}
              sm={12}
              style={{
                textAlign: 'center',
                color: '#737373',
              }}
            >
              <i className="fa fa-envelope"></i>&nbsp;
              <span>info@cprinternational.com</span>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              xs={12}
              sm={12}
              style={{
                textAlign: 'center',
                color: '#737373',
              }}
            >
              <i className="fa fa-sign-in"></i>&nbsp;
              <span>Log In</span>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              xs={12}
              sm={12}
              style={{
                textAlign: 'center',
                color: '#737373',
              }}
            >
              <i className="fa fa-sign-in"></i>&nbsp;
              <span>Sign Up</span>
            </Grid>
          </Grid>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              CPR International
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  sx={{ color: '#fff' }}
                  onClick={() => Navigate(item.path)}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 0 }}>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
