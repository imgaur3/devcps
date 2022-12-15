/* eslint-disable no-undef */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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

const themeItems = [
  {
    name: 'Discover God',
    path: '/discover-god',
    key: 'discover-god',
  },
  {
    name: 'Creation Plan of God',
    path: '/creation-plan-of-god',
    key: 'creation-plan-of-god',
  },
  {
    name: 'Quran',
    path: '/quran',
    key: 'quran',
  },
  {
    name: 'Prophetic Wisdom',
    path: '/prophetic-wisdom',
    key: 'prophetic-wisdom',
  },
  {
    name: 'Spirituality',
    path: '/spirituality',
    key: 'spirituality',
  },
  {
    name: 'Discover Islam',
    path: '/discover-islam',
    key: 'discover-islam',
  },
  {
    name: 'ISLAM IN 21st CENTURY',
    path: '/islam-in-21-century',
    key: 'islam-in-21-century',
  },
  {
    name: 'Peace',
    path: '/peace',
    key: 'peace',
  },
  {
    name: 'Political Interpretation of Islam',
    path: '/political-interpretation-of-islam',
    key: 'political-interpretation-of-islam',
  },
  {
    name: 'LIFE MANAGEMENT',
    path: '/life-management',
    key: 'life-management',
  },
  {
    name: 'Call to God',
    path: '/call-to-god',
    key: 'call-to-god',
  },
  {
    name: 'All Topics',
    path: '/all-topics',
    key: 'all-topics',
  },
];

const publicationsItems = [
  {
    name: 'Articles',
    path: '/articles',
    key: 'articles',
  },
  {
    name: 'Books',
    path: '/themes',
    key: 'themes',
  },
  {
    name: 'Magazines',
    path: '/magazines',
    key: 'magazines',
  },
];
const mediaItems = [
  {
    name: 'Videos',
    path: '/videos',
    key: 'videos',
  },
  {
    name: 'Audio',
    path: '/audio',
    key: 'audio',
  },
];
const aboutItems = [
  {
    name: 'Gallery',
    path: '/gallery',
    key: 'gallery',
  },
  {
    name: 'News Room',
    path: '/news-room',
    key: 'news-room',
  },
];
const Navbar = (props: Props) => {
  const Navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<any>(null);
  const [menu, setMenu] = React.useState<any>();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //Mobile Dropdown Menu
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={style.navItemDrawer}>
      <Typography variant="h6" sx={{ my: 2 }}>
        CPR Internatinal
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Button
            key={item.name}
            sx={style.menuItems}
            onClick={(event) => {
              if (item.key === 'themes') {
                setMenu(themeItems);
                handleClick(event);
              } else if (item.key === 'publications') {
                setMenu(publicationsItems);
                handleClick(event);
              } else if (item.key === 'media') {
                setMenu(mediaItems);
                handleClick(event);
              } else if (item.key === 'about-us') {
                setMenu(aboutItems);
                handleClick(event);
              } else {
                Navigate(item.path);
              }
            }}
          >
            {item.name}
            {item.key === 'themes' && <KeyboardArrowDownIcon />}
            {item.key === 'publications' && <KeyboardArrowDownIcon />}
            {item.key === 'media' && <KeyboardArrowDownIcon />}
            {item.key === 'about-us' && <KeyboardArrowDownIcon />}
          </Button>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            {navItems.map((item) => (
              <Button
                key={item.name}
                sx={style.menuItems}
                onClick={(event) => {
                  if (item.key === 'themes') {
                    setMenu(themeItems);
                    handleClick(event);
                  } else if (item.key === 'publications') {
                    setMenu(publicationsItems);
                    handleClick(event);
                  } else if (item.key === 'media') {
                    setMenu(mediaItems);
                    handleClick(event);
                  } else if (item.key === 'about-us') {
                    setMenu(aboutItems);
                    handleClick(event);
                  } else {
                    Navigate(item.path);
                  }
                }}
              >
                {item.name}
                {item.key === 'themes' && <KeyboardArrowDownIcon />}
                {item.key === 'publications' && <KeyboardArrowDownIcon />}
                {item.key === 'media' && <KeyboardArrowDownIcon />}
                {item.key === 'about-us' && <KeyboardArrowDownIcon />}
              </Button>
            ))}
            <WrapperButton title={'DONATE'} sx={style.menuDonateButton} />
            <IconButton size="large" aria-label="search" color="inherit">
              <SearchIcon sx={style.searchIconStyle} />
            </IconButton>
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
        <Menu
          sx={{ top: 40 }}
          id="simple-menu"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Box sx={style.dropdownMenuItems}>
            {menu &&
              menu.map((item: any) => (
                <MenuItem
                  key={item.name}
                  onClick={() => {
                    Navigate('/item.path');
                    handleClose();
                  }}
                >
                  {item.name}
                </MenuItem>
              ))}
          </Box>
        </Menu>
        <Box component="main" sx={{ p: 0 }}>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
