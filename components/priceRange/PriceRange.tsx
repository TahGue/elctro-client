import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

type IProps = {
  value: number[];
  onChange: (a: any) => void;
  min?: number;
  max?: number;
};
function PriceRange({ value, onChange, min = 0, max = 100 }: IProps) {
  return (
    <div className='p-2'>
      <Slider
        range
        allowCross={false}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
      <div className='flex justify-between pt-1'>
        <span className=' text-grey'>{min}</span>
        <span>{value && value[0]}</span>
        <span>{value && value[1]}</span>
        <span className=' text-grey'>{max}</span>
      </div>
    </div>
  );
}

export default PriceRange;
