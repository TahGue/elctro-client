import { useQuery } from 'react-query';
import Category from './Category';

type IProps = {
  slug: string | string[] | undefined;
};
export const useCategory = ({ slug }: IProps) => {
  return useQuery(['category', slug], () => Category.getBySlug(slug), {
    enabled: !!slug && slug !== '',
  });
};
