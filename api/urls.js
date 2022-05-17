export const BASE_URL = 'http://127.0.0.1:8083/rest';

export const urls = {
  category: {
    all: `${BASE_URL}/categories/`,
    details: `${BASE_URL}/categories/`,
    bySlug: `${BASE_URL}/categories/slug`,
  },
  brand: {
    all: `${BASE_URL}/brands/`,
    bySlug: `${BASE_URL}/brands/slug`,
  },
  product: {
    featured: `${BASE_URL}/products/featured`,
    latest: `${BASE_URL}/products/latest`,
    shop: `${BASE_URL}/products/shop`,
    getBySlug: `${BASE_URL}/products/slug`,
    search: `${BASE_URL}/products/search`,
  },
  auth: {
    login: `${BASE_URL}/auth/user`,
    register: `${BASE_URL}/auth/signup-user`,
    requestChangePassword: `${BASE_URL}/auth/forget`,
    ValidateToken: `${BASE_URL}/auth/validate`,
    reset: `${BASE_URL}/auth/reset`,
  },
};
