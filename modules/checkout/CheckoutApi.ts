import { urls } from '../../api/urls';
import axiosInstance from '../../api/axiosinstance';
import { RegisterInput } from '../../types/DBTypes';

export class CheckoutApi {
  static getAllAddresses = async () => {
    const response = await axiosInstance.get(urls.address.user);
    return response.data;
  };

  static register(data: RegisterInput) {
    return axiosInstance
      .post(urls.auth.register, data)
      .then((dt) => dt.data)
      .catch((err) => err);
  }
}
