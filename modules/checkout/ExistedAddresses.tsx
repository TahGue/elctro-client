import React from 'react';
import { useAddress } from './hooks/useAddresses';
import { Address } from '../../types/DBTypes';
import CircleLoader from '../../components/loaders/CircleLoader';
import { BsCheckCircle, BsCircle } from 'react-icons/bs';

type Iprops = {
  onSelect: (a: Address) => void;
  selected: Address | null;
};
function ExistedAddresses({ onSelect, selected }: Iprops) {
  const { data, isLoading } = useAddress();

  if (isLoading) return <CircleLoader />;
  const onSelectAddress = (address: Address) => {
    onSelect(address);
  };

  return (
    <>
      {data?.map((address: Address) => (
        <div
          onClick={() => onSelectAddress(address)}
          className='flex flex-row items-center cursor-pointer'
          key={address.id}
        >
          {selected?.id === address.id ? (
            <BsCheckCircle className='text-green-500' />
          ) : (
            <BsCircle className='text-grey-500' />
          )}
          <span>{address.street}</span>
          <span>{address.postcode}</span>
        </div>
      ))}
    </>
  );
}

export default ExistedAddresses;
