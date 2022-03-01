import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type Iprops = {
  children: ReactNode;
};
export default function CustomSlider({ children }: Iprops) {
  return (
    <Swiper
      navigation={true}
      modules={[Pagination, Navigation]}
      className='swiper'
    >
      {children}
    </Swiper>
  );
}
