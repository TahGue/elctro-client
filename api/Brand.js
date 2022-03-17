import axios from 'axios';
import { urls } from './urls';

class Brand {
  static async getAll() {
    return axios.get(urls.brand.all).then((result) => result.data);
  }

  static async getBySlug(slug) {
    return axios
      .get(urls.brand.bySlug, {
        params: {
          slug,
        },
      })
      .then((result) => result.data);
  }
}

export default Brand;
