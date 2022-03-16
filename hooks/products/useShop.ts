import { Category, Brand } from './../../types/DBTypes';
import { useQuery } from 'react-query';
import Product from '../../api/Product';
import { useEffect } from 'react';

type IProps = {
  categories: number[];
  brands: number[];
  searchText: string;
  page: number;
  priceRange: {
    min: number;
    max: number;
  };
};
export const useShop = ({
  categories,
  brands,
  searchText,
  priceRange,
  page,
}: IProps) => {
  const { data, isLoading, isError, refetch } = useQuery(
    ['shopProducts', categories, brands, priceRange, page, searchText],
    () =>
      Product.getShop({
        categories,
        brands,
        priceRange,
        searchText,
        page,
      }),
    {}
  );

  return {
    data,
    isLoading,
    isError,
    refetch,
  };
};
