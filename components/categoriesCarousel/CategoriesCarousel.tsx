import React from 'react';
import { useCategories } from '../../hooks/useCategories';
import { Category } from '../../types/DBTypes';
import Image from 'next/image';
import CustomSlider from '../slider/CustomSlider';
import { SwiperSlide } from 'swiper/react';
export default function CategoriesCarousel() {
  const { data } = useCategories();

  return (
    <div className='p-1 w-full m-2'>
      <h5 className=' text-black'>Category</h5>
      <CustomSlider slidesPerView={5} navigation={false}>
        {data?.map((category: Category) => (
          <SwiperSlide key={category.id}>
            <div className=' flex  items-center border border-grey  rounded-md m-3 p-1'>
              <Image
                src={category.image}
                layout='fixed'
                width={25}
                height={25}
                alt={category.name}
              />
              <span className=' p-2 '>{category.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </CustomSlider>
    </div>
  );
}
