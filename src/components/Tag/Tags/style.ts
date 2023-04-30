import styled from 'styled-components';
import { COLOR } from '../../../styles/colors';

interface BlockProps {
  isChecked: boolean;
}

interface SpanProps {
  types: 'MyPage' | 'ManagerPage';
}

export const StTagsBlock = styled.div<BlockProps>`
  width: 100%;
  height: fit-content;

  overflow-x: hidden;

  margin-bottom: 7px;
  line-height: 20px;

  color: ${({ isChecked }) => (isChecked ? COLOR.PAGE_DONE : COLOR.PAGE_SPAN)};
  font-weight: ${({ isChecked }) => (isChecked ? 'lighter' : 'bold')};
`;

export const StContentSpan = styled.span<SpanProps>`
  font-size: ${({ types }) => (types === 'MyPage' ? '15px' : '14px')};

  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis; // 넘치는 부분에 ... 처리
  white-space: nowrap; // 텍스트를 한 줄로 표시
  max-width: 100%;
  vertical-align: middle;

  cursor: pointer;
`;

// 일정 폭 넘어가면 ... 표시
export const StTitleSpan = styled.span`
  display: inline-block;
  max-width: calc(8 * 1em);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
`;
