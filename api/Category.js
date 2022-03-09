import axios from 'axios';
import { urls } from './urls';

class Category {
  static async getAll() {
    return axios.get(urls.category.all).then((result) => result.data);
  }
}

export default Category;
