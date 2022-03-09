import React, { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

const sizeClassnames = {
  large: 'py-3 px-8 text-lg',
  medium: 'py-3 px-6 text-m ',
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

const variants = {
  standard: 'standard',
  outline: 'outline',
};

export type TextFieldProps = Omit<
  DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
  'size'
> & {
  size?: keyof typeof sizeClassnames;
  inputSize?: keyof typeof sizeClassnames;
  rounding?: keyof typeof roundingClassnames;
  placeholder?: string;
  loading?: boolean;
  label?: string;
  variant?: keyof typeof variants;
  containerClassName?: string;
  labelClassName?: string;
  error?: boolean;
};

export const Textarea: React.FC<TextFieldProps> = ({
  disabled = false,
  loading = false,
  className,
  containerClassName,
  variant = 'standard',
  label,
  placeholder = ' ',
  error = false,
  labelClassName = '',
  ...props
}) => {
  return (
    <div
      className={`group relative flex  focus-within:border-primary-500
      ${variant === 'outline' ? 'outline border-2 rounded-lg' : 'border-b-2'}
      ${containerClassName}
      ${disabled && 'border-gray-200'}
      ${error && 'border-danger'}
      ${!disabled && !error && 'border-gray-300'}
      `}
    >
      <textarea
        name={label}
        className={`flex
        w-full appearance-none focus:outline-none bg-transparent
        ${variant === 'outline' && 'p-3'}
        resize-none
        ${disabled ? 'text-gray-300' : 'text-gray-700'}
        placeholderColor:text-gray-300
        ${className}`}
        disabled={disabled || loading}
        placeholder={placeholder}
        {...props}
      />

      <label
        htmlFor={label}
        className={`
        group-focus:text-primary-500
        w-auto absolute -top-4 left-3 pl-1 pr-1 bg-background 
        origin-0 transition-all duration-200 ease-in-out pointer-events-none truncate
        ${labelClassName}
        ${variant === 'outline' && 'rounded-full'}
         
        `}
      >
        {label}
      </label>
    </div>
  );
};
