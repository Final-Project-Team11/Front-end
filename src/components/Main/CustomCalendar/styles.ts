import styled from 'styled-components';

const DAY_WIDTH = 150;
const DAY_HEIGHT = 100;

const Styear = styled.div`
  font-size: 80px;
  width: 50px;
  text-align: left;
  color: #e64042;
  font-weight: 900;
  margin-bottom: -30px;
`;

const StMonth = styled.div`
  font-size: 80px;
  width: 50px;
  display: flex;
  color: #e64042;
  font-weight: 900;
`;

const StTitleDateBlock = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const StWeek = styled.div`
  width: ${DAY_WIDTH}px;
  height: 30px;
  text-align: center;
  border-top: 5px solid #e64042;
  padding-top: 20px;
  color: #e64042;
  font-weight: bold;
`;

const StWeekdayBlock = styled.div`
  width: ${DAY_WIDTH}px;
  height: ${DAY_HEIGHT}px;
  text-align: center;
  border: none;
`;

const StContainer = styled.div`
  padding: 20px 20px;
  border: 1px solid rgba(128, 128, 128, 0.267);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const StTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Stpagination = styled.div``;

const StWeekBlock = styled.div`
  display: flex;
`;

const StDateBlcok = styled.div`
  width: 1050px;
  display: flex;
  flex-wrap: wrap;
`;

export {
  Styear,
  StMonth,
  StTitleDateBlock,
  StWeek,
  StWeekdayBlock,
  StContainer,
  StTitle,
  Stpagination,
  StWeekBlock,
  StDateBlcok,
};
