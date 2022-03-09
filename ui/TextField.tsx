import React from 'react';
type Iprops = {
  value: string;
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
  return (
    <div className='flex flex-col my-2'>
      <label>{label}</label>

      <input
        id={name}
        className='px-2 py-2 border border-grey rounded'
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Textfield;
