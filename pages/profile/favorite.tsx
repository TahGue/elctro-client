import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import ProductCard from '../../components/product/ProductCard';
import { useStateValue } from '../../providers/StateContext';
import { Product } from '../../types/DBTypes';

const Favorite = () => {
  const [{ favorite }] = useStateValue();

  return (
    <section>
      <h3 className=' text-2xl text-primary text-center my-4'>Wish list</h3>
      <Container>
        <Row>
          {favorite.map((fav: Product) => (
            <Col lg={3} md={4} sm={12} key={fav.id}>
              <ProductCard product={fav} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Favorite;
