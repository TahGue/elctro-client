import React from 'react';

export interface OverlayProps extends React.ComponentPropsWithoutRef<'div'> {
  open: boolean;
  disableBackdropClick?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

export const Overlay: React.FC<OverlayProps> = ({
  children,
  open = false,
  onClose,
  disableBackdropClick,
  className = '',
  ...props
}) => {
  /*  */
  return (
    <>
      <div
        className={`
        bg-gray-900 overflow-hidden flex items-center justify-center text-button z-10
        ${open ? '' : 'pointer-events-none'}
        ${open ? 'opacity-80' : 'opacity-0'}
        transition-all duration-200 ease-in-out
        h-full w-full
        top-0 left-0 fixed
         `}
        onClick={onClose}
        {...props}
      />

      {open ? (
        <div
          className={`z-50
            fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
            ${open ? 'opacity-100' : 'opacity-0'} ${className}`}
        >
          {children}
        </div>
      ) : null}
    </>
  );
};
