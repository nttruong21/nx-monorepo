import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

export const Button: FC<
  PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...buttonProps }) => {
  return <button {...buttonProps}>{children}</button>;
};
