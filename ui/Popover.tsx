import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Popover as TinyPopover, PopoverProps } from 'react-tiny-popover';

export type Props = {
  isOpen?: boolean;
  content?: ReactElement;
  className?: string;
};

export const Popover: FC<Props & Omit<PopoverProps, 'isOpen'>> = React.forwardRef(
  ({ className, children = null, content, isOpen, ...props }, ref) => {
    const [visible, setVisible] = useState(false);
    const hide = () => setVisible(false);
    const toggle = () => setVisible((prev) => !prev);

    useEffect(() => {
      () => hide();
    }, []);

    if (!children) {
      return null;
    }

    return (
      <TinyPopover
        reposition={false}
        content={() => (
          <div
            tabIndex={-1}
            className={`flex flex-col bg-background shadow-lg rounded-lg ${className} p-2 animate-fade-in-down`}
          >
            {content}
          </div>
        )}
        onClickOutside={hide}
        padding={5}
        align="end"
        {...props}
        isOpen={isOpen ?? visible}
        ref={ref}
      >
        <button onClick={toggle}>{children}</button>
      </TinyPopover>
    );
  }
);
/*   return (
    <div className={`flex p-2 rounded-8 ${className}`}>
      <BoxedIcon>
        <MoreHorizontal />
      </BoxedIcon>
      <ClickAway
        onClickAway={() => setOpen(false)}
        className="flex relative items-center w-full justify-between pl-2 pr-2 cursor-pointer"
      >
        <button className="flex relative items-center w-full justify-between" onClick={() => setOpen((op) => !op)}>
          <p className="text-lg w-full font-bold text-primary-400">{text}</p>

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
}; */
