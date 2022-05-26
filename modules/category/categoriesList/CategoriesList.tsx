import React from 'react';
import { Category } from '../../../types/DBTypes';
import { useCategories } from '../categoryHooks/useCategories';
import CategoryItem from './CategoryItem';

type IProps = {
  selectedCategories: Category[];
  onSelect: (category: Category) => void;
};
export default function CategoriesList({
  selectedCategories,
  onSelect,
}: IProps) {
  const { data } = useCategories();

  return (
    <div className=' max-h-52 overflow-auto'>
      {data?.map((category: Category) => (
        <CategoryItem
          onSelect={onSelect}
          key={category.id}
          category={category}
          selected={!!selectedCategories?.find((c) => c?.id === category?.id)}
        />
      ))}
    </div>
  );
}
