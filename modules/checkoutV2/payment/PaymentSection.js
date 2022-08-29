import { useTranslation } from 'next-export-i18n';
import React, { useState } from 'react';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Spinner,
} from 'reactstrap';
import {
  useSaveAddress,
  useSaveBillingAddress,
} from '../../../hooks/useAddresses';
import AddressForm from '../../../shared/addressForm/AddressForm';
import PaymentChoices from './paymentMethods/PaymentChoices';
import styles from './paymentSection.module.css';
import { useBillOrder } from '../../../hooks/useOrder';
import { useCart } from '../../../hooks/useCart';
import EmbedQuickPay from './EmbedQuickPay';
import { useCheckPayment, useQuickPayLink } from '../../../hooks/useQuickPay';

function PaymentSection({ isCurrent, onDone, address }) {
  const { t } = useTranslation();
  // states
  const [paymentMethod, setPaymentMethod] = useState('bill');
  const [displayQuickPayment, setDisplayQuickPayment] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState('');
  const [paymentId, setPaymentId] = useState('');

  // custom hooks
  // mutation hooks
  const saveBillingAddress = useSaveBillingAddress();
  const saveBillingOrder = useBillOrder();
  const getQuickPayLinkMutation = useQuickPayLink();
  // query hooks
  const { data: cart, isLoading: isLoadingCart } = useCart();

  // functions
  const onQuickPay = () => {
    getQuickPayLinkMutation.mutate(
      { address, cartId: cart?.id },
      {
        onSuccess: (dt) => {
          setPaymentUrl(dt?.url);
          setPaymentId(dt?.id);
          setDisplayQuickPayment(true);
        },
      }
    );
  };

  const onBillOrder = (dt) => {
    saveBillingAddress.mutate(
      {
        ...dt,
        isBilling: true,
      },
      {
        onSuccess: (data) => {
          saveBillingOrder.mutate(
            {
              cartId: cart?.id,
              shippingAddressId: address.id,
            },
            {
              onSuccess: () => {
                onDone();
              },
            }
          );
        },
      }
    );
  };
  // renders
  if (!isCurrent) {
    return (
      <div className={styles.inActiveContainer}>
        <h3 className={styles.title}>{t('payment')}</h3>
      </div>
    );
  }
  if (
    isLoadingCart ||
    saveBillingAddress.isLoading ||
    saveBillingOrder.isLoading
  ) {
    return <Spinner />;
  }
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{t('payment')}</h3>
      <PaymentChoices
        setPaymentMethod={setPaymentMethod}
        paymentMethod={paymentMethod}
      />
      {paymentMethod === 'bill' ? (
        <AddressForm buttonLabel={t('pay')} onSave={onBillOrder} />
      ) : (
        <Row style={{ marginTop: 20 }}>
          <Button onClick={onQuickPay} color='success'>
            {t('pay')}
          </Button>
        </Row>
      )}

      <Modal
        isOpen={displayQuickPayment}
        toggle={() => setDisplayQuickPayment(!displayQuickPayment)}
      >
        <ModalHeader>{t('payment')}</ModalHeader>
        <ModalBody>
          <EmbedQuickPay
            url={paymentUrl}
            paymentId={paymentId}
            shippingAddress={address}
            onSuccess={onDone}
          />
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
}

export default PaymentSection;
