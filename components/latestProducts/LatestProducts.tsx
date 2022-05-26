import React from 'react';
import CustomSlider from '../slider/CustomSlider';
import { Category, Product } from '../../types/DBTypes';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import ProductCard from '../product/ProductCard';
import { useLatestProducts } from '../../modules/product/products/useLatestProducts';

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
