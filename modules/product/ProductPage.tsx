import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-grid-system';
import { Product as ProductType } from '../../types/DBTypes';
import CircleLoader from '../../components/loaders/CircleLoader';
import { useProduct } from './productHooks/useProducts';
import Button from '../../ui/Button';
import { FaCarSide, FaHeart } from 'react-icons/fa';
import { ADD_TO_FAVORITE, ADD_TO_CART } from '../../providers/stateTypes';
import { useStateValue } from '../../providers/StateContext';
import { FiHeart } from 'react-icons/fi';
import CountChanger from '../cart/cart/CountChanger';
import IconText from '../../components/shared/IconText';
import Price from '../../components/shared/Price';
import { useSettings } from '../../hooks/useSettings';
import Product from './Product';
import ImageSlider from './../../components/shared/imageSlider/ImageSlider';
export default function ProductPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [count, setCount] = useState(1);
  const [{ favorite, cart }, changeState] = useStateValue();

  const { currency } = useSettings();

  const { data, isError, isLoading } = useProduct({ slug });

  const addToFavorite = (product: ProductType) => {
    changeState({
      type: ADD_TO_FAVORITE,
      payload: product,
    });
  };

  const onAddToCart = (product: ProductType, count: number) => {
    changeState({
      type: ADD_TO_CART,
      payload: { ...product, count },
    });

    // alert(JSON.stringify(cart[0].count));
  };

  return (
    <div className='bg-white p-2'>
      {isLoading && <CircleLoader />}
      {!isLoading && data && (
        <div className='min-h-screen'>
          <div>
            <Container>
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <div className=' border border-primary '>
                    <ImageSlider
                      images={
                        [data?.image, ...data?.images] || ['electroLogo.png']
                      }
                    />
                  </div>
                </Col>
                <Col>
                  <div className=' '>
                    <div
                      onClick={() => addToFavorite(data)}
                      className='  flex items-center text-primary mt-10 cursor-pointer hover:animate-pulse'
                    >
                      {favorite.find((c: ProductType) => c.id === data?.id) ? (
                        <FaHeart size={15} />
                      ) : (
                        <FiHeart size={15} />
                      )}
                      <span className='text-xs  '>Add to Wishlist</span>
                    </div>
                    <h3 className=' text-3xl '> {data?.name}</h3>
                    <Price
                      price={data?.price}
                      oldPrice={data?.oldPrice}
                      currency={currency}
                    />

                    <div className='flex  justify-between w-full m-3 border-b border-gray '>
                      <IconText Icon={<FaCarSide />} text='Free delivery' />
                      <IconText Icon={<FaCarSide />} text='Free delivery' />
                      <IconText Icon={<FaCarSide />} text='Free delivery' />
                    </div>
                  </div>

                  <CountChanger value={count} changeCount={setCount} />

                  <Button
                    onClick={() => onAddToCart(data, count)}
                    className='mt-4'
                  >
                    Add to cart
                  </Button>

                  <div className='mt-5 mb-5  text-sm'>
                    <h3 className=' text-xl mt-2'>description</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data?.description,
                      }}
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      )}
    </div>
  );
}
