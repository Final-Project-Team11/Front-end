import styled from 'styled-components';

export const StInsideBlock = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  gap: 20px;

  ::-webkit-scrollbar {
    display: none;
  }
`;
