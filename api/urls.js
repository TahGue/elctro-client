export const BASE_URL = 'http://localhost:8083/rest';

export const urls = {
  category: {
    all: `${BASE_URL}/categories/`,
    details: `${BASE_URL}/categories/`,
    bySlug: `${BASE_URL}/categories/slug`,
  },
  brand: {
    all: `${BASE_URL}/brands/`,
    bySlug: `${BASE_URL}/brand/slug`,
  },
  product: {
    featured: `${BASE_URL}/products/featured`,
    latest: `${BASE_URL}/products/latest`,
    shop: `${BASE_URL}/products/shop`,
    getBySlug: `${BASE_URL}/products/slug`,
    search: `${BASE_URL}/products/search`,
  },
};
