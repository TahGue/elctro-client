import React from 'react';
import Button from '../../../ui/Button';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi';

type IProps = {
  value: number;
  changeCount: (c: number) => void;
};
function CountChanger({ value, changeCount }: IProps) {
  return (
    <div className='flex justify-between items-center h-8'>
      <div className='h-full'>
        <Button
          onClick={() => {
            changeCount(value - 1);
          }}
        >
          <HiMinusSm />
        </Button>
      </div>
      <span className='mx-2 h-full'>
        <input
          className=' h-full focus:border-grey text-center'
          value={value}
          onChange={(e) => changeCount(parseInt(e.target.value) || 1)}
        />
      </span>
      <div className='h-full'>
        <Button
          onClick={() => {
            changeCount(value + 1);
          }}
        >
          <HiPlusSm />
        </Button>
      </div>
    </div>
  );
}

export default CountChanger;
