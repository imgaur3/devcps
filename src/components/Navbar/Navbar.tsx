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
import SearchIcon from '@mui/icons-material/Search';

import { Logo } from '../../assets';
import { style } from './style';
import WrapperButton from '../Wrapper/WrapperButton/WrapperButton';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  {
    name: 'Home',
    path: '/home',
    key: 'home',
  },
  {
    name: 'Themes',
    path: '/themes',
    key: 'themes',
  },
  {
    name: 'Quran',
    path: '/quran',
    key: 'quran',
  },
  {
    name: 'Publications',
    path: '/publications',
    key: 'publications',
  },
  {
    name: 'Media',
    path: '/media',
    key: 'media',
  },
  {
    name: 'About Us',
    path: '/about-us',
    key: 'about-us',
  },
  {
    name: 'audios',
    path: '/audios',
    key: 'audios',
  },
  {
    name: 'Order free quran ',
    path: '/order-free-quran ',
    key: 'order-free-quran ',
  },
  {
    name: 'quran download',
    path: '/qurandownload',
    key: 'qurandownload',
  },
  {
    name: 'Faqs',
    path: '/faqs',
    key: 'faqs',
  },
  {
    name: 'Get Involved',
    path: '/get-Involved',
    key: 'get-Involved',
  },
];

const Navbar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={style.navItemDrawer}>
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
      <Box sx={style.appBarContainer}>
        <AppBar component="nav">
          <Toolbar>
            <Box sx={style.mobileLogoContainer}>
              <img src={Logo} alt="Mobile-logo" />
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={style.hamburgerIcon}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <img src={Logo} alt="Logo" />
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  sx={style.menuItems}
                  onClick={() => Navigate(item.path)}
                >
                  {item.name}
                </Button>
              ))}
              <WrapperButton title={'DONATE'} sx={style.menuDonateButton} />
              <IconButton size="large" aria-label="search" color="inherit">
                <SearchIcon sx={style.searchIconStyle} />
              </IconButton>
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
              keepMounted: true,
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
