import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import { Spinner } from './Spinner';

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

const colorClassnames = {
  primary: `
    text-button bg-primary-500 
    hover:bg-primary-400 hover:-translate-y-0.5 hover:shadow-primary
    active:bg-primary-500
    focus:ring-2 ring-primary-500
    disabled:bg-primary-200 disabled:text-button disabled:shadow-none disabled:cursor-not-allowed`,
  success: `
    text-button bg-success
    hover:bg-success-400 hover:-translate-y-0.5 hover:shadow-success
    active:bg-success-500
    focus:ring-2 ring-success-500
    disabled:text-button disabled:bg-success-washed-out disabled:shadow-none disabled:cursor-not-allowed`,
  info: `
    text-info border-2 border-info
    hover:bg-info hover:-translate-y-0.5 hover:shadow-info hover:text-button
    active:bg-info-600 active:border-info-600
    focus:ring-2 ring-info-600
    disabled:text-info-200 disabled:bg-background disabled:border-info-200 disabled:shadow-none disabled:cursor-not-allowed`,
  danger: `
    text-danger border-2 border-danger
    hover:bg-danger hover:-translate-y-0.5 hover:shadow-danger hover:text-button
    active:bg-danger-600 active:border-danger-600 active:text-background
    focus:ring-2 ring-danger-500
    disabled:text-danger-washed-out disabled:bg-background disabled:border-danger-washed-out disabled:shadow-none disabled:cursor-not-allowed`,
  outline: `
    text-primary-500 border-2 border-primary-500 
    hover:bg-primary-500 hover:-translate-y-0.5 hover:shadow-primary hover:text-button 
    active:bg-primary-600 active:border-primary-600
    focus:ring-2 ring-primary-600
    disabled:text-primary-200 disabled:bg-background disabled:border-primary-200 disabled:shadow-none disabled:cursor-not-allowed`,
  transparent: `
    text-primary-500 bg-transparent border-2 border-transparent
    hover:underline
    active:bg-gray-100
    focus:ring-2
    disabled:text-primary-200 disabled:no-underline disabled:cursor-not-allowed`,

  primaryBoring: `
    text-button bg-primary-500 shadow
    hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-xl
    active:bg-primary-active 
    disabled:bg-primary-200 disabled:text-button disabled:shadow-none disabled:cursor-not-allowed`,
};

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  size?: keyof typeof sizeClassnames;
  color?: keyof typeof colorClassnames;
  rounding?: keyof typeof roundingClassnames;
  loading?: boolean;
  icon?: ReactNode;
  transition?: boolean;
  testId?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium',
  rounding = undefined,
  color = 'primary',
  disabled,
  loading,
  icon,
  className = '',
  transition = true,
  testId = 'button',
  ...props
}) => {
  return (
    <button
      disabled={disabled || loading}
      className={`${sizeClassnames[size]} ${roundingClassnames[rounding || size]} ${
        transition && !(disabled || loading)
          ? `transition transform-gpu duration-200 ease-in-out motion-reduce:transition-none motion-reduce:transform-none`
          : ``
      } ${colorClassnames[color]} font-bold flex items-center justify-center ${className}`}
      data-testid={testId}
      {...props}
    >
      <span className={loading ? 'opacity-0' : `flex items-center`}>
        {icon ? <span className={`mr-2 flex items-center`}>{icon}</span> : null}
        {children}
      </span>
      {loading ? (
        <span className={`absolute`}>
          <Spinner size={size === 'small' || size === 'tiny' ? '2' : '4'} />
        </span>
      ) : null}
    </button>
  );
};
