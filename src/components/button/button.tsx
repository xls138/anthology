import { ComponentProps } from 'react';

import { variants, type ButtonVariants } from './button-variants';

export type ButtonProps = ComponentProps<'button'> &
  ButtonVariants & {
    variant?: 'primary' | 'secondary' | 'destructive';
    size?: 'small' | 'medium' | 'large';
  };

export const Button = ({ variant = 'primary', size = 'medium', ...props }: ButtonProps) => {
  return <button {...props} className={variants({ variant, size })} />;
};
