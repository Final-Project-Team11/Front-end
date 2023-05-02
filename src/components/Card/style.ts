import styled, { css } from 'styled-components';
import { COLOR } from '../../styles/colors';

interface CardStyleProps {
  tab?: boolean;
}

interface TextStyle {
  bolder?: 'bolder';
  reviseSpan?: boolean;
}

export const StCardBlock = styled.div<CardStyleProps>`
  ${({ tab }) =>
    tab === false
      ? css`
          background-color: ${COLOR.SCHEDULE_BLUE};
        `
      : tab === true
      ? css`
          background-color: ${COLOR.VACATION_RED};
        `
      : css`
          background-color: ${COLOR.PAGE_LIGHTBLUE};
        `};

  width: 250px;
  height: 116px;

  min-width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 19px;
  box-sizing: border-box;

  box-shadow: rgba(212, 229, 249, 1) 0px 1px 9px -1px;
  text-shadow: 0px 1px 4px rgba(148, 177, 211, 0.94);
`;

export const StInfoBlock = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;

  color: white;

  gap: 18px;
`;

export const StDateBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const StInfoSpan = styled.span<TextStyle>`
  font-size: 15px;
  font-weight: ${({ bolder }) => (bolder ? bolder : null)};
  ${({ reviseSpan }) =>
    reviseSpan &&
    css`
      width: 100%;
      display: flex;
      align-items: center;
      gap: 10px;
    `}
  .reviseBtn {
    cursor: pointer;
  }
`;

export const RightBlock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const StProfileImg = styled.div`
  background-color: white;
  width: 55px;
  height: 55px;

  overflow: hidden;

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const NavButton = styled.button`
  height: 16px;
  background: white;
  border-radius: 3px;
  border: none;
  box-shadow: 0px 4px 4px 0 rgba(152, 185, 223, 1);
  font-size: 10px;
  color: #335985;
`;
