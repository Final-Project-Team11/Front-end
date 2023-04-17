import styled from 'styled-components';

export const StVacationTabBlock = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 15px;

  width: 260px;
  height: 340px;

  padding: 15px;
  box-sizing: border-box;

  gap: 15px;

  border: 1px solid orange;
`;

export const StInsideBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const StDeviderBlock = styled.div`
  width: 100%;
  height: 0;
  border: 1px solid orange;
`;
