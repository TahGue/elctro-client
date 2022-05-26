import { useQuery } from 'react-query';
import Product from '../Product';

type IProps = {
  slug: string | string[] | undefined;
};
export const useProduct = ({ slug }: IProps) => {
  return useQuery(['product', slug], () => Product.getBySlug(slug as string), {
    enabled: !!slug && slug !== '',
  });
};
