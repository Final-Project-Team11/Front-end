import styled from 'styled-components';
import { TodoBoxStProps } from './interfaces';
import { COLOR } from '../../../styles/colors';

export const StTodoBlock = styled.div`
  width: 100%;
  height: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover .deleteBlock {
    opacity: 1;
  }
`;

export const StTodoAreaBlock = styled.div`
  width: fit-content;
  max-width: 140px;

  display: flex;
  align-items: center;

  gap: 6px;
  font-size: 12px;
`;

export const StTodoSpan = styled.span`
  color: ${COLOR.PAGE_SPAN};
`;

export const StTodoInput = styled.input`
  width: 60%;
  margin-right: 25%;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  outline: none;
`;

export const StCircleBlock = styled.div<TodoBoxStProps>`
  background-color: ${({ isDone }) => (isDone ? COLOR.PAGE_BLUE : 'white')};

  border: 1px solid ${({ isDone }) => (isDone ? COLOR.PAGE_BLUE : COLOR.PAGE_LIGHTBLUE)};

  width: 12px;
  height: 12px;
  border-radius: 50%;
  cursor: pointer;
`;

export const StTestDeleteBlock = styled.div`
  opacity: 0;
  font-size: 12px;
  color: ${COLOR.PAGE_DONE};
  transition: opacity 0.3s ease;
  &:hover {
    cursor: pointer;
  }
`;
