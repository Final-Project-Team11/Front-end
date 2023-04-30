import styled from 'styled-components';

interface LabelProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  name?: string;
}

const CustomLabel = ({ style, children, name }: LabelProps) => {
  return (
    <StLabel style={style} name={name}>
      {children}
    </StLabel>
  );
};

export default CustomLabel;

const StLabel = styled.label<LabelProps>`
  font-size: 15px;
  font-weight: bolder;
  color: #484240;

  display: flex;
  flex-direction: column;
  gap: 15px;
`;
