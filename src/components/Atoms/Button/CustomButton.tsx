import React from 'react';
import { StButton } from './style';

export interface ButtonProps {
  buttonType:
    | 'login'
    | 'signup'
    | 'Detail'
    | 'ModalButton'
    | 'valid'
    | 'submit'
    | 'cUser'
    | 'blackBackground'
    | 'cardDetail'
    | 'home';
  type?: 'submit' | 'button';
  id?: string;
  name?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;

  onClick?: React.MouseEventHandler<HTMLButtonElement> | (() => void);
}

const CustomButton = ({
  id,
  name,
  children,
  style,
  onClick,
  buttonType,
  type,
}: ButtonProps) => {
  return (
    <StButton
      buttonType={buttonType}
      id={id}
      name={name}
      style={style}
      onClick={onClick}
      type={type}
    >
      {children}
    </StButton>
  );
};

export default CustomButton;
