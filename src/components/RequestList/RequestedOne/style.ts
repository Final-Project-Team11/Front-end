import styled from 'styled-components';
import { COLOR } from '../../../constants/colors';

interface RequestStatus {
  types: 'submit' | 'accept' | 'deny';
}

export const StRequestedListBlock = styled.div<RequestStatus>`
  width: 100%;
  height: fit-content;
  line-height: 22px;
  display: flex;
  align-items: center;

  font-size: 12px;
  color: ${({ types }) => (types === 'submit' ? COLOR.PAGE_SPAN : COLOR.PAGE_DONE)};

  margin-bottom: 14px;

  &:hover .date {
    opacity: 1;
  }
`;

export const StLeftBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
  align-items: center;
  gap: 10px;
  width: 100%;
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

export const StRejectedSpan = styled.span`
  text-decoration: line-through;
`;
