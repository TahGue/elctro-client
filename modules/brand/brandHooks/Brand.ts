import axios from 'axios';
import { urls } from '../../../api/urls';

class Brand {
  static async getAll() {
    return axios.get(urls.brand.all).then((result) => result.data);
  }
  static async getBySlug(slug: string | string[] | undefined) {
    return axios
      .get(`${urls.brand.bySlug}/${slug}`)
      .then((result) => result.data);
  }
}

export default Brand;
