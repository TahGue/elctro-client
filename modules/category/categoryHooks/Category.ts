import axios from 'axios';
import { urls } from '../../../api/urls';

class Category {
  static async getAll() {
    return axios.get(urls.category.all).then((result) => result.data);
  }

  static async getBySlug(slug: string | string[] | undefined) {
    return axios
      .get(`${urls.category.bySlug}/${slug}`)
      .then((result) => result.data);
  }
}

export default Category;
