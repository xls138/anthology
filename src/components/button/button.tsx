import { ComponentProps } from 'react';
import clsx from 'clsx';

import styles from './button.module.css';

export type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'destructive';
};

export const Button = ({ variant = 'primary', ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles.secondary]: variant === 'secondary',
        [styles.destructive]: variant === 'destructive',
      })}
      {...props}
    />
  );
};
