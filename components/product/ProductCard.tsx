import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FiHeart } from "react-icons/fi";
import { useSettings } from "../../hooks/useSettings";
import { Product as ProductType } from "../../types/DBTypes";
import Button from "../../ui/Button";

type IProps = {
  product: ProductType;
};

const ProductCard = ({ product }: IProps) => {
  const { currency } = useSettings();

  return (
    <div className="relative border border-grey text-center justify-center items-center p-2">
      <div>
        <Image src={product?.image} layout="fixed" width={200} height={200} />
      </div>
      <div>
        <p>{product.name}</p>
        <span>{`${product.price} ${currency}`}</span>
      </div>
      <div>
        <span className=" absolute top-1  left-1 text-red cursor-pointer hover:animate-ping ">
          <FiHeart size={25} />
        </span>
      </div>
      <div>
        <Link href={`/product/${product.slug}`}>
          <Button size="md">Add to cart</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
