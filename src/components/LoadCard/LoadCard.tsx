import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { style } from './style';

type props = {
  img: any;
  title: string;
  desc: string;
  buttonOne: string;
  buttonTwo?: string;
};

const LoadCard = ({ img, title, desc, buttonOne, buttonTwo }: props) => {
  return (
    <Card sx={{ width: 300, margin: 3 }}>
      <CardMedia component="img" height="200" image={img} alt="green iguana" />
      <CardContent sx={{ padding: 3 }}>
        <Typography gutterBottom component="div" sx={style.cardLanguage}>
          ENGLISH{' '}
          <i
            className="fa fa-book"
            aria-hidden="true"
            style={{ color: '#A6A6A6' }}
          ></i>
        </Typography>
        <Typography gutterBottom component="div" sx={style.cardTitle}>
          {title}{' '}
        </Typography>
        <Typography variant="body2">{desc}</Typography>
      </CardContent>
      <CardActions sx={{ padding: '0px 3px 15px 20px' }}>
        <Button sx={style.cardButton}>{buttonOne}</Button>
        <Button>{buttonTwo}</Button>
      </CardActions>
    </Card>
  );
};

export default LoadCard;
