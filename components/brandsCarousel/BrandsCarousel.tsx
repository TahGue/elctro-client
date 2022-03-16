import React from "react";
import { useBrands } from "../../hooks/useBrands";
import { Brand } from "../../types/DBTypes";
import Image from "next/image";
import CustomSlider from "../slider/CustomSlider";
import { SwiperSlide } from "swiper/react";
export default function CategoriesCarousel() {
  const { data } = useBrands();

  return (
    <div className="p-1 w-full m-2">
      <h5 className=" text-black">Brand</h5>
      <CustomSlider slidesPerView={5} navigation={false}>
        {data?.map((brand: Brand) => (
          <SwiperSlide key={brand.id}>
            <div className=" flex flex-col items-center border border-grey  rounded-md m-3 p-1  h-24 ">
              <Image
                src={brand.image}
                layout="fixed"
                width={50}
                height={50}
                alt={brand.name}
              />
              <span className=" p-2 text-sm  text-center ">{brand.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </CustomSlider>
    </div>
  );
}
