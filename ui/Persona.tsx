import React from 'react';
import 'tippy.js/dist/tippy.css'; // optional
import { getColorByString } from '../lib/getColorByString';
import { getFullName } from '../lib/getFullName';
import { getInitials } from '../lib/getInitials';
import { User } from '../types/generated';
import { Tooltip } from './Tooltip';

const colors = {
  primary: 'primary',
  success: 'success',
  info: 'info',
  warning: 'warning',
  danger: 'danger',
};

const gradients = {
  primary: 'bg-gradient-to-br from-primary-500 to-primary-400',
  success: 'bg-gradient-to-br from-success-500 to-success-400',
  info: 'bg-gradient-to-br from-info-500 to-info-400',
  warning: 'bg-gradient-to-br from-warning-500 to-warning-400',
  danger: 'bg-gradient-to-br from-danger-500 to-danger-400',
};

const sizes = {
  tiny: 'h-6 w-6 text-xs',
  medium: 'h-10 w-10 text-sm',
};

export interface PersonaProps extends React.ComponentPropsWithoutRef<'div'> {
  user?: User;
  transition?: boolean;
  hover?: boolean;
  seed?: number;
  size?: keyof typeof sizes;
  showTooltip?: boolean;
  tooltipColor?: 'light' | 'dark' | undefined;
  title?: string;
  text?: string;
  color?: keyof typeof colors;
}

export const Persona: React.FC<PersonaProps> = ({
  className = '',
  transition = true,
  seed = 0,
  size = 'tiny',
  user,
  showTooltip = true,
  tooltipColor,
  title,
  text,
  color,
  ...props
}) => {
  const fullName = user ? getFullName([user]) : text;
  const initials = user ? getInitials(user) : title;
  const derivedColor = user ? getColorByString(user?.id ?? '', seed) : color;
  const gradient = derivedColor ? gradients[derivedColor] : '';

  if (!showTooltip) {
    return (
      <div
        className={`flex p-3.5 ${sizes[size]} mr-1
        ${gradient}
        cursor-default justify-center items-center rounded-full
        text-button font-bold 
        ${transition ? `transition duration-200 ease-in-out` : ``} 
        ${className}`}
        data-testid="persona"
        {...props}
      >
        {initials}
      </div>
    );
  }

  return (
    <Tooltip content={fullName} color={tooltipColor}>
      <div
        className={`flex p-3.5 ${sizes[size]} mr-1
        ${gradient}
        cursor-default justify-center items-center rounded-full
        text-button font-bold 
        ${transition ? `transition duration-200 ease-in-out` : ``} 
        ${className}`}
        data-testid="persona"
        {...props}
      >
        {initials}
      </div>
    </Tooltip>
  );
};
