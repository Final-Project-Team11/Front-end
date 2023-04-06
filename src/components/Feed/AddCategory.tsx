import React from 'react';
import * as UI from './style';

const AddCategory = () => {
  return (
    <UI.CategoryInputBox>
      <UI.Circle />
      <UI.CategoryInput type="text" maxLength={10} />
    </UI.CategoryInputBox>
  );
};

export default AddCategory;
