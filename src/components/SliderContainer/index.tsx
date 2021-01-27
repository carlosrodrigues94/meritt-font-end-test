import React from 'react';

import Slider from 'react-slick';

const SliderContainer: React.FC = ({ children }) => {
  return (
    <Slider dots slidesToShow={2}>
      {children}
    </Slider>
  );
};

export default SliderContainer;
