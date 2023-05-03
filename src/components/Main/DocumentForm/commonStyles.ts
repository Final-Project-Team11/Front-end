import styled, { css } from 'styled-components';
import { COLOR } from '../../../styles/colors';

const StContainer = styled.div`
  margin-bottom: 300px;
`;

const StTitleContentBlock = styled.div`
  display: flex;
  gap: 18px;
  line-height: 50px;
  font-size: 20px;
  align-items: center;
  text-align: center;
`;

const StTitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${COLOR.DETAIL_GRAY};
`;

const StContentBlock = styled.div`
  /* height: 250px; */
  border-top: 1px solid ${COLOR.DETAIL_GRAY};
  border-bottom: 1px solid ${COLOR.DETAIL_GRAY};
  padding: 10px 0;
`;

const StMentionBlock = styled.div`
  border-bottom: 1px solid ${COLOR.DETAIL_GRAY};
  margin-bottom: 200px;
  padding: 18px 0;
  display: flex;
  align-items: center;
  margin-left: 18px;
  gap: 10px;
`;

const StButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

interface BodyProps {
  isValid?: boolean;
}

const StTextArea = styled.textarea<BodyProps>`
  width: 100%;
  border: none;
  height: 100%;
  outline: none;
  font-size: 20px;
  resize: none;

  &:disabled {
    background: none;
  }

  ${({ isValid }) =>
    isValid === false &&
    css`
      &::placeholder {
        color: red;
      }
    `}
`;

const StInput = styled.input`
  border: none;
  font-size: 20px;
  width: 71px;
  outline: none;

  &:disabled {
    background: none;
  }
`;

const StUserName = styled.div`
  font-size: 20px;
  width: 71px;
`;

interface TitleProps {
  isValid?: boolean;
}
const StTitleInput = styled.input<TitleProps>`
  border: none;
  font-size: 20px;
  width: 300px;
  outline: none;

  &:disabled {
    background: none;
  }

  ${({ isValid }) =>
    isValid === false &&
    css`
      &::placeholder {
        color: red;
      }
    `}
`;

interface CalendarTypeProps {
  backgroundColor?: string;
}

const StMarkBlock = styled.div<CalendarTypeProps>`
  width: 13px;
  height: 30px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : COLOR.SCHEDULE_BLUE};
  border-radius: 10px;
  margin-left: 18px;
`;

const StMarkNameBlcok = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const StPeriodBlock = styled.div`
  display: flex;
  gap: 3px;
  font-weight: bold;
`;

interface ZoomClickProps {
  zoomClick?: boolean;
}
const StTextAreaBlock = styled.div<ZoomClickProps>`
  margin-left: 30px;
  padding-top: 10px;
  ${({ zoomClick }) =>
    zoomClick === true
      ? css`
          height: 800px;
          overflow: hidden scroll;
        `
      : css`
          height: 200px;
          overflow: hidden;
        `}
`;

const StFileBlock = styled.div`
  display: flex;
  margin-left: 8px;
  align-items: center;
  padding: 10px 0;
  gap: 10px;
  margin-left: 18px;
`;

const stTagBlock = styled.div`
  background-color: lightgray;
  width: 50px;
  line-height: 30px;
  text-align: center;
  border-radius: 5px;
`;

const Ststrong = styled.strong`
  font-weight: bold;
  font-size: 1.5rem;
`;

const StReturnBlcok = styled.div`
  margin-right: 50px;
  cursor: pointer;

  opacity: 1;
  &:hover {
    opacity: 0.5;
  }
`;

const StOpenBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(237, 237, 237, 0.7);
  border-bottom: 1px solid rgba(237, 237, 237, 0.7);
  margin-left: 18px;
  padding: 5px 0;
  color: #a1a1a1;
`;

const StOpenButton = styled.div`
  display: flex;
  gap: 10px;
  opacity: 1;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export {
  StContainer,
  StTitleBlock,
  StContentBlock,
  StMentionBlock,
  StTitleContentBlock,
  StButtonBlock,
  StTextArea,
  StInput,
  StMarkBlock,
  StPeriodBlock,
  StMarkNameBlcok,
  StTextAreaBlock,
  StFileBlock,
  stTagBlock,
  Ststrong,
  StReturnBlcok,
  StOpenBlock,
  StOpenButton,
  StTitleInput,
  StUserName,
};
