import React, { ReactNode } from 'react';
import { useTypeSafeTranslation } from '../shared-hooks/useTypeSafeTranslation';

export interface DetailPanelProps extends React.ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  overlay?: ReactNode;
  isOpen?: boolean;
  actions?: ReactNode;
  onClose?: () => void;
}

const animationClassName =
  'transition transform duration-200 motion-reduce:transition-none motion-reduce:transform-none';

export const DetailPanel: React.FC<DetailPanelProps> = ({
  children,
  overlay,
  isOpen = false,
  actions,
  onClose,
  className,
  title,
  ...props
}) => {
  const { t } = useTypeSafeTranslation();
  return (
    <div
      className={`flex w-full pointer-events-none flex-grow justify-end fixed top-0 right-0 z-20
      ${animationClassName} 
      ${isOpen ? '' : 'translate-x-full'}
      `}
      data-testid="base-overlay"
      {...props}
    >
      {overlay}
      <div
        className={`bg-background shadow-aside flex flex-grow flex-col h-screen max-w-lg pointer-events-auto overflow-y-auto ${className}`}
        data-testid="detail-panel"
      >
        <div className="flex flex-row items-center justify-end text-gray-400 p-4 gap-2">{actions}</div>
        {children}
      </div>
    </div>
  );
};
