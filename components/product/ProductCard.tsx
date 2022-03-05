import Image from 'next/image';
import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { useSettings } from '../../hooks/useSettings';
import { Product as ProductType } from '../../types/DBTypes';
import Button from '../../ui/Button';

type IProps = {
  product: ProductType;
};

const ProductCard = ({ product }: IProps) => {
  const { currency } = useSettings();

  return (
    <div className='border border-grey'>
      <div>
        <Image src={product?.image} layout='fixed' width={200} height={200} />
      </div>
      <div>
        <p>{product.name}</p>
        <span>{`${product.price} ${currency}`}</span>
      </div>
      <div>
        <span>
          <FiHeart />
        </span>
      </div>
      <div>
        <Button onClick={() => {}}>Add to cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
