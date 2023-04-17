import styled from 'styled-components';

interface StatusProps {
  status: 'submit' | 'accept' | 'deny';
}

export const StFileBlock = styled.div`
  /* background-color: yellow; */
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 19px;
`;

export const StNameDateBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StSpanBlock = styled.div`
  /* background-color: azure; */
  width: 100%;
  /* height: 100%; */

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 8px;
`;

export const StFileSpan = styled.span`
  font-size: 15px;
`;

export const StStatusBlock = styled.div<StatusProps>`
  font-size: 25px;
  border-radius: 50%;
  margin-left: 10px;

  color: ${({ status }) =>
    status === 'submit'
      ? 'gray'
      : status === 'accept'
      ? 'green'
      : status === 'deny'
      ? 'red'
      : null};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StDateSpan = styled.span`
  font-size: 13px;
  color: gray;
`;
