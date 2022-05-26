import { useQuery } from 'react-query';
import Brand from './Brand';

type IProps = {
  slug: string | string[] | undefined;
};
export const useBrand = ({ slug }: IProps) => {
  return useQuery(['brand', slug], () => Brand.getBySlug(slug), {
    enabled: !!slug && slug !== '',
  });
};
