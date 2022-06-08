import { urls } from './../../api/urls';
import axiosInstance from '../../api/axiosinstance';

export class AddressApi {
  static getAll = async () => {
    const response = await axiosInstance.get(urls.address.all);
    return response.data;
  };
}
