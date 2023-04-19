import styled from 'styled-components';

export const Modal = styled.div`
  width: 1100px;
  height: 663px;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 73px;

  padding-left: 30px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  gap: 20px;
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

export const Devider = styled.hr`
  width: 95%;
  height: 1px;
  border: none;
  background-color: gray;
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
