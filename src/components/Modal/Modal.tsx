import React, { ReactNode } from 'react';
import './Modal.scss';

interface IProps {
  className: string;
  children: ReactNode;
  isOpen: boolean;
}

export const Modal = ({ children, isOpen, className }: IProps) => {
  const fullClassName = [className, 'modal'].join(' ');

  return <>{isOpen ? <div className={fullClassName}>{children}</div> : null}</>;
};
