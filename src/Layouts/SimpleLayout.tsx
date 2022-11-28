import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
type Props = {
  children: ReactNode;
};

const SimpleLayout = ({ children }: Props) => {
  return <Box>{children}</Box>;
};

export default SimpleLayout;
