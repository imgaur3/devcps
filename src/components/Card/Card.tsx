import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import { LeftArrow, RightArrow } from './arrows';
import { Card } from './cardItem';
import card1 from '../../assets/images/card1.jpg';
import './hideScrollbar.css';

const elemPrefix = 'test';
const getId = (index: number) => `${elemPrefix}${index}`;

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

function App() {
  const [items] = React.useState(getItems);

  return (
    <>
      <div className="example" style={{ paddingTop: '100px' }}>
        <div>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            options={{
              ratio: 0.9,
              rootMargin: '5px',
              threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1],
            }}
          >
            {items.map(({ id }) => (
              <Card
                title={'ENGLISH'}
                itemId={id}
                key={id}
                img={card1}
                cardTitle={'A PEACEFUL MIND'}
                cardDesc={
                  'When you take lesson from this natural news, you will abandon '
                }
              />
            ))}
          </ScrollMenu>
        </div>
      </div>
    </>
  );
}
export default App;
