import styled, { css } from 'styled-components';
import { WeedayCssProps } from './inferfaces';

interface DayProps {
  width: string;
}

const StWeekdayBlock = styled.div<DayProps>`
  width: ${({ width }) => (width ? width : '14%')};
  height: 90px;
  text-align: center;
  border: none;
`;

const StScheduleblock = styled.div<WeedayCssProps>`
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 1px;
  padding-left: 5px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : 'white'};

  height: 20px;
  border-radius: 4px;

  position: absolute;
  left: 30%;

  /* ${({ isStart }) =>
    isStart &&
    css`
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    `}

  ${({ isEnd }) =>
    isEnd &&
    css`
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    `} */
`;

const StSpan = styled.span`
  display: inline-block;
  width: 100%;
  padding-bottom: 5px;
`;
export { StWeekdayBlock, StScheduleblock, StSpan };
