import styled from 'styled-components';
import { COLOR } from '../../styles/colors';

export const StInsideBlock = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const StUploadedFileBlock = styled.div`
  width: 100%;
  height: fit-content;
  line-height: 22px;
  display: flex;
  flex-direction: column;

  font-size: 12px;

  color: ${COLOR.PAGE_DONE};

  margin-bottom: 14px;

  cursor: pointer;

  &:hover .date {
    opacity: 1;
  }
`;

export const StNameDateBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StContentSpan = styled.span`
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis; // 넘치는 부분에 ... 처리
  white-space: nowrap; // 텍스트를 한 줄로 표시
  max-width: 100%;
`;

export const StDateSpan = styled.span`
  font-size: 9px;
  color: #ababab;
  opacity: 0;
  transition: opacity 0.4s ease;
`;
