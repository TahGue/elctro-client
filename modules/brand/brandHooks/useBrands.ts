import { useQuery } from 'react-query';
import Brand from './Brand';

export const useBrands = () => {
  const { data, isLoading, isError } = useQuery('brands', () => Brand.getAll());

  return {
    data,
    isLoading,
    isError,
  };
};
