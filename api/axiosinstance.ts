import Axios from 'axios';
import { isServer } from '../helpers/helper';

const axiosInstance = Axios.create({
  headers: {
    Authorization:
      !isServer &&
      localStorage.getItem('token') &&
      localStorage.getItem('token') !== null
        ? `bearer ${
            localStorage.getItem('token') || ''.replaceAll('"', '').toString()
          }`
        : '',
  },
});

export default axiosInstance;
