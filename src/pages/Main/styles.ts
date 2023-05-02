import styled from 'styled-components';
import { COLOR } from '../../styles/colors';

interface StyleProps {
  tab: boolean;
}

const StWrap = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;
`;

const StTabButton = styled.button<StyleProps>`
  width: 90px;
  height: 30px;
  border: none;
  border-bottom: 1px solid black;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${({ tab }) =>
    tab === false ? COLOR.SCHEDULE_BLUE : COLOR.VACATION_RED};

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
