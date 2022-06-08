import axios from 'axios';
import { urls } from '../../../api/urls';

export const getProduct = (serial) =>
  axios.get(`/.netlify/functions/product/${serial}`);

export const createSession = ({ order_lines }) =>
  axios.post(urls.payment.klarnaSession, { order_lines });

export const createOrder = ({ authorization_token, order_lines }) =>
  axios.post('/.netlify/functions/order', {
    authorization_token,
    order_lines,
  });

export const getOrder = (orderId) =>
  axios.get(`/.netlify/functions/order/${orderId}`);
