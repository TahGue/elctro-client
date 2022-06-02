import React from 'react';

const sizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  lg: 'text-lg',
  xl: 'text-xl',
};
type IProps = {
  price: number;
  oldPrice?: number;
  currency: string;
  size?: keyof typeof sizes;
};
function Price({ price, oldPrice, currency, size = 'xl' }: IProps) {
  return (
    <div className={`flex items-center ${sizes[size]}`}>
      <span>{`${price} ${currency}`}</span>
      {oldPrice && (
        <span className='line-through text-grey  m-2'>{`${oldPrice} ${currency}`}</span>
      )}
    </div>
  );
}

export default Price;
