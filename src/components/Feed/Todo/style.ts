import styled from 'styled-components';
import { TodoBoxStProps } from './interfaces';

export const StTodoBlock = styled.div`
  width: 100%;
  height: 30px;

  padding-left: 10px;
  padding-right: 10px;

  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StTodoAreaBlock = styled.div`
  display: flex;
  align-items: center;

  margin: 3px 0 3px 0;

  font-size: 15px;
`;

export const StTodoInput = styled.input`
  width: 60%;
  margin-right: 25%;
  border: 0.5px solid #dc3232;
  border-radius: 5px;
  font-size: 16px;
`;

export const StCircleBlock = styled.div<TodoBoxStProps>`
  background-color: ${({ isDone }) => (isDone ? '#dc3232' : null)};

  border: 1px solid ${({ isDone }) => (isDone ? '#dc3232' : '#dc3232')};

  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
`;

export const StTestDeleteBlock = styled.div`
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export interface SentTodo {
  categoryId: number;
  content: {
    content: string;
  };
}
