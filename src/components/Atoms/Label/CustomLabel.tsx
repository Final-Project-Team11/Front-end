import styled from 'styled-components';

interface LabelProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  className?: string;
  id?: string;
  name?: string;
}

const CustomLabel = ({ style, children, id, name, className }: LabelProps) => {
  return (
    <StLabel style={style} className={className} id={id} name={name}>
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
