import React from 'react';
import * as interfaces from './interfaces';
import { StButton } from './styles';

const Button = ({
  boarder,
  background,
  size,
  color,
  borderRadius,
  children,
  onClick,
}: interfaces.ButtonProps) => {
  return (
    <StButton
      boarder={boarder}
      background={background}
      color={color}
      size={size}
      borderRadius={borderRadius}
      onClick={onClick}
    >
      {children}
    </StButton>
  );
};

export default Button;
