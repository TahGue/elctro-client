import { useQuery } from 'react-query';

import Product from '../../api/Product';

export const useLatestProducts = () => {
  const { data, isLoading, isError } = useQuery(
    'latestProducts',
    Product.getLatest
  );

  return {
    data,
    isLoading,
    isError,
  };
};
