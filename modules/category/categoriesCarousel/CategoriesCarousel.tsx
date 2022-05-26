import React from 'react';
import { Category } from '../../../types/DBTypes';
import Image from 'next/image';
import CustomSlider from '../../../components/slider/CustomSlider';
import { SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { useCategories } from '../categoryHooks/useCategories';

type IProps = {
  selectedCategory?: Category | null;
};
export default function CategoriesCarousel({
  selectedCategory = null,
}: IProps) {
  const { data } = useCategories();

  return (
    <div className='p-1 w-full m-2'>
      <CustomSlider slidesPerView={5} navigation={false}>
        {data?.map((category: Category) => (
          <SwiperSlide key={category.id}>
            <Link href={`/category/${category.slug}`}>
              <div
                className={`
                flex cursor-pointer items-center
               border ${
                 selectedCategory?.id === category.id
                   ? 'border-primary'
                   : 'border-grey'
               }
                rounded-md m-3 p-1`}
              >
                <Image
                  src={category.image}
                  layout='fixed'
                  width={25}
                  height={25}
                  alt={category.name}
                />
                <span className=' p-2 '>{category.name}</span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </CustomSlider>
    </div>
  );
}
