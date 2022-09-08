import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';
import ProductCard from '../../components/product/ProductCard';
import { CategoryProduct, Product } from '../../types/DBTypes';
import CategoriesCarousel from './categoriesCarousel/CategoriesCarousel';
import CircleLoader from '../../components/loaders/CircleLoader';
import { useCategory } from './categoryHooks/useCategory';
import { Col, Container, Row } from 'react-grid-system';

export default function CategoryPage() {
  const router = useRouter();

  const { slug } = router.query;

  const { data, isError, isLoading } = useCategory({ slug });
  return (
    <div className='h-screen'>
      <CategoriesCarousel selectedCategory={data} />

      {isLoading && <CircleLoader />}
      {!isLoading && data && (
        <div className=' min-h-screen '>
          <div className=' flex justify-center items-center w-full relative p-4'>
            <Image
              src={data?.image || 'electroLogo.png'}
              layout='fixed'
              width={50}
              height={50}
              className='rounded-full mr-2'
            />
            <h3 className=' text-4xl p-2'> {data?.name}</h3>
          </div>
          <div>
            <Container>
              <Row>
                {data?.products?.map((pro: CategoryProduct) => (
                  <Col key={pro.id} lg={3} md={4} sm={12}>
                    <div className=' p-2'>
                      <ProductCard product={pro?.product} key={pro.id} />
                    </div>
                  </Col>
                ))}
              </Row>
              <Row>
                {/** 
                  <Paginator
                    totalItems={data?.totalCount}
                    perPage={21}
                    onSelectPage={(p) => setPage(p)}
                    currentPage={page}
                  />
                  */}
              </Row>
            </Container>
          </div>
        </div>
      )}
    </div>
  );
}
