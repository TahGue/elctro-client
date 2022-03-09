import Tippy, { TippyProps } from '@tippyjs/react/headless';
import React from 'react';
import { Placement } from 'tippy.js';

const colorClassnames = {
  light: 'bg-background text-gray-500 shadow-md',
  dark: 'bg-gray-900 text-background shadow-md',
};

const sizeClassnames = {
  medium: 'text-sm p-2 font-bold rounded-md',
  small: 'text-xs px-2 py-1 font-bold rounded-lg',
};

export interface TooltipProps extends React.ComponentPropsWithoutRef<'div'> {
  size?: keyof typeof sizeClassnames;
  color?: keyof typeof colorClassnames;
  content?: React.ReactNode;
  children?: React.ReactNode;
}

type TippyAttributes = {
  'data-placement': Placement;
  'data-reference-hidden'?: string;
  'data-escaped'?: string;
};

export const Tooltip: React.FC<TooltipProps & TippyProps> = ({
  size = 'small',
  color = 'dark',
  className = '',
  content,
  children,
  ...props
}) => {
  const contentToRender = Array.isArray(content)
    ? content.map((item, index) => (
        <p key={index} className="flex-1">
          {item}
        </p>
      ))
    : content;
  //
  return (
    <Tippy
      render={(attrs: TippyAttributes) => (
        <div
          tabIndex={-1}
          className={`flex flex-col ${sizeClassnames[size]} ${colorClassnames[color]} ${className}`}
          {...attrs}
        >
          {contentToRender}
        </div>
      )}
      {...props}
    >
      {children}
    </Tippy>
  );
};
