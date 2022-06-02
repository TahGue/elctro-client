import { useQuery } from 'react-query';

import Product from '../Product';

export const useFeaturedProducts = () => {
  const { data, isLoading, isError } = useQuery(
    'featuredProducts',
    Product.getFeatured
  );

  return {
    data,
    isLoading,
    isError,
  };
};
