import styled from 'styled-components';
import { COLOR } from '../../../constants/colors';
import '@fontsource/inter';

interface StyleProps {
  tab?: number;
}

const StWrap = styled.div`
  display: flex;
  gap: 25px;
`;

const StCardBlock = styled.div<StyleProps>`
  margin-right: '30px';
  width: 310px;
  height: 100px;
  background-color: ${({ tab }) =>
    tab === 0 ? COLOR.SCHEDULE_BLUE : COLOR.VACATION_RED};
`;
const StContainer = styled.div<StyleProps>`
  width: 100%;
  border-bottom: 2px solid
    ${({ tab }) => (tab === 0 ? COLOR.SCHEDULE_BLUE : COLOR.VACATION_RED)};

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const StDateBlock = styled.div<StyleProps>`
  font-size: 66px;
  font-weight: 900;
  display: flex;
  color: ${({ tab }) => (tab === 0 ? COLOR.SCHEDULE_BLUE : COLOR.VACATION_RED)};
  padding-bottom: 5px;
`;

const StYearBlock = styled.div``;

const StMonthBlock = styled.div``;

const StColorList = styled.div`
  display: flex;
  gap: 15px;
  padding-bottom: 5px;
`;

const StColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

interface ColorBlockProps {
  backgroundColor?: string;
}

const StColorBlock = styled.div<ColorBlockProps>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : 'red'};
  width: 10px;
  height: 15px;
`;

const StColorNameBlock = styled.div`
  font-size: 9px;
  font-weight: 600;
`;

const StTeamBlock = styled.div`
  width: 100px;
  height: 30px;
  background-color: lightgray;
  margin-left: 30px;
`;
export {
  StWrap,
  StCardBlock,
  StContainer,
  StDateBlock,
  StYearBlock,
  StMonthBlock,
  StColorBlock,
  StColorContainer,
  StColorNameBlock,
  StColorList,
  StTeamBlock,
};
