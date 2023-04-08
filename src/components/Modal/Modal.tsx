import * as interfaces from './interfaces';
import { StModal, StModalBackground } from './styles';
import { useEffect } from 'react';

const Modal = ({
  children,
  size,
  background,
  backgroundColor,
  border,
  name,
  closeModal,
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

  return (
    <>
      <StModalBackground
        background={background}
        onClick={() => closeModal()}
      ></StModalBackground>
      <StModal size={size} backgroundColor={backgroundColor} border={border} name={name}>
        {children}
      </StModal>
    </>
  );
};

export default Modal;
