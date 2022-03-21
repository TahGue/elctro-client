import axios from 'axios';
import { urls } from './urls';

class Product {
  static getFeatured() {
    return axios.get(urls.product.featured).then((res) => res.data);
  }
  static getLatest(limit) {
    return axios.get(urls.product.latest).then((res) => res.data, {
      params: {
        limit,
      },
    });
  }

  static getBySlug(slug) {
    console.log(slug);
    return axios
      .get(`${urls.product.getBySlug}/${slug}`)
      .then((result) => result.data);
  }

  static async getShop({ categories, brands, searchText, priceRange, page }) {
    return axios
      .post(urls.product.shop, {
        categories,
        brands,
        searchText,
        priceRange,
        page,
      })
      .then((res) => res.data);
  }

  static search(name) {
    return axios
      .get(urls.product.search, {
        params: {
          name,
        },
      })
      .then((res) => res.data);
  }
}

export default Product;
