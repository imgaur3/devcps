import React from 'react';
import { Box, Typography } from '@mui/material';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

import { style } from './styles';
import WrapperButton from '../Wrapper/WrapperButton';
type props = {
  img: any;
  cardTitle: string;
  cardDesc: string;
  title: string;
  itemId: string;
};
export function Card({ img, cardTitle, cardDesc, title, itemId }: props) {
  const visibility = React.useContext(VisibilityContext);
  const visible = visibility.isItemVisible(itemId);

  return (
    <Box role="button" sx={style.cardBoxStyle} tabIndex={0} className="card">
      <div>
        <div>
          <img src={img} alt="card" style={{ width: '100%' }} />
        </div>
        <div
          style={{ backgroundColor: visible ? 'transparent' : 'transparent' }}
        >
          <Typography
            style={{
              textAlign: 'end',
              padding: 20,
              color: '#545454',
              fontFamily: 'open sans',
              fontWeight: 500,
            }}
          >
            {title} <i className="fa fa-book" aria-hidden="true"></i>
          </Typography>{' '}
          <Box sx={{ padding: 2 }}>
            <Typography sx={style.cardTitle}>{cardTitle}</Typography>
            <Typography sx={style.cardDesc}>{cardDesc}</Typography>
            <WrapperButton
              name="Learn More"
              type="submit"
              sx={style.cardButton}
            />
          </Box>
        </div>
      </div>
    </Box>
  );
}
