import styled from 'styled-components';

export const StModalBackground = styled.div`
  z-index: 1500;

  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.8);
`;

interface CssProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  className?: string;
  id?: string;
  name?: string;
}

export const StModal = styled.div<CssProps>`
  z-index: 2000;

  width: 100px;
  height: 100px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
