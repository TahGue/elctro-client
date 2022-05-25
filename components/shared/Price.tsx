import React from 'react';

type IProps = {
  price: number;
  oldPrice?: number;
  currency: string;
};
function Price({ price, oldPrice, currency }: IProps) {
  return (
    <div className='flex items-center '>
      <span className='text-xl'>{`${price} ${currency}`}</span>
      {oldPrice && (
        <span className='line-through text-sm text-grey   m-2'>{`${oldPrice} ${currency}`}</span>
      )}
    </div>
  );
}

export default Price;
