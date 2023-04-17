import styled from 'styled-components';
import { TagBlockCssProps } from './interfaces';

export const StTagBlock = styled.div<TagBlockCssProps>`
  display: flex;
  flex-direction: column;

  width: 260px;
  height: ${({ types }) => (types === 'MyPage' ? '700px' : '340px')};

  padding: 15px;
  box-sizing: border-box;

  gap: 20px;

  border: 1px solid orange;
`;

export const StDeviderBlock = styled.div`
  width: 100%;
  height: 0;
  border: 1px solid orange;
`;

export const StFeedBlock = styled.div`
  /* background-color: green; */
  width: 100%;
  height: 100%;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
