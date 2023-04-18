import styled from 'styled-components';

interface RequestStatus {
  types: 'submit' | 'accept' | 'deny';
}

export const StRequestedBlock = styled.div`
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

export const StRequestedListBlock = styled.div`
  /* background-color: yellow; */
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  /* overflow-x: hidden; */
  gap: 2px;
`;

export const StNameDateBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const StNameDateDiv = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

export const StNameSpan = styled.span`
  font-size: 15px;
  white-space: nowrap;
  max-width: 100%;
`;

export const StContentSpan = styled.span`
  font-size: 15px;
  line-height: 22px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis; // 넘치는 부분에 ... 처리
  white-space: nowrap; // 텍스트를 한 줄로 표시
  max-width: 100%;
`;

export const StDateSpan = styled.span`
  font-size: 13px;
  color: gray;
`;

export const StCircleBlock = styled.div<RequestStatus>`
  color: ${({ types }) =>
    types === 'submit'
      ? null
      : types === 'accept'
      ? 'blue'
      : types === 'deny'
      ? 'red'
      : null};
`;
