import React from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

type Iprops = {
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
};
const Textfield = ({
  value,
  onChange,
  placeholder = '',
  name,
  type = 'text',
  required = false,
  label,
}: Iprops) => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className='flex flex-col my-2'>
      <label>{label}</label>

      <div className='px-2 py-2 border border-grey rounded flex items-center'>
        <input
          id={name}
          className='border-none w-full'
          name={name}
          placeholder={placeholder}
          type={showPassword === true ? 'text' : type}
          onChange={onChange}
          value={value}
          required={required}
        />
        {type === 'password' && (
          <>
            <div
              className=' cursor-pointer'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword === true ? <FiEye /> : <FiEyeOff />}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Textfield;
