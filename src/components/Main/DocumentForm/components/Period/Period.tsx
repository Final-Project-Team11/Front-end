import React from 'react';
import styled from 'styled-components';

interface PeriodProps {
  start: Date | undefined;
  end: Date | undefined;
}

const Period = (props: PeriodProps) => {
  const start = props.start && new Date(props.start);
  const end = props.end && new Date(props.end);

  return (
    <StPeriodBlock>
      <span>{start?.getFullYear()}</span>
      <span>/</span>
      <span>{start && start?.getMonth() + 1}</span>
      <span>/</span>
      <span>{start?.getDate()}</span>
      {Number(end?.getDate()) - Number(start?.getDate()) > 0 && (
        <>
          <span>-</span>
          <span>{end?.getFullYear()}</span>
          <span>/</span>
          <span>{end && end?.getMonth() + 1}</span>
          <span>/</span>
          <span>{end?.getDate()}</span>
        </>
      )}
    </StPeriodBlock>
  );
};

export default Period;

const StPeriodBlock = styled.div`
  display: flex;
  gap: 3px;
  font-weight: bold;
`;
