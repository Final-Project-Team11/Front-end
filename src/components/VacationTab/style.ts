import styled from 'styled-components';

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
