import styled from 'styled-components';
import { COLOR } from '../../../styles/colors';

interface RequestStatus {
  types: 'submit' | 'accept' | 'deny';
}

export const StRequestedListBlock = styled.div<RequestStatus>`
  width: 100%;
  height: fit-content;
  line-height: 22px;
  display: flex;
  flex-direction: column;

  font-size: 12px;
  color: ${({ types }) => (types === 'submit' ? COLOR.PAGE_SPAN : COLOR.PAGE_DONE)};
  cursor: pointer;

  margin-bottom: 14px;

  &:hover .date {
    opacity: 1;
  }
`;

export const LoadingBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StNameDateDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StNameSpan = styled.span`
  white-space: nowrap;
  max-width: 100%;
`;

export const StDateSpan = styled.span`
  font-size: 9px;
  color: #ababab;
  opacity: 0;
  transition: opacity 0.4s ease;
`;

export const StContentSpan = styled.span`
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis; // 넘치는 부분에 ... 처리
  white-space: nowrap; // 텍스트를 한 줄로 표시
  max-width: 100%;
`;

// request.status가 deny 면 취소선 생기게
export const StRejectedSpan = styled.span<RequestStatus>`
  text-decoration: ${({ types }) => (types === 'deny' ? 'line-through' : null)};
`;
