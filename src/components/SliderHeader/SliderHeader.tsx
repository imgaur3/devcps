import React, { useEffect, useState } from 'react';

import DesktopSliderHeader from './DesktopSliderHeader';
import MobileHeaderSlider from './MobileHeaderSlider';

function SliderHeader() {
  const [state, setState] = useState({
    mobileView: false,
  });

  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1025
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());
    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
    };
  }, []);

  if (mobileView) return <MobileHeaderSlider />;
  return <DesktopSliderHeader />;
}

export default SliderHeader;
