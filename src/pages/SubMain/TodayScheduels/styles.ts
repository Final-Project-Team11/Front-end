import styled from 'styled-components';
import { StylesProps } from './interfaces';

const StSpan = styled.span`
  display: inline-block;
`;

const StDateBlock = styled.div`
  margin-right: 40px;
  font-size: 15px;
  font-weight: bold;
  color: #484240;
  display: flex;
  gap: 3px;
`;

const StBlock = styled.div`
  margin-right: 40px;
`;

const StMarkBlock = styled.div<StylesProps>`
  width: 13px;
  height: 30px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : 'red'};
  border-radius: 13px;
  margin-left: 10px;
`;

const StScheduleBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #cccccc;

  padding: 15px 10px;
`;

const StWrap = styled.div`
  display: flex;
  flex: 1;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
`;

const StContainer = styled.div`
  width: 100%;
  margin-bottom: 100px;
  color: #484240;
`;

export {
  StSpan,
  StDateBlock,
  StBlock,
  StMarkBlock,
  StScheduleBlock,
  StWrap,
  StContainer,
};
