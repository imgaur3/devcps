import * as React from 'react';
import { Box } from '@mui/material';

import { WrapperButton } from 'components';

import { style } from './style';

type props = {
  img: any;
  buttonOne?: string;
  buttonTwo?: string;
};

const DiscCard = ({ img, buttonOne, buttonTwo }: props) => {
  return (
    <Box sx={style.discoverParentContainer}>
      <Box sx={style.caroImageBooks}>
        <img src={img} alt="alt" />{' '}
      </Box>
      <Box sx={style.caroButtons}>
        <WrapperButton title={buttonOne} sx={style.buttonsStyle} />
        <WrapperButton title={buttonTwo} sx={style.buttonsStyle} />
      </Box>
    </Box>
  );
};

export default DiscCard;
