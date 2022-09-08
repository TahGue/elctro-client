export const BASE_URL = 'http://127.0.0.1:8083/rest';

export const urls = {
  category: {
    all: `${BASE_URL}/category/`,
    details: `${BASE_URL}/category/`,
    bySlug: `${BASE_URL}/category/slug`,
  },
  brand: {
    all: `${BASE_URL}/brand/`,
    bySlug: `${BASE_URL}/brand/slug`,
  },
  product: {
    featured: `${BASE_URL}/product/feature`,
    latest: `${BASE_URL}/product/latest`,
    shop: `${BASE_URL}/product/shop`,
    getBySlug: `${BASE_URL}/product/details`,
    search: `${BASE_URL}/product/search`,
  },
  auth: {
    login: `${BASE_URL}/auth/user`,
    register: `${BASE_URL}/auth/signup-user`,
    requestChangePassword: `${BASE_URL}/auth/forget`,
    ValidateToken: `${BASE_URL}/auth/validate`,
    reset: `${BASE_URL}/auth/reset`,
  },
  payment: {
    stripe: `${BASE_URL}/payment/stripe`,
    klarnaSession: `${BASE_URL}/payment/klarna-session`,
  },
  address: {
    all: `${BASE_URL}/user/addresses`,
    user: `${BASE_URL}/user/addresses`,
  },
  user: {
    update: `${BASE_URL}/user`,
  },
};
