import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { useSettings } from '../../hooks/useSettings';
import { Product as ProductType } from '../../types/DBTypes';
import Button from '../../ui/Button';
import { useStateValue } from '../../providers/StateContext';
import { ADD_TO_CART, ADD_TO_FAVORITE } from '../../providers/stateTypes';

type IProps = {
  product: ProductType;
};

const ProductCard = ({ product }: IProps) => {
  const { currency } = useSettings();

  const [{ favorite }, changeState] = useStateValue();

  const onAddToCart = (product: ProductType) => {
    changeState({
      type: ADD_TO_CART,
      payload: product,
    });
  };

  const addToFavorite = (product: ProductType) => {
    changeState({
      type: ADD_TO_FAVORITE,
      payload: product,
    });
  };
  return (
    <div className='relative border border-grey text-center justify-center items-center p-2 m-2'>
      <Link href={`/product/${product.slug}`}>
        <div>
          <Image src={product?.image} layout='fixed' width={200} height={200} />
        </div>
      </Link>
      <div>
        <p>{product.name}</p>
        <span>{`${product.price} ${currency}`}</span>
      </div>
      <div>
        <span
          onClick={() => addToFavorite(product)}
          className=' absolute top-1  left-1 text-red cursor-pointer hover:animate-pulse'
        >
          {favorite.find((c: ProductType) => c.id === product.id) ? (
            <FaHeart size={25} />
          ) : (
            <FiHeart size={25} />
          )}
        </span>
      </div>
      <div>
        <Button onClick={() => onAddToCart(product)} size='md'>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
