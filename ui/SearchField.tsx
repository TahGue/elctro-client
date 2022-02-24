import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { Search } from 'react-feather';

const sizeClassnames = {
  large: 'py-3 px-8 text-lg',
  medium: 'py-2 px-4 text-sm ',
  small: 'py-1 px-2 text-sm',
  tiny: 'px-1 text-sm',
};

export type SearchFieldProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'size'
> & {
  size?: keyof typeof sizeClassnames;
  className?: string;
};

export const SearchField: React.FC<SearchFieldProps> = ({ className, size = 'medium', ...props }) => {
  return (
    <div className="flex flex-col justify-center border rounded-8 border-gray-100 flex-grow relative">
      <input
        className={`bg-white rounded-md focus:outline-none pl-10 ${sizeClassnames[size]} ${className}`}
        {...props}
      />
      <span className="absolute top-0 left-1 h-full flex justify-center items-center">
        <Search />
      </span>
    </div>
  );
};
