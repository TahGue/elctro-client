import axios from 'axios';
import { urls } from './urls';

class Brand {
<<<<<<< HEAD
  static async getAll() {
    return axios.get(urls.brand.all).then((result) => result.data);
  }
=======
    static async getAll() {
        return axios.get(urls.brand.all).then((result) => result.data);
    }
>>>>>>> a73ea89320a93fed902f74c83390c3df4e784a36
}

export default Brand;
