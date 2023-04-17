import styled from 'styled-components';

export const StRequestBlock = styled.div`
  display: flex;
  flex-direction: column;

  width: 260px;
  height: 340px;

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

export const StUploadedFileBlock = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
