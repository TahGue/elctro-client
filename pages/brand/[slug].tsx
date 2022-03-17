import { useRouter } from 'next/router';
import React from 'react';
import { useBrand } from '../../hooks/useBrand';
import Image from 'next/image';
import { Col, Container, Row } from 'react-grid-system';
import Paginator from '../../components/paginator/Paginator';
import ProductCard from '../../components/product/ProductCard';
import { BrandProduct, Product } from '../../types/DBTypes';
import BrandsCarousel from '../../components/brandsCarousel/BrandsCarousel';
import CircleLoader from '../../components/loaders/CircleLoader';

export default function Brand() {
  const router = useRouter();

  const { slug } = router.query;

  const { data, isError, isLoading } = useBrand({ slug });
  return (
    <div className='h-screen'>
      <BrandsCarousel selectedBrand={data} />

      {isLoading && <CircleLoader />}
      {!isLoading && data && (
        <div className=' min-h-screen '>
          <div className=' flex justify-center items-center w-full relative p-4'>
            <Image
              src={data?.image}
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
                {data?.products?.map((pro: Product) => (
                  <Col key={pro.id} lg={3} md={4} sm={12}>
                    <div className=' p-2'>
                      <ProductCard product={pro} key={pro.id} />
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
