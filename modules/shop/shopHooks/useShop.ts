import { Category, Brand } from '../../../types/DBTypes';
import { useQuery } from 'react-query';
import { useEffect } from 'react';
import ShopApi from './ShopApi';

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
      ShopApi.getShop({
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
