import * as interfaces from './interfaces';
import { StModal, StModalBackground } from './styles';
import { useEffect } from 'react';
import ReactDom from 'react-dom';

const Modal = ({
  children,
  size,
  background,
  name,
  closeModal,
  style = {},
}: interfaces.ModalProps) => {
  const keyDown = (e: KeyboardEvent) => {
    if (e.keyCode === 27) {
      closeModal();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', keyDown);
    return () => {
      document.removeEventListener('keydown', keyDown);
    };
  }, []);

  const modalContent = (
    <>
      <StModalBackground
        background={background}
        onClick={() => closeModal()}
      ></StModalBackground>
      <StModal size={size} name={name} style={style}>
        {children}
      </StModal>
    </>
  );

  const root = document.getElementById('root');

  if (!root) {
    const newRoot = document.createElement('div');
    document.body.appendChild(newRoot);
    return ReactDom.createPortal(modalContent, newRoot);
  } else {
    return ReactDom.createPortal(modalContent, root);
  }
};

export default Modal;
