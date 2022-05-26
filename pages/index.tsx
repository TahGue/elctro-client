import React from 'react';
import { SwiperSlide } from 'swiper/react';
import CustomSlider from '../components/slider/CustomSlider';
import Button from '../ui/Button';
import CategoriesCarousel from '../modules/category/categoriesCarousel/CategoriesCarousel';
import FeaturedProducts from '../components/featuredProduct/FeaturedProducts';
import BrandsCarousel from '../modules/brand/brandsCarousel/BrandsCarousel';
import LatestProducts from '../components/latestProducts/LatestProducts';

export default function home() {
  return (
    <>
      <CustomSlider>
        <SwiperSlide>
          <div className='w-full h-96 bg-lightgrey rounded-xl p-14  '>
            <h3 className=' text-5xl  text-black font-bold'>
              Better Devices for Better Life
            </h3>
            <p className=' text-grey text-2xl mt-5 '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>

            <Button
              onClick={() => {}}
              color='primary'
              size='large'
              rounded='lg'
            >
              Start shop
            </Button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='w-full h-96 bg-lightgrey rounded-xl p-14  '>
            <h3 className=' text-5xl  text-black font-bold'>
              Better Devices for Better Life
            </h3>
            <p className=' text-grey text-2xl m-5 '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>

            <Button
              onClick={() => {}}
              color='primary'
              size='large'
              rounded='lg'
            >
              Start shop
            </Button>
          </div>
        </SwiperSlide>
      </CustomSlider>
      <CategoriesCarousel />

      <BrandsCarousel />

      <FeaturedProducts />
      <LatestProducts />
    </>
  );
}
