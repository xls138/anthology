import type { PropsWithChildren } from 'react';
import { variants, type CalloutVariants } from './callout-variants';

type CalloutProps = PropsWithChildren<{ title: string }> & CalloutVariants;

export const Callout = ({ title, children, variant }: CalloutProps) => (
  <div className={variants({ variant })}>
    <h2 className="font-semibold">{title}</h2>
    <p>{children}</p>
  </div>
);
