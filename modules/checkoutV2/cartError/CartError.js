import { useTranslation } from 'next-export-i18n';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import CartItem from '../../../shared/cart/CartItem';
import styles from './cartError.module.css';

function CartError({ errors }) {
  const { t } = useTranslation();

  return (
    <Container>
      <Row>
        <div className={styles.container}>
          <h3 className={styles.title}>{t('cartErrorTitle')}</h3>
          <p className={styles.description}>{t('cartErrorDescription')}</p>
          {errors.map((pr) => (
            <CartItem key={pr.id} item={pr} />
          ))}
        </div>
      </Row>
    </Container>
  );
}

export default CartError;
