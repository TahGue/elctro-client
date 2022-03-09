import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { Search, X } from 'react-feather';

const sizeClassnames = {
  large: 'py-3 px-3 text-lg',
  medium: 'py-3 px-3 text-m ',
  small: 'px-2 py-1 text-sm',
  tiny: 'px-1 text-sm',
};

const roundingClassnames = {
  large: 'rounded-lg',
  medium: 'rounded-md',
  small: 'rounded-md',
  tiny: 'rounded-5',
  round: 'rounded-full',
};
const iconSizeClassNames = {
  large: 20,
  medium: 16,
  small: 12,
  tiny: 10,
};

export type TextProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'size'> & {
  size?: keyof typeof sizeClassnames;
  inputSize?: keyof typeof sizeClassnames;
  rounding?: keyof typeof roundingClassnames;
  placeholder?: string;
  loading?: boolean;
  onResetSearch: () => void;
};

export const SearchField: React.FC<TextProps> = ({
  size = 'medium',
  rounding = 'large',
  placeholder,
  disabled = false,
  loading = false,
  className,
  type = 'text',
  value,
  onResetSearch,
  ...props
}) => {
  return (
    <div
      className={`
      relative group focus:outline-none inline-block
      `}
    >
      <input
        type="text"
        className={`
         ${sizeClassnames[size]} 
         ${roundingClassnames[rounding]}
         form-checkbox
          transiation
          border border-secondary-washed-out
          focus:outline-none focus:border-primary-700 focus:ring-primary-700 focus:ring-1
          hover:border-secondary
          placeholderColor:${disabled && 'text-secondary-washed-out'}
          ${(disabled || loading) && 'text-secondary-washed-out hover:border-secondary-washed-out cursor-not-allowed '}
          ${className}
  `}
        disabled={disabled || loading}
        placeholder={placeholder || ''}
        value={value}
        {...props}
      />
      <div className={` absolute flex content-between top-0 right-1 h-full items-center`}>
        {value !== '' && (
          <button onClick={onResetSearch} className={`cursor-pointer`}>
            <X
              size={iconSizeClassNames[size]}
              className={` 
                transition
                text-secondary-washed-out 
                group-hover:text-secondary`}
            />
          </button>
        )}

        <span className="">
          <Search
            size={iconSizeClassNames[size]}
            className={`
            transition
            text-secondary-washed-out 
            group-hover:text-secondary
            group-focus:text-primary-500`}
          />
        </span>
      </div>
    </div>
  );
};
