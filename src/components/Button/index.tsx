import React, {ButtonHTMLAttributes} from 'react';

import * as S from './styles';

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'smallest' | 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'transparent';
  icon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
} & ButtonTypes;

export default function Button({
  children,
  size = 'small',
  color = 'primary',
  fullWidth = false,
  icon,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${S.button({size, color, fullWidth})} ${className}`}
      {...props}
    >
      {!!icon && <div className={S.icon({hasMargin: !!children})}>{icon}</div>}
      {!!children && <span>{children}</span>}
    </button>
  );
}
