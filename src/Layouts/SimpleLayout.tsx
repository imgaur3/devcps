import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

import { Footer, Navbar } from 'components';

type Props = {
  children: ReactNode;
};

const SimpleLayout = ({ children }: Props) => {
  return (
    <>
      <Box>
        <Navbar />
        <Box component="main">{children}</Box>
        <Footer />
      </Box>
    </>
  );
};

export default SimpleLayout;
