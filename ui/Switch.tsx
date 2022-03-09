import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
import { Spinner } from './Spinner';

const colorClassNames = {
  primary: 'bg-primary-500',
  success: 'bg-success',
  danger: 'bg-danger',
};

const sizeClassnames = {
  large: 'w-14 h-6',
  medium: 'w-10 h-4',
  small: 'w-6 h-2',
  tiny: 'w-4 h-2',
};

const indecatorSizeClassnames = {
  large: 'w-8 h-8 -left-1 -top-1',
  medium: 'w-6 h-6 -left-1 -top-1',
  small: 'w-4 h-4 -left-1 -top-1',
  tiny: 'w-4 h-4 -left-1 -top-1',
};

const indecatorTranslateClassnames = {
  large: 'translate-x-8',
  medium: 'translate-x-5',
  small: 'translate-x-4',
  tiny: 'translate-x-2',
};

export type Input = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'onChange' | 'size'
> & {
  size?: keyof typeof sizeClassnames;
  color?: keyof typeof colorClassNames;
  loading?: boolean;
  disabled?: boolean;
  testId?: string;
  checked?: boolean;
  onChange?: any;
  className?: string;
};

export const Switch: FC<Input> = ({
  size = 'medium',
  color = 'primary',
  disabled = false,
  loading = false,
  checked = false,
  onChange,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`
        flex items-center justify-center 
        w-full h-full
        ${disabled && 'opacity-50'}
        ${className}
    `}
    >
      <div
        onClick={() => {
          !disabled && !loading && onChange(!checked);
        }}
        className={`
          relative
          flex justify-center items-center
          ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
          ${loading ? ' cursor-wait ' : 'cursor-pointer'}
          `}
      >
        <input checked={checked} type="checkbox" className="opacity-0 absolute" onChange={onChange} {...props} />
        <div
          className={`${sizeClassnames[size]}
           rounded-full shadow-inner
           opacity-25
           transition
           ${checked ? colorClassNames[color] : 'bg-gray-500'}
           `}
        ></div>
        <div
          className={` 
            absolute 
            flex justify-center items-center
            transform rounded-full shadow transition
            text-button
            ${indecatorSizeClassnames[size]}
            ${checked ? colorClassNames[color] : 'bg-gray-500'}
            ${checked && indecatorTranslateClassnames[size]}
            `}
        >
          {loading && <Spinner size={size === 'small' || size === 'tiny' ? '2' : '4'} />}
        </div>
      </div>
    </div>
  );
};
