import { FC, ReactNode, useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import { ClickAway } from 'src/ui/ClickAway';

export type SelectType = {
  children: ReactNode;
  className?: string;
  modalClassName?: string;
  text?: string | ReactNode;
  textClassName?: string;
  textStyle?: any;
};

export const Select: FC<SelectType> = ({
  className,
  children,
  modalClassName,
  text,
  textClassName = '',
  textStyle,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`flex border p-2 border-secondary-washed-out rounded-8 ${className}`}>
      <ClickAway
        onClickAway={() => setOpen(false)}
        className="flex relative items-center w-full justify-between pl-2 pr-2 cursor-pointer"
      >
        <button className="flex relative items-center w-full justify-between" onClick={() => setOpen((op) => !op)}>
          <div style={textStyle} className={`text-lg w-full font-bold text-primary-400 ${textClassName}`}>
            {text}
          </div>

          {open ? <ChevronUp /> : <ChevronDown />}
        </button>
        {open && (
          <div
            className={`
              absolute left-0 top-10 w-full min-h-2lg max-h-96 overflow-auto bg-background
              border rounded-xl shadow-sm z-50
              ${modalClassName}
           `}
          >
            {children}
          </div>
        )}
      </ClickAway>
    </div>
  );
};
