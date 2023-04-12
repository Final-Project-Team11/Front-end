import styled from 'styled-components';
import { COLOR } from '../../../constants/colors';

interface StyleProps {
  tab?: number;
}

const StWrap = styled.div`
  display: flex;
`;

const StCardBlock = styled.div<StyleProps>`
  margin-right: '30px';
  width: 350px;
  height: 100px;
  background-color: ${({ tab }) =>
    tab === 0 ? COLOR.SCHEDULE_RED : COLOR.VACATION_BLUE};
`;
const StContainer = styled.div<StyleProps>`
  width: 100%;
  height: 100px;
  border-bottom: 3px solid
    ${({ tab }) => (tab === 0 ? COLOR.SCHEDULE_RED : COLOR.VACATION_BLUE)};
`;

const StDateBlock = styled.div<StyleProps>`
  font-size: 50px;
  font-weight: bold;
  display: flex;
  color: ${({ tab }) => (tab === 0 ? COLOR.SCHEDULE_RED : COLOR.VACATION_BLUE)};
`;

const StYearBlock = styled.div`
  margin: 50px 0;
`;

const StMonthBlock = styled.div`
  margin: 50px 0;
`;

export { StWrap, StCardBlock, StContainer, StDateBlock, StYearBlock, StMonthBlock };
