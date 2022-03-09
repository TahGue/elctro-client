import React from "react";
import { SwiperSlide } from "swiper/react";
import CustomSlider from "../components/slider/CustomSlider";
import Button from "../ui/Button";
import CategoriesCarousel from "../components/categoriesCarousel/CategoriesCarousel";
import ProductCard from "../components/product/ProductCard";
import ProductCard2 from "../components/product/ProductCard2";
import Login from "../components/login";

export default function home() {
  return (
    <>
      <CustomSlider>
        <SwiperSlide>
          <div className="w-full h-96 bg-lightgrey rounded-xl p-14  ">
            <h3 className=" text-5xl  text-black font-bold">
              Better Devices for Better Life
            </h3>
            <p className=" text-grey text-2xl mt-5 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>

            <Button
              onClick={() => {}}
              color="primary"
              size="large"
              rounded="lg"
            >
              Start shop
            </Button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-96 bg-lightgrey rounded-xl p-14  ">
            <h3 className=" text-5xl  text-black font-bold">
              Better Devices for Better Life
            </h3>
            <p className=" text-grey text-2xl m-5 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>

            <Button
              onClick={() => {}}
              color="primary"
              size="large"
              rounded="lg"
            >
              Start shop
            </Button>
          </div>
        </SwiperSlide>
      </CustomSlider>
      <CategoriesCarousel />

      <div>
        <ProductCard
          product={{
            id: 1,
            image: "/category.png",
            name: "Iphone 7",
            is_active: true,
            price: 200,
            is_new: true,
            description: "",
            brandId: 1,
            taxTypeId: 1,
          }}
        />
      </div>

      <div>
        <ProductCard2
          product={{
            id: 1,
            image: "/category.png",
            name: "Iphone 7",
            is_active: true,
            price: 200,
            is_new: true,
            description:
              "lorem sdkjflksdföklsd ösöldgölsdögksdk skdgklsdgklsdkl skdklfsdkgklsdsd,fsdlkglksdg",
            brandId: 1,
            taxTypeId: 1,
          }}
        />

        <Login />
      </div>
    </>
  );
}
