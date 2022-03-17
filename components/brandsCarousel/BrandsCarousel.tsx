import React from 'react';
import { useBrands } from '../../hooks/useBrands';
import { Brand } from '../../types/DBTypes';
import Image from 'next/image';
import CustomSlider from '../slider/CustomSlider';
import { SwiperSlide } from 'swiper/react';
import Link from 'next/link';

type IProps = {
  selectedBrand?: Brand | null;
};

export default function BrandsCarousel({ selectedBrand = null }: IProps) {
  const { data } = useBrands();

  return (
    <div className='p-1 w-full m-2'>
      <CustomSlider slidesPerView={5} navigation={false}>
        {data?.map((brand: Brand) => (
          <SwiperSlide key={brand.id}>
            <Link href={`/brand/${brand.slug}`}>
              <div
                className={` 
              flex flex-col items-center cursor-pointer
               border-2 ${
                 selectedBrand?.id === brand.id
                   ? 'border-primary'
                   : 'border-grey'
               } 
              
              rounded-md m-3 p-1  h-24 `}
              >
                <Image
                  src={brand.image}
                  layout='fixed'
                  width={50}
                  height={50}
                  alt={brand.name}
                />
                <span className=' p-2 text-sm  text-center '>{brand.name}</span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </CustomSlider>
    </div>
  );
}
