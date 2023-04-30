import React from 'react';
import styled from 'styled-components';

type ColumnProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Wrapper_Column = ({ children, style }: ColumnProps) => {
  return <StWrapper style={style}>{children}</StWrapper>;
};

export default Wrapper_Column;

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
