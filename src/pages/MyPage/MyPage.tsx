import React from 'react';
import ColumnInput from '../../components/ColumnInput/ColumnInput';

const MyPage = () => {
  return (
    <>
      <ColumnInput types="maxInput" />
      <ColumnInput types="halfInput" Bgcolor="yellow" />
      <ColumnInput types="halfInput" />
      <ColumnInput types="buttonInput" />
      <ColumnInput types="validationInput" />
    </>
  );
};

export default MyPage;
