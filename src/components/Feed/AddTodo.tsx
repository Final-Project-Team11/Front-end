import React from 'react';
import * as UI from './style';

const AddTodo = () => {
  return (
    <UI.Todo>
      <UI.TodoBox>
        <UI.Circle />
        <UI.TodoInput type="text" maxLength={10} />
      </UI.TodoBox>
    </UI.Todo>
  );
};

export default AddTodo;
