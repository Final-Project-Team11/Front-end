// rface
import * as interfaces from './interfaces';
import { StTextArea } from './styles';

const TextArea = ({
  inputSize,
  color,
  background,
  border,
  children,
  name,
  value,
  required,
  placeholder,
  onChange,
}: interfaces.TextAreaProps) => {
  return (
    <label htmlFor="TextArea">
      <p>{children}</p>
      <StTextArea
        inputSize={inputSize}
        color={color}
        background={background}
        border={border}
        name={name}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        id="TextArea"
      />
    </label>
  );
};

export default TextArea;
