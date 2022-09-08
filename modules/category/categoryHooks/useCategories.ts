import { useQuery } from 'react-query';
import Category from './Category';
import { Category as CategoryType } from '../../../types/DBTypes';
export const useCategories = () => {
  const { data, isLoading, isError } = useQuery<CategoryType[]>(
    'categories',
    Category.getAll
  );

  return {
    data,
    isLoading,
    isError,
  };
};
