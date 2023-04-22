import {
  StCheckButton,
  StColumnBlock,
  StColumnInput,
  StInputButtonBlock,
  StInputLabel,
} from './style';
import { InputProps } from './interfaces';

const ButtonInput = ({
  types,
  children,
  Bgcolor,
  buttonTag,
  name,
  type,
  onClick,
  placeholder,
  inputId,
  value,
  onChange,
  style,
  buttonStyle,
}: InputProps) => {
  return (
    <StColumnBlock style={style}>
      <StInputLabel htmlFor={inputId}>{children}</StInputLabel>
      <StInputButtonBlock>
        <StColumnInput
          id={inputId}
          types={types}
          type={type}
          Bgcolor={Bgcolor}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
        />
        <StCheckButton onClick={onClick} type="button" style={buttonStyle}>
          {buttonTag}
        </StCheckButton>
      </StInputButtonBlock>
    </StColumnBlock>
  );
};

export default ButtonInput;
