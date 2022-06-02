import axiosInstance from '../../../api/axiosinstance';
import { urls } from '../../../api/urls';

class Payment {
  static async stripePayment(data: Object) {
    return axiosInstance
      .post(urls.payment.stripe, data)
      .then((res) => res.data);
  }
}

export default Payment;
