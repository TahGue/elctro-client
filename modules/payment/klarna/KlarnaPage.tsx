import React from 'react';
import { useStateValue } from '../../../providers/StateContext';
import Button from '../../../ui/Button';
import { getOrder, getProduct, createSession, createOrder } from './Api';

const toOderLine = ({ name, price, id, image, quentity }) => ({
  type: 'physical',
  reference: id,
  image_url: image,
  name,
  quantity: quentity,
  unit_price: price,
  tax_rate: 0,
  total_amount: price,
  total_discount_amount: 0,
  total_tax_amount: 0,
});

function KlarnaPage() {
  const [{ cart }] = useStateValue();

  const [status, setStatus] = React.useState('cart');
  const [products, setProducts] = React.useState([]);
  const [orderId, setOrderId] = React.useState('');
  const [widgetLoaded, setWidgetLoaded] = React.useState(false);

  const startScanning = React.useCallback(() => {
    setStatus('scanning');
  }, [setStatus]);

  const stopScanning = React.useCallback(() => {
    setStatus('cart');
  }, [setStatus]);

  const handleScanResult = React.useCallback(
    async (result) => {
      const serial = result.getText();
      const response = await getProduct(serial);
      setProducts((p) => p.concat(response.data));
      setStatus('cart');
    },
    [setStatus, setProducts]
  );

  const pay = React.useCallback(async () => {
    setStatus('paying');
    const response = await createSession({
      order_lines: cart.map(toOderLine),
    });
    const { client_token } = response.data;
    const Klarna = window.Klarna;
    Klarna.Payments.init({
      client_token,
    });

    Klarna.Payments.load(
      {
        container: '#klarna-payments-container',
        payment_method_category: 'pay_later',
      },
      (res) => {
        setWidgetLoaded(true);
      }
    );
  }, [setStatus, products]);

  const showQrCode = React.useCallback(() => {
    setStatus('qrCode');
  }, [setStatus]);

  const closeQrCode = React.useCallback(() => {
    setStatus('completed');
  }, [setStatus]);

  const authorize = React.useCallback(async () => {
    const Klarna = window.Klarna;
    Klarna.Payments.authorize(
      {
        payment_method_category: 'pay_later',
        auto_finalize: true,
      },
      async ({ authorization_token }) => {
        const response = await createOrder({
          authorization_token,
          order_lines: products.map(toOderLine),
        });
        setOrderId(response.data.order_id);
        setStatus('completed');
      }
    );
  }, [setStatus, setOrderId, products]);

  if (status === 'cart') {
    return (
      <div>
        <Button onClick={pay}>Pay with Klarna</Button>
      </div>
    );
  }

  if (status === 'paying') {
    return (
      <div>
        <div
          id='klarna-payments-container'
          style={{
            paddingTop: `10px`,
          }}
        ></div>
        <Button onClick={authorize} disabled={!widgetLoaded}>
          Continue
        </Button>
      </div>
    );
  }

  if (status === 'completed') {
    return <Button>Payment completed</Button>;
  }
  return null;
}

export default KlarnaPage;
