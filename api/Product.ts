import axios from 'axios';
import { urls } from './urls';

type GetShopArgs = {
  categories: number[];
  brands: number[];
  searchText: string;
  priceRange?: PriceRangeType;
  page?: number;
};

type PriceRangeType = {
  min: number;
  max: number;
};

class Product {
  static getFeatured() {
    return axios.get(urls.product.featured).then((res) => res.data);
  }
  static getLatest(limit: number | string | undefined) {
    return axios
      .get(urls.product.latest, {
        params: {
          limit,
        },
      })
      .then((res) => res.data);
  }

  static getBySlug(slug: string) {
    console.log(slug);
    return axios
      .get(`${urls.product.getBySlug}/${slug}`)
      .then((result) => result.data);
  }

  static async getShop({
    categories,
    brands,
    searchText,
    priceRange,
    page,
  }: GetShopArgs) {
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

  static search(name: string) {
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
