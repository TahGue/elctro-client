import React from 'react';
import { Check } from 'react-feather';

const colors = {
  primary: 'text-primary-500 ',
  secondary: 'text-secondary-washed-out',
  success: 'text-success-500',
  info: 'text-info-500',
};

const hoverColors = {
  primary: 'bg-primarys-100',
  secondary: 'bg-secondary-100',
  gray: 'bg-gray-100',
  info: 'bg-info-100',
};

interface CheckboxProps extends React.ComponentPropsWithoutRef<'input'> {
  label?: string;
  rounded?: boolean;
  color?: keyof typeof colors;
  hoverColor?: keyof typeof hoverColors;
  containerClassName?: string;
}

// eslint-disable-next-line react/display-name
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      type = 'checkbox',
      name,
      label,
      checked = false,
      onChange,
      children,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <div className='hover:bg-gray-100 rounded-md cursor-pointer'>
        <label
          className='relative text-left flex flex-row cursor-pointer py-2 truncate text-md text-gray-700 gap-2 items-center select-none group'
          htmlFor={name}
        >
          <input
            className='absolute opacity-0 h-6 w-6 appearance-none cursor-pointer'
            id={name}
            type={type}
            name={name}
            checked={checked}
            ref={forwardedRef}
            onChange={onChange}
            aria-labelledby={name}
            {...props}
          />

          <div
            className={`h-6 w-6 mx-2 border-gray-300 rounded-md truncate transform-gpu transition duration-300 ${
              checked
                ? 'border-transparent bg-primary-500 group-hover:bg-primary-600'
                : 'border-2 group-hover:scale-110'
            }`}
          >
            <Check
              className={`text-background ${
                checked ? 'opacity-100' : 'opacity-0 '
              }`}
            />
          </div>

          {children}
          {label}
        </label>
      </div>
    );
  }
);
