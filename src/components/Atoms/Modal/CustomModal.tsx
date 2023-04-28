import { StModal, StModalBackground } from './styles';
import { useEffect } from 'react';
import ReactDom from 'react-dom';

export interface ModalProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  name?: string;
  closeModal: () => void;
}

const CustomModal = ({ style, children, name, closeModal }: ModalProps) => {
  // esc키 입력 시 모달 닫힘 함수
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
      <StModalBackground onClick={() => closeModal()} />
      <StModal name={name} style={style}>
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

export default CustomModal;
