// rface
import * as interfaces from './interfaces';
import { StTextArea } from './styles';

const TextArea = ({
  inputSize,
  color,
  background,
  border,
  children,
  type,
  name,
  value,
  required,
  placeholder,
}: interfaces.TextAreaProps) => {
  return (
    <label>
      <p>{children}</p>
      <StTextArea
        inputSize={inputSize}
        color={color}
        background={background}
        border={border}
        // type={type}
        name={name}
        value={value}
        required={required}
        placeholder={placeholder}
      />
    </label>
  );
};

export default TextArea;
