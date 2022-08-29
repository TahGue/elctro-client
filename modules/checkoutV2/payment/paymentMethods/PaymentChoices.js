import { useTranslation } from 'next-export-i18n';
import React from 'react';
import { Input } from 'reactstrap';
import styles from './paymentChoices.module.css';

function PaymentChoices({ setPaymentMethod, paymentMethod }) {
  const { t } = useTranslation();

  return (
    <div className={styles.radioContainer}>
      <div className={styles.radioItem}>
        <Input
          type='radio'
          name='payment'
          value={t('bill')}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <span className={styles.radioLabel}>{t('bill')}</span>
      </div>
      <div>
        <Input
          type='radio'
          name='payment'
          value={'creditcard'}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <span className={styles.radioLabel}> {t('creditCard')}</span>
      </div>
    </div>
  );
}

export default PaymentChoices;
