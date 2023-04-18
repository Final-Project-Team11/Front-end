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

  // modal-root 요소를 찾습니다.
  const root = document.getElementById('root');

  // Modla-root 요소가 없을 경우
  if (!root) {
    // 새로운 div 요소를 생성합니다.
    const newRoot = document.createElement('div');

    // // 생성한 div 요소에 id를 'modal-root'로 설정합니다.
    // newRoot.setAttribute('id', 'modal-root');

    // 생성한 div 요소를 문서의 body에 추가합니다.
    document.body.appendChild(newRoot);
    // 생성한 div 요소에 Portal을 렌더링합니다.
    return ReactDom.createPortal(modalContent, newRoot);
  } else {
    // modal-root 요소가 있는 경우, 해당 요소에 Portal을 렌더링합니다.
    return ReactDom.createPortal(modalContent, root);
  }
};

export default Modal;
