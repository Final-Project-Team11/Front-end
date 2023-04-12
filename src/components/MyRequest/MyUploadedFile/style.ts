import styled from 'styled-components';

export const StFileBlock = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StSpanBlock = styled.div`
  background-color: azure;
  width: 65%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 8px;
`;

export const StFileSpan = styled.span`
  font-size: 15px;
`;

export const StStatusBlock = styled.div`
  font-size: 25px;
  border-radius: 50%;
  margin-right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
