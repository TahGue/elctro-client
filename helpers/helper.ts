import { CartProduct } from './../types/DBTypes';

export const calculatePrice = (products: CartProduct[]) => {
  return products.reduce((total, product) => {
    return total + product.count * product.price;
  }, 0);
};
