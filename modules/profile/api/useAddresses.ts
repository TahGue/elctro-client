import { useQuery, useMutation } from 'react-query';
import Profile from './Profile';


export const useAddresses = () => {
  return useQuery(['address'], () => Profile.getAddress());

}
export const useSaveAddresses = () => {
  return useMutation( Profile.saveAddress);
  
}