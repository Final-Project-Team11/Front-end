import React from 'react';
import Modal from '../../components/Modal/Modal';
import Dropdown from '../../components/Dropdown/Dropdown';

const Login = () => {
  const [open, setOepn] = React.useState(false);
  const openModal = () => {
    setOepn(true);
  };
  const closeModal = () => {
    setOepn(false);
  };

  const items: string[] = ['item1', 'item2', 'item3'];

  return (
    <>
      <button
        onClick={() => {
          openModal();
        }}
      >
        테스트
      </button>
      {open && (
        <Modal size="small" closeModal={closeModal}>
          테스트
        </Modal>
      )}
      <Dropdown items={items} size="medium">
        드롭
      </Dropdown>
    </>
  );
};

export default Login;
