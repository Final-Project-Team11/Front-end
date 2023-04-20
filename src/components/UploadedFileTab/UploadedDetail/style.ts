import styled from 'styled-components';
import { COLOR } from '../../../styles/colors';

interface DeviderProps {
  positions: 'Header' | 'Footer';
}

export const Modal = styled.div`
  width: 1100px;
  height: 663px;

  display: flex;
  flex-direction: column;

  box-shadow: rgba(15, 19, 24, 0.27) 0 4px 30px 8px;
`;

export const Header = styled.div`
  /* background-color: yellow; */
  width: 100%;
  height: 73px;

  padding: 0 30px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  gap: 20px;

  position: relative;
`;

export const HeaderIcon = styled.div`
  background-color: black;
  width: 11px;
  height: 26px;

  border-radius: 13px;
`;

export const TitleSpan = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

export const Devider = styled.hr<DeviderProps>`
  width: 95%;
  height: 1px;
  border: none;
  background-color: gray;
  position: absolute;
  bottom: ${({ positions }) => (positions === 'Footer' ? '50px' : '-5px')};
  left: 27.5px;
`;

export const ContentArea = styled.div`
  width: 100%;
  height: 467px;

  padding: 76px;
  box-sizing: border-box;
`;

export const ContentSpan = styled.span`
  font-size: 15px;
`;

export const Footer = styled.div`
  width: 100%;
  height: 120px;

  display: flex;
  flex-direction: column;
  position: relative;
`;

export const FooterHalf = styled.div`
  height: 50%;

  padding-left: 30px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  gap: 15px;
`;

export const FooterSpanBlock = styled.div`
  background-color: gray;

  color: white;
  height: 26px;

  padding: 0 15px;
  box-sizing: border-box;

  display: flex;
  align-items: center;

  border-radius: 13px;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  width: 70px;
  height: 26px;

  font-size: 10px;
  color: ${COLOR.PAGE_BLUE};

  border: 1px solid ${COLOR.PAGE_BLUE};
  border-radius: 19px;
  margin-left: auto;
`;
