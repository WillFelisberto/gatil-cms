'use client';

import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'light' | 'dark';

type ButtonProps = {
  children: string | ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
  size?: 'default' | 'sm' | 'lg' | 'icon';
  'data-testid'?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  variant = 'dark',
  icon,
  className,
  size = 'default',
  'data-testid': testId,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={props.type || 'button'}
      className={clsx(
        'flex items-center justify-center gap-2 cursor-pointer px-6 py-2 rounded-full font-bold transition-colors duration-200 text-sm md:text-base',
        variant === 'dark' && 'bg-blue-950 text-white hover:bg-blue-950/90',
        variant === 'light' && 'bg-blue-300 text-white hover:bg-blue-400',
        size === 'default' && 'h-10 px-4 py-2',
        size === 'sm' && 'h-9 rounded-md px-3',
        size === 'lg' && 'h-11 rounded-md px-8',
        size === 'icon' && 'h-10 w-10',
        className
      )}
      data-testid={testId}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="w-5 h-5">{icon}</span>}
    </button>
  );
};
