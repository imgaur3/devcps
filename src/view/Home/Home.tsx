import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { logOut } from '../../redux/Actions';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
  const dispatchAction = useDispatch();
  const navigate = useNavigate();

  return (
    <Box>
      <Typography>
        Mini variant drawer Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus
        at morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
      </Typography>
      <Navbar />
      <button
        onClick={() => {
          dispatchAction(logOut);
          navigate('/signup');
        }}
      >
        Logout
      </button>
    </Box>
  );
};

export default Home;
