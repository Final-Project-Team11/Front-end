import styled, { css } from 'styled-components';
import { WeedayCssProps } from './inferfaces';

const StWeekdayBlock = styled.div`
  width: 150px;
  height: 100px;
  text-align: center;
  border: none;
`;

const StScheduleblock = styled.div<WeedayCssProps>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : 'white'};

  height: 20px;

  ${({ isStart }) =>
    isStart &&
    css`
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    `}

  ${({ isEnd }) =>
    isEnd &&
    css`
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    `}
`;
export { StWeekdayBlock, StScheduleblock };
