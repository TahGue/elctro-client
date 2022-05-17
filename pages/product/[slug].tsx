import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-grid-system';
import { Product, Product as ProductType } from '../../types/DBTypes';
import CircleLoader from '../../components/loaders/CircleLoader';
import { useProduct } from '../../hooks/products/useProducts';
import Button from '../../ui/Button';
import { useSettings } from '../../hooks/useSettings';
import { AiFillHeart } from 'react-icons/ai';
import { FaCarSide, FaHeart } from 'react-icons/fa';
import { ADD_TO_FAVORITE, ADD_TO_CART } from '../../providers/stateTypes';
import { useStateValue } from '../../providers/StateContext';
import { FiHeart } from 'react-icons/fi';

export default function ProductDetils() {
  const router = useRouter();
  const { slug } = router.query;
  const [count, setCount] = useState(1);
  const [{ favorite, cart }, changeState] = useStateValue();

  const { currency } = useSettings();

  const { data, isError, isLoading } = useProduct({ slug });

  const changeCount = (val: number) => {
    if (val > 0) {
      setCount(val);
    }
  };

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
    <div className='h-screen'>
      {isLoading && <CircleLoader />}
      {!isLoading && data && (
        <div className=' min-h-screen '>
          <div>
            <Container className=' '>
              <Row>
                <Col>
                  <div className=' flex justify-center items-center  w-full relative p-4  '>
                    <Image
                      src={data?.image}
                      layout='fixed'
                      width={650}
                      height={450}
                      className=' rounded-8 mr-2 broder-2'
                    />
                  </div>
                </Col>
                <Col className=''>
                  <Row className=' border-b-2 border-grey  '>
                    <div className=' '>
                      <div
                        onClick={() => addToFavorite(data)}
                        className='  flex items-center text-primary mt-10 cursor-pointer hover:animate-pulse'
                      >
                        {favorite.find(
                          (c: ProductType) => c.id === data?.id
                        ) ? (
                          <FaHeart size={15} />
                        ) : (
                          <FiHeart size={15} />
                        )}
                        <span className='text-xs  '>Add to Wishlist</span>
                      </div>
                      <h3 className=' text-3xl '> {data?.name}</h3>
                      <div className='flex '>
                        <span className='text-xl'>{`${data?.price} ${currency}`}</span>
                        <div className='line-through text-sm text-grey   m-2'>{`200 ${currency}`}</div>
                      </div>

                      <div className='flex  justify-between w-full m-3 '>
                        <div className='  flex text-primary mt-10'>
                          <FaCarSide />
                          <span className='text-xs  '>Free Delivery</span>
                        </div>
                        <div className='  flex text-primary mt-10'>
                          <FaCarSide />
                          <span className='text-xs  '>Free Delivery</span>
                        </div>
                        <div className='  flex text-primary mt-10'>
                          <FaCarSide />
                          <span className='text-xs  '>Free Delivery</span>
                        </div>
                      </div>
                    </div>
                  </Row>
                  <h3 className=' text-xl mt-2'>description</h3>

                  <div className='mt-5 mb-5  text-sm'>
                    <p>{data.description}</p>
                  </div>
                  <div>
                    <div className='flex justify-center mb-3'>
                      <Button
                        onClick={() => {
                          changeCount(count - 1);
                        }}
                      >
                        -
                      </Button>
                      <span className='mx-2 '>
                        <input
                          className=' h-full  focus:border-grey text-center'
                          value={count}
                          onChange={(e) =>
                            changeCount(parseInt(e.target.value) || 1)
                          }
                        ></input>
                      </span>
                      <Button
                        onClick={() => {
                          changeCount(count + 1);
                        }}
                      >
                        +
                      </Button>
                    </div>

                    <Button onClick={() => onAddToCart(data, count)}>
                      Add to cart
                    </Button>
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
