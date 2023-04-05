import * as interfaces from './interfaces';
import { StButton } from './styles';

const Button = ({
  boarder,
  background,
  size,
  color,
  children,
}: interfaces.ButtonProps) => {
  return (
    <StButton boarder={boarder} background={background} color={color} size={size}>
      {children}
    </StButton>
  );
};

export default Button;
