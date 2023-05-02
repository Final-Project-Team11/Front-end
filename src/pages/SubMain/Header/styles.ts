import styled, { keyframes } from 'styled-components';
import { COLOR } from '../../../styles/colors';
import '@fontsource/inter';

interface StyleProps {
  tab?: boolean;
}

const StWrap = styled.div`
  display: flex;
  width: 1200px;
`;

const StCardBlock = styled.div<StyleProps>`
  opacity: 1;
  &:hover {
    opacity: 0.8;
  }
`;

const StContainer = styled.div<StyleProps>`
  width: 100%;
  border-bottom: 2px solid
    ${({ tab }) => (tab === false ? COLOR.SCHEDULE_BLUE : COLOR.VACATION_RED)};

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const StDateBlock = styled.div<StyleProps>`
  font-size: 66px;
  font-weight: 900;
  display: flex;
  align-items: center;
  color: ${({ tab }) => (tab === false ? COLOR.SCHEDULE_BLUE : COLOR.VACATION_RED)};
  padding-bottom: 23px;
  margin-left: 50px;
  gap: 14px;
`;

const StYearBlock = styled.div`
  line-height: 56px;
  width: 180px;
`;

const StMonthBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 56px;
  gap: 27.5px;
  width: 200px;
`;

const StMonth = styled.div`
  text-align: center;
  width: 100px;
`;

const StColorList = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 17px;
  margin-right: 12px;
  gap: 10px;
`;

const StColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 28px;
`;

interface ColorBlockProps {
  backgroundColor?: string;
  color?: string;
}

const StColorBlock = styled.div<ColorBlockProps>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : 'red'};
  width: 10px;
  height: 15px;
`;

const StColorNameBlock = styled.div`
  font-size: 10px;
  font-weight: 600;
`;

const StNoneBlock = styled.div`
  width: 110px;
  height: 30px;
  box-shadow: 0 4px 4px rgba(201, 201, 201, 0.25);
  font-size: 11px;
  border: none;
  background: #eaeaea;
`;

const StTeamBlock = styled.div`
  width: 130px;
  height: 30px;
  margin-bottom: 17px;
  display: flex;
  justify-content: center;
`;

const StTabBlock = styled.div`
  margin-bottom: -10px;
  animation: slide 2s ease-out;

  cursor: pointer;
`;

const StTodayButton = styled.button`
  border: none;
  background-color: transparent;
  text-align: center;
  cursor: pointer;
  width: 30px;
  height: 40px;
  margin-bottom: -15px;
  position: absolute;
  z-index: 200;
`;

const StButtonIconBlock = styled.div`
  position: relative;
  width: 30px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -10px;
`;

const StButton = styled.button<StyleProps>`
  border: none;
  background-color: white;
  font-size: 20px;
  color: ${({ tab }) => (tab === false ? COLOR.SCHEDULE_BLUE : COLOR.VACATION_RED)};
  cursor: pointer;
  opacity: 1;
  &:hover {
    opacity: 0.5;
  }

  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StLogout = styled.div`
  font-size: 12px;
  border: none;
  background: transparent;
  text-align: center;
  cursor: pointer;
  width: 50px;
  color: #dddddd;

  &:hover {
    color: #b3b3b3;
  }
  position: absolute;
  top: -40px;
  left: 1px;
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
  StButton,
  StTabBlock,
  StNoneBlock,
  StLogout,
  StMonth,
  StTodayButton,
  StButtonIconBlock,
};
