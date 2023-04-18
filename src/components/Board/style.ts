import styled from 'styled-components';
import { COLOR } from '../../constants/colors';

interface HeightProps {
  types?: 'MyPage' | 'ManagerPage';
}

export const StTabBlock = styled.div<HeightProps>`
  width: 260px;
  height: ${({ types }) => (types === 'MyPage' ? '700px' : '351px')};

  display: flex;
  flex-direction: column;

  padding: 15px;
  box-sizing: border-box;

  gap: 4px;
`;

export const StDivederHr = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: ${COLOR.PAGE_BLUE};
`;

export const StIconBlock = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  gap: 13px;
`;

export const StTitleSpan = styled.span`
  color: ${COLOR.PAGE_DONE};
  font-size: 13px;
  margin-top: 2.5px;
`;
