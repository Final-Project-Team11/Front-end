import React from 'react';

const Dropdown = () => {
  const [dropdowm, setDropdowm] = React.useState(false);
  return (
    <>
      <ul>
        테스트 합니다. {'  '}
        {dropdowm ? '^' : 'v'}
      </ul>
    </>
  );
};

export default Dropdown;
