import styled from 'styled-components';
import { COLOR } from '../../styles/colors';

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

  gap: 14px;
`;

export const StTitleIconBlock = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  gap: 13px;

  padding-bottom: 10px;
  box-sizing: border-box;

  border-bottom: 1px solid ${COLOR.PAGE_BLUE};
`;

export const StTitleSpan = styled.span`
  color: ${COLOR.PAGE_DONE};
`;

export const StInsideBlock = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
