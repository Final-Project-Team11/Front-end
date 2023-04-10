import styled from 'styled-components';

export const StUploadedBlock = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 15px;

  width: 260px;
  height: 220px;

  padding: 15px;
  box-sizing: border-box;

  gap: 20px;

  border: 1px solid orange;
  overflow: scroll;
`;

export const StDeviderBlock = styled.div`
  width: 100%;
  height: 0;
  border: 1px solid orange;
`;

export const StUploadedFileBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StContentSpan = styled.span`
  font-size: 15px;
`;
