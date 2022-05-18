import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import ProductCard from '../product/ProductCard';
import { useStateValue } from '../../providers/StateContext';
import { Product } from '../../types/DBTypes';
import Empty from '../empty/Empty';

const Favorite = () => {
  const [{ favorite }] = useStateValue();

  return (
    <section>
      <h3 className=' text-2xl text-primary text-center my-2'>Wish list</h3>

      {(!favorite || favorite === null || favorite.length <= 0) && <Empty />}

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
