import React from 'react';
import styled from 'styled-components';

type RowProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Wrapper_Row = ({ children, style }: RowProps) => {
  return <StWrapper style={style}>{children}</StWrapper>;
};

export default Wrapper_Row;

const StWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
