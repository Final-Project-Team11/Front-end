import React from 'react';
import Modal from '../../components/Modal/Modal';

const Login = () => {
  const [open, setOepn] = React.useState(false);
  const openModal = () => {
    setOepn(true);
  };
  const closeModal = () => {
    setOepn(false);
  };

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
    </>
  );
};

export default Login;
