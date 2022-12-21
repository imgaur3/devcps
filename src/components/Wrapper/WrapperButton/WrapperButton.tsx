import React, { ReactNode } from 'react';
import { Button, ButtonProps, CircularProgress } from '@mui/material';

interface Props extends ButtonProps {
  icon?: ReactNode;
  name?: string;
  type?: 'button' | 'reset' | 'submit';
  isLoading?: boolean;
  variant?: any;
  title?: string;
}

const WrapperButton = ({
  title,
  onClick = () => null,
  type,
  isLoading,
  ...rest
}: Props) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      type={type}
      title={title}
      {...rest}
    >
      {isLoading && <CircularProgress color="inherit" size={20} />}
      {title}
    </Button>
  );
};

export default WrapperButton;
