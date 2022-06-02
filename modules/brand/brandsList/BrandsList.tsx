import React from 'react';
import { useBrands } from '../brandHooks/useBrands';
import { Brand } from '../../../types/DBTypes';
import BrandItem from './BrandItem';

type IProps = {
  selectedBrands: Brand[];
  onSelect: (brand: Brand) => void;
};
export default function BrandsList({ selectedBrands, onSelect }: IProps) {
  const { data } = useBrands();

  return (
    <div className=' max-h-52 overflow-auto'>
      {data?.map((brand: Brand) => (
        <BrandItem
          onSelect={onSelect}
          key={brand.id}
          brand={brand}
          selected={!!selectedBrands?.find((c) => c?.id === brand?.id)}
        />
      ))}
    </div>
  );
}
