import { StModal, StModalBackground } from './styles';
import { useEffect } from 'react';
import ReactDom from 'react-dom';

export interface ModalProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  name?: string;
  closeModal: () => void;
  disableClickOutside?: boolean;
}

const CustomModal = ({
  style,
  children,
  name,
  closeModal,
  disableClickOutside,
}: ModalProps) => {
  // esc키 입력 시 모달 닫힘 함수
  const keyDown = (e: KeyboardEvent) => {
    if (e.keyCode === 27) {
      closeModal();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', keyDown);

    document.body.style.cssText = `
    position: fixed;
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;
  `;

    return () => {
      document.removeEventListener('keydown', keyDown);
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  const modalContent = (
    <>
      <StModalBackground onClick={disableClickOutside ? undefined : () => closeModal()} />
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
