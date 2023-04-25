import styled from 'styled-components';
import { COLOR } from '../../../styles/colors';

const DAY_WIDTH = 150;
const DAY_HEIGHT = 100;

interface CalendarProps {
  width: string;
}

const StWeek = styled.div<CalendarProps>`
  width: ${({ width }) => (width ? width : '14%')};
  height: 100%;
  text-align: center;
  color: ${COLOR.SCHEDULE_BLUE};
  font-weight: bold;
`;

const StContainer = styled.div<CalendarProps>`
  width: ${({ width }) => (width ? width + 'px' : '813px')};
  height: 116px;
`;

const StWeekBlock = styled.div`
  display: flex;
  padding-bottom: 5px;
`;

const StDateBlcok = styled.div`
  width: 100%;
  display: flex;
  padding: 5px 0;
  font-size: 12px;
  border-bottom: 1px solid ${COLOR.SCHEDULE_BLUE};
`;

interface EventProps {
  top?: string;
  width?: string;
  left?: string;
}

const StEventBlock = styled.div<EventProps>`
  position: absolute;
  width: ${({ width }) => (width ? width : '14%')};
  top: ${({ top }) => (top ? top : '14px')};
  left: ${({ left }) => (left ? left : '14%')};

  background-color: blue;
  color: white;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  padding: 5px;
  border-radius: 3px;
`;

const StEventContainer = styled.div`
  width: 100%;
`;

const StLine = styled.div`
  border-top: 1px solid ${COLOR.SCHEDULE_BLUE};
`;

export {
  StWeek,
  StContainer,
  StWeekBlock,
  StDateBlcok,
  StLine,
  StEventBlock,
  StEventContainer,
};
