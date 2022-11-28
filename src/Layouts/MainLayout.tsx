import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

import { style } from './style';

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <Box>
      <Box sx={style.layout}>
        <Box sx={style.main}>
          <Box sx={style.container}>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
