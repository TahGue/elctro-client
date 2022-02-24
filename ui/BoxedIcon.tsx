import React from 'react';

const colorMap = {
  transparent: 'bg-transparent',
  '700': 'bg-primary-700',
  '800': 'bg-primary-800',
};

export interface BoxedIconProps extends React.ComponentPropsWithoutRef<'button'> {
  circle?: boolean;
  transition?: boolean;
  hover?: boolean;
  color?: keyof typeof colorMap;
}

export const BoxedIcon = React.forwardRef<HTMLButtonElement, BoxedIconProps>(
  (
    { color = 'transparent', children, className = '', circle = false, transition = true, hover = true, ...props },
    ref
  ) => {
    return (
      <button
        className={`flex ${colorMap[color]} ${transition ? `transition transform-gpu` : ``} ${
          hover ? `hover:bg-gray-100 active:bg-gray-50 hover:-translate-y-0.5` : ``
        } h-8 w-8 cursor-pointer justify-center items-center text-gray-300 hover:text-gray-700 ${
          circle ? `rounded-full` : `rounded-md`
        }
        ${className}`}
        data-testid="boxed-icon"
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
