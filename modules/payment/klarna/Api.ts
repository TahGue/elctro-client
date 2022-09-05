import axios from 'axios';
import { urls } from '../../../api/urls';

export const getProduct = (serial: string) =>
  axios.get(`/.netlify/functions/product/${serial}`);

export const createSession = ({ order_lines }: { order_lines: string[] }) =>
  axios.post(urls.payment.klarnaSession, { order_lines });

type createOrderType = {
  authorization_token: string;
  order_lines: OrderLine[];
};

type OrderLine = {
  type: string;
  reference: string;
  image_url: string;
  name: string;
  quantity: number;
  unit_price: number;
  tax_rate: number;
  total_amount: number;
  total_discount_amount: number;
  total_tax_amount: number;
};
export const createOrder = ({
  authorization_token,
  order_lines,
}: createOrderType) =>
  axios.post('/.netlify/functions/order', {
    authorization_token,
    order_lines,
  });

export const getOrder = (orderId: string) =>
  axios.get(`/.netlify/functions/order/${orderId}`);
