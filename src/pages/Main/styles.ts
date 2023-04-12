import styled from 'styled-components';
import { COLOR } from '../../constants/colors';

interface StyleProps {
  tab: number;
}

const StWrap = styled.div`
  margin: 50px 360px 0;
  display: flex;
  flex-direction: column;
`;

const StTabButton = styled.button<StyleProps>`
  width: 90px;
  height: 30px;
  border: none;
  border-bottom: 1px solid black;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${({ tab }) =>
    tab === 0 ? COLOR.SCHEDULE_RED : COLOR.VACATION_BLUE};

  opacity: 1;
  &:hover {
    opacity: 0.6;
  }
`;

const StButtonBlcok = styled.div`
  display: flex;
  gap: 1px;
`;

export { StWrap, StTabButton, StButtonBlcok };
