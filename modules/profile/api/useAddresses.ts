import { useQuery } from 'react-query';
import Profile from './Profile';


export const useAddresses = () => {
  return useQuery(['address'], () => Profile.getAddress());
};