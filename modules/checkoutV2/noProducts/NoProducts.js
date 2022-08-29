import React from 'react';
import { Container, Row } from 'reactstrap';
import { BsCartX } from 'react-icons/bs';
import { useLanguageQuery, useTranslation } from 'next-export-i18n';
import styles from './success.module.css';
import Link from 'next/link';

function NoProducts() {
  const { t } = useTranslation();
  const query = useLanguageQuery();
  const lang = query?.lang;
  return (
    <Container className={styles.container}>
      <Row>
        <BsCartX size={100} color='#ff6600' />
        <div className={styles.content}>
          <h1 className={styles.title}>{t('noProductsInCart')}</h1>
          <p className={styles.description}>
            {t('NoProductsInCartDescription')}
          </p>
        </div>
        <Link
          href={{
            pathname: '/',
            query: lang ? { lang } : {},
          }}
        >
          <button className={styles.btn}>{t('home')}</button>
        </Link>
      </Row>
    </Container>
  );
}

export default NoProducts;
