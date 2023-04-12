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

export const StTodoAreaBlock = styled.div<TodoBoxStProps>`
  display: flex;
  align-items: center;

  margin: 3px 0 3px 0;

  font-size: 15px;
  color: ${({ isDone }) => (isDone ? 'green' : 'red')};
`;

export const StTodoInput = styled.input`
  width: 60%;
  margin-right: 25%;
  border: 0.5px solid green;
  font-size: 16px;
`;

export const StCircleBlock = styled.div`
  background-color: green;

  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 10px;
`;
