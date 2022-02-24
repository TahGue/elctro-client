import React, { ReactNode } from 'react';
import * as Icons from 'react-feather';
import { BoxedIcon } from './BoxedIcon';
import { Overlay } from './Overlay';

export type IconName = keyof typeof Icons;

export type IconProps = {
  name: IconName;
};

const colorClassNames = {
  primary: 'text-primary-500',
  secondary: 'text-secondary',
  success: 'text-success',
  danger: 'text-danger',
};
const roundingClassnames = {
  large: 'rounded-lg',
  medium: 'rounded-md',
  small: 'rounded-md',
  tiny: 'rounded-5',
  round: 'rounded-full',
};
const sizeClassnames = {
  large: 'w-24 h-24 -mt-16 ',
  medium: 'w-20 h-20 -mt-14 ',
  small: 'w-16 h-16 -mt-12 ',
  tiny: 'w-14 h-14 -mt-11 ',
  none: '',
};
const iconSizes = {
  large: 50,
  medium: 40,
  small: 24,
  tiny: 15,
  none: 0,
};
const titleFontSizes = {
  large: 'text-4xl',
  medium: 'text-2xl',
  small: 'text-xl',
  tiny: 'text-lg',
};

export type DialogProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  iconName?: IconName;
  color?: keyof typeof colorClassNames;
  round?: keyof typeof roundingClassnames;
  size?: keyof typeof sizeClassnames;
  title?: string;
  className?: string;
};

export const Dialog: React.FC<DialogProps> = ({
  open = true,
  size = 'medium',
  color = 'primary',
  children,
  iconName,
  onClose,
  ...props
}) => {
  const renderIcon = () => {
    if (!iconName) {
      return null;
    }
    const IconComponent = iconName ? Icons[iconName] : null;
    return (
      IconComponent && (
        <div
          className={`flex justify-center items-center absolute rounded-full shadow bg-background ${sizeClassnames[size]}`}
        >
          <IconComponent className={`${colorClassNames[color]}`} size={iconSizes[size]} />
        </div>
      )
    );
  };

  return (
    <Overlay open={open} onClose={onClose} {...props}>
      <div className="max-w-5xl flex justify-center">
        {renderIcon()}

        <BoxedIcon onClick={onClose} className="absolute cursor-pointer top-5 right-5">
          <Icons.X />
        </BoxedIcon>

        {children}
      </div>
    </Overlay>
  );
};
