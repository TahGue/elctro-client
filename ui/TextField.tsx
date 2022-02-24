import React, { InputHTMLAttributes, TextareaHTMLAttributes, useState } from 'react';
import { Eye, EyeOff } from 'react-feather';

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
const iconSizeClassNames = {
  large: 20,
  medium: 16,
  small: 12,
  tiny: 10,
};

const variants = {
  standard: 'standard',
  outline: 'outline',
};

export interface TextareaAutosizeProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'children' | 'rows'> {
  maxRows?: string | number;
  minRows?: string | number;
}

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'children' | 'rows'> {}

export type BaseInput = {
  size?: keyof typeof sizeClassnames;
  inputSize?: keyof typeof sizeClassnames;
  rounding?: keyof typeof roundingClassnames;
  placeholder?: string;
  loading?: boolean;
  label?: string;
  variant?: keyof typeof variants;
  containerClassName?: string;
  error?: boolean;

  type?: string;
  className?: string;
  cols?: number;
  rows?: number;
  multiline?: boolean;
};

export type TextFieldProps = (TextareaAutosizeProps & InputProps) & BaseInput;

export const TextField = React.forwardRef<HTMLTextAreaElement & HTMLInputElement, TextFieldProps>(
  (
    {
      size = 'medium',
      disabled = false,
      loading = false,
      className,
      containerClassName,
      variant = 'standard',
      label,
      placeholder = ' ',
      type = 'text',
      error = false,
      multiline = false,
      capture,
      ...props
    },
    ref
  ) => {
    const [displayPassword, setDisplayPassword] = useState(false);

    const inputComponent = multiline ? (
      <textarea
        name={label}
        className={`flex
      w-full appearance-none focus:outline-none bg-transparent
      ${variant === 'outline' && 'p-3'}
      ${disabled ? 'text-gray-300' : 'text-gray-700'}
      placeholderColor:text-gray-300
      ${className}`}
        disabled={disabled || loading}
        placeholder={placeholder}
        rows={5}
        ref={ref}
        {...props}
      />
    ) : (
      <input
        name={label}
        className={`flex
      w-full appearance-none focus:outline-none bg-transparent
      ${variant === 'outline' && 'p-3'}
      ${disabled ? 'text-gray-300' : 'text-gray-700'}
      placeholderColor:text-gray-300
      ${className}`}
        disabled={disabled || loading}
        placeholder={placeholder}
        type={type === 'password' && displayPassword === true ? 'text' : type}
        ref={ref}
        {...props}
      />
    );
    return (
      <div
        className={`relative flex group focus-within:border-primary-500
      ${variant === 'outline' ? 'outline border-2 rounded-lg' : 'border-b-2'}
      ${containerClassName}
      ${disabled && 'border-gray-200'}
      ${error && 'border-danger'}
      ${!disabled && !error && 'border-gray-300'}
      `}
      >
        {inputComponent}
        <label
          htmlFor={label}
          className={`
        w-full absolute top-0 origin-0 transition-all duration-200 ease-in-out pointer-events-none truncate
        ${variant === 'outline' && 'p-3 rounded-full'}
        ${disabled && 'text-gray-300'}
        ${error && 'text-danger'}
        ${!disabled && !error && 'text-gray-400'}
        ${type === 'password' && 'pr-8'}
        `}
        >
          {label}
        </label>

        {type === 'password' && (
          <span
            onClick={() => !disabled && setDisplayPassword(!displayPassword)}
            className={`
          absolute right-1 text-gray-300
          ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
          `}
          >
            {displayPassword === true ? (
              <EyeOff
                size={iconSizeClassNames[size]}
                className={`${disabled ? 'text-gray-200' : 'group-hover:text-primary-500'}`}
              />
            ) : (
              <Eye
                className={`${disabled ? 'text-gray-200' : 'group-hover:text-primary-500'}`}
                size={iconSizeClassNames[size]}
              />
            )}
          </span>
        )}
      </div>
    );
  }
);
