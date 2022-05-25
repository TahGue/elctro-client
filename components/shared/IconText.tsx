import React from 'react';

type IProps = {
  Icon: React.ReactNode;
  text: string;
  className?: string;
};
function IconText({ Icon, text, className }: IProps) {
  return (
    <div
      className={`flex items-center p-2 text-primary hover:text-grey transition cursor-pointer
      ${className}
      `}
    >
      <span className='m-2'>{Icon}</span>
      <span>{text}</span>
    </div>
  );
}

export default IconText;
