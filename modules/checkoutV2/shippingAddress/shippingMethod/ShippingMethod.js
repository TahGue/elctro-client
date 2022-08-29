import React, { useEffect } from 'react';
import { useShipmentsMethods } from '../../../../hooks/useShipment';
import { Spinner } from 'reactstrap';
import { useCart } from '../../../../hooks/useCart';
import { useTranslation } from 'next-export-i18n';
import { FiCheckCircle } from 'react-icons/fi';
import { FaCheckCircle } from 'react-icons/fa';

function ShippingMethod({ address, setShippingMethod }) {
  const { t } = useTranslation();
  const { data: cart, isLoading: isLoadingCart } = useCart();
  const { data: shipmentMethods, isLoading: isLoadingMethods } =
    useShipmentsMethods(cart?.id, address?.id);

  useEffect(() => {
    if (shipmentMethods && shipmentMethods.length > 0) {
      setShippingMethod(shipmentMethods[0]);
    }
  }, [shipmentMethods]);

  if (isLoadingMethods || isLoadingCart) {
    return (
      <Spinner variant='success' animation='border' role='status' size='lg' />
    );
  }

  if (shipmentMethods && shipmentMethods.length <= 0) {
    return (
      <div>
        <p>{t('noShipments')}</p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <p
        style={{
          color: '#ff6600',
          margin: '0 10px',
        }}
      >{`${shipmentMethods[0].price} SEK`}</p>
      <FaCheckCircle color='green' size={24} />
    </div>
  );
}

export default ShippingMethod;
