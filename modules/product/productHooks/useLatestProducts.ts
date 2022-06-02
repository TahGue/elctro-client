import { useQuery } from 'react-query';

import Product from '../Product';

export const useLatestProducts = () => {
  const { data, isLoading, isError } = useQuery('latestProducts', () =>
    Product.getLatest(20)
  );

  return {
    data,
    isLoading,
    isError,
  };
};
