import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type Iprops = {
  children: ReactNode;
  navigation?: boolean;
  slidesPerView?: number;
};
export default function CustomSlider({
  children,
  navigation = true,
  slidesPerView = 1,
}: Iprops) {
  return (
    <Swiper
      navigation={navigation}
      modules={[Pagination, Navigation]}
      className='swiper'
      slidesPerView={slidesPerView}
    >
      {children}
    </Swiper>
  );
}
