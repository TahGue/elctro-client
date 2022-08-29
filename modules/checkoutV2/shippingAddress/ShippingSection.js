import { useTranslation } from 'next-export-i18n';
import React, { useState } from 'react';
import { FaCheckCircle, FaCircle } from 'react-icons/fa';
import { useStateValue } from '../../../providers/StateContext';
import SectionTitle from '../../../shared/title/SectionTitle';
import styles from './shippingAddress.module.css';
import ShippingAddressForm from './shippingAddressForm/ShippingAddressForm';
import { useShipmentsMethods } from '../../../hooks/useShipment';
import { useCart } from '../../../hooks/useCart';
import ShippingMethod from './shippingMethod/ShippingMethod';

function ShippingSection({
  selectedAddress,
  setSelectedAddress,
  isSuccess,
  setShippingMethod,
}) {
  const { t } = useTranslation();
  const [{ user }] = useStateValue();
  const [displaySelectForm, setDisplaySelectForm] = useState(true);

  const onSelectAddress = (address) => {
    setSelectedAddress(address);
    if (address) {
      setDisplaySelectForm(false);
    } else {
      setDisplaySelectForm(true);
    }
  };
  if (user) {
    return (
      <div
        className={
          isSuccess ? styles.successLoggedContainer : styles.loggedContainer
        }
      >
        <div className={styles.row}>
          <span className={styles.title}>{t('shippingAddress')}</span>
          <span>
            <span
              className={styles.editBtn}
              onClick={() => setDisplaySelectForm(!displaySelectForm)}
            >
              {t('edit')}
            </span>
          </span>
        </div>
        {selectedAddress && (
          <div className={styles.row}>
            <div className={styles.addressInfo}>
              <div
                className={styles.addressText}
              >{`${selectedAddress.street}`}</div>
              <div
                className={styles.addressText}
              >{`${selectedAddress.city} ${selectedAddress.zip}`}</div>
              <div
                className={styles.addressText}
              >{`${selectedAddress.country.name}`}</div>
            </div>
            <div>
              <ShippingMethod
                address={selectedAddress}
                setShippingMethod={setShippingMethod}
              />
            </div>
          </div>
        )}

        {displaySelectForm && (
          <ShippingAddressForm
            selectedAddress={selectedAddress}
            onSelect={onSelectAddress}
          />
        )}
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <span>{t('shippingAddress')}</span>
      <button disabled={!user} className={styles.btn}>
        {t('addAddress')}
      </button>
    </div>
  );
}

export default ShippingSection;
