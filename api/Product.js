import axiosInstance from './axiosinstance';
import { urls } from './urls';

class Product {
  static getFeatured() {
    return axiosInstance.get(urls.product.featured).then((res) => res.data);
  }
  static getLatest(limit) {
    return axiosInstance.get(urls.product.latest).then((res) => res.data, {
      params: {
        limit,
      },
    });
  }

  static getBySlug(slug) {
    return axiosInstance
      .get(urls.product.getBySlug, {
        params: {
          slug,
        },
      })
      .then((res) => res.data);
  }

  static async getShop({
    categories,
    brands,
    tags,
    searchText,
    priceRange,
    page,
  }) {
    return axiosInstance
      .post(urls.product.shop, {
        categories,
        brands,
        tags,
        searchText,
        priceRange,
        page,
      })
      .then((res) => res.data);
  }

  static search(name) {
    return axiosInstance
      .get(urls.product.search, {
        params: {
          name,
        },
      })
      .then((res) => res.data);
  }
}

export default Product;
