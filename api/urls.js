export const BASE_URL = 'http://localhost:8083/rest';

export const urls = {
  category: {
    all: `${BASE_URL}/categories/`,
    details: `${BASE_URL}/categories/`,
  },
  brand: {
    all: `${BASE_URL}/brands/`,
  },
  product: {
    featured: `${BASE_URL}/product/featured`,
    latest: `${BASE_URL}/product/latest`,
    shop: `${BASE_URL}/product/shop`,
    getBySlug: `${BASE_URL}/product`,
    search: `${BASE_URL}/product/search`,
  },
};
