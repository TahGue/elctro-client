import { urls } from './../../../api/urls';
import axios from 'axios';

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

class ShopApi {
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

export default ShopApi;
