import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

import { style } from './style';

type props = {
  img: any;
  title: string;
  desc: string;
  buttonOne: string;
  buttonTwo?: string;
};

const LoadCard = ({ img, buttonOne, buttonTwo }: props) => {
  return (
    <Card sx={{ background: 'transparent' }}>
      <CardMedia
        component="img"
        height="auto"
        image={img}
        alt="green iguana"
        sx={style.cardImageStyle}
      />
      <CardActions sx={{ display: 'inline' }}>
        <Box>
          <Button sx={style.cardButton}>{buttonOne}</Button>
          <Button sx={style.cardButton}>{buttonTwo}</Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default LoadCard;
