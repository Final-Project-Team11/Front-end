import styled from 'styled-components';
import { COLOR } from '../../../styles/colors';

interface StatusProps {
  status: 'submit' | 'accept' | 'deny';
}

export const StFileBlock = styled.div<StatusProps>`
  width: 100%;
  height: fit-content;
  line-height: 22px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;

  font-size: 12px;
  cursor: pointer;

  color: ${({ status }) => (status === 'submit' ? COLOR.PAGE_SPAN : COLOR.PAGE_DONE)};

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

export const StSpanBlock = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const StNameDateBlock = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

export const StFileSpan = styled.span``;

export const StDateSpan = styled.span`
  font-size: 9px;

  opacity: 0;

  transition: opacity 0.4s ease;
  color: #ababab;
`;

export const StStatusBlock = styled.div<StatusProps>`
  font-size: 21px;
  border-radius: 50%;
  margin-left: 10px;

  color: ${({ status }) => (status === 'submit' ? COLOR.PAGE_SPAN : COLOR.PAGE_DONE)};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StRejectedSpan = styled.span`
  text-decoration: line-through;
`;
