import React from 'react';

import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import { useLatestProducts } from '../productHooks/useLatestProducts';
import CustomSlider from '../../../components/slider/CustomSlider';
import { Product } from '../../../types/DBTypes';
import ProductCard from '../../../components/product/ProductCard';

function LatestProducts() {
  const { data, isLoading } = useLatestProducts();

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <div className='p-1 w-full m-2'>
      <h5 className=' text-black'>Latest products</h5>
      <CustomSlider slidesPerView={5} navigation={false}>
        {data?.map((product: Product) => (
          <SwiperSlide key={product.id}>
            <div className='p-2'>
              <ProductCard product={product} />
            </div>
          </SwiperSlide>
        ))}
      </CustomSlider>
    </div>
  );
}

export default LatestProducts;
