import React, { FC, useMemo } from 'react';
import Carousel from 'nuka-carousel/lib/carousel';

interface Props {
  data: string[];
}
const CategoryCarousel: FC<Props> = () => (
  <Carousel
    autoplay
    autoplayInterval={5000}
    pauseOnHover
    speed={1000}
    wrapAround
    style={{
      height: 440,
      borderStyle: 'solid',
      borderWidth: 1,
    }}
  >
    <h1>aca va la data</h1>
  </Carousel>
);

export default CategoryCarousel;
