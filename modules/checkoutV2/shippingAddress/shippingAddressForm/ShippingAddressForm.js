import { useTranslation } from 'next-export-i18n';
import React from 'react';
import { FaCheckCircle, FaCircle } from 'react-icons/fa';
import { FiCheckCircle, FiCircle } from 'react-icons/fi';
import { useAddresses, useSaveAddress } from '../../../../hooks/useAddresses';
import AddressForm from '../../../../shared/addressForm/AddressForm';
import styles from './style.module.css';

function ShippingAddressForm({ selectedAddress, onSelect }) {
  const { data, isLoading } = useAddresses();
  const saveMutation = useSaveAddress();

  const { t } = useTranslation();

  const onSaveNewAddress = (dt) => {
    saveMutation.mutate(
      { ...dt, isBilling: false },
      {
        onSuccess: (data) => {
          onSelect(data);
        },
      }
    );
  };
  return (
    <div>
      {data?.length > 0 && (
        <div>
          {data
            ?.filter((c) => c.isBilliing === false)
            .map((address) => (
              <div
                onClick={() => onSelect(address)}
                className={styles.addressItem}
              >
                <span>
                  {address?.id === selectedAddress?.id ? (
                    <FiCheckCircle color='#ff6600' />
                  ) : (
                    <FiCircle color='#3c3c3c50' />
                  )}
                </span>
                <span>{address.street}</span>
              </div>
            ))}
        </div>
      )}
      <div onClick={() => onSelect(null)} className={styles.addressItem}>
        <span>
          {selectedAddress === null ? (
            <FiCheckCircle color='#ff6600' />
          ) : (
            <FiCircle color='#3c3c3c50' />
          )}
        </span>
        <span>{`${t('addNewAddress')}`}</span>
      </div>
      {selectedAddress === null && (
        <AddressForm displayTitle={false} onSave={onSaveNewAddress} />
      )}
    </div>
  );
}

export default ShippingAddressForm;
