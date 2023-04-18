import styled from 'styled-components';
import { COLOR } from '../../constants/colors';

interface HeightProps {
  types?: 'MyPage' | 'ManagerPage';
}

export const StTabBlock = styled.div<HeightProps>`
  width: 260px;
  height: ${({ types }) => (types === 'MyPage' ? '700px' : '340px')};

  display: flex;
  flex-direction: column;

  font-size: 15px;

  padding: 15px;
  box-sizing: border-box;

  gap: 10px;

  border: 1px solid orange;
`;

export const StInsideBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 19px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const StDivederHr = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: ${COLOR.PAGE_BLUE};
`;

export const StTitleSpan = styled.span`
  color: ${COLOR.PAGE_DONE};
  font-size: 13px;
  margin-top: 2.5px;
`;

export const StIconBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
