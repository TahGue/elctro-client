import React from 'react'
type Iprops = {
    value:string;
    onChange:(event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?:string;
    name:string;
    label:string;
    type?:string;
    required?:boolean;
}
const Textfield=({value,onChange,placeholder="",name,type="text",required=false,label}: Iprops) => {
  return (
    <div className='p-1 my-2 border rounded-sm' >
        <label htmlFor={name}>{label}</label>
        <h1>text</h1>
        <input id={name} className='p-1'  
          name={name}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          value={value}
        />
        </div>
  )
}

export default Textfield