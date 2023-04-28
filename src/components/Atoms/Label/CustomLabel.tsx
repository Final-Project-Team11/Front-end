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
  margin-bottom: 15px;
  font-size: 15px;
  font-weight: bolder;
  color: #484240;
`;
