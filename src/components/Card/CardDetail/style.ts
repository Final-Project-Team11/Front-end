import styled from 'styled-components';
import { COLOR } from '../../../styles/colors';

interface FontStyle {
  color?: 'gray';
  weight?: 'bolder';
  size?: string;
  left?: string;
}

interface DotProps {
  validation: boolean;
}

export const StCardDetailBlock = styled.div`
  width: 450px;
  height: 330px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 50px 40px;
  box-sizing: border-box;

  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

export const TopBlock = styled.div`
  width: 100%;
  height: 70%;

  display: flex;
  justify-content: space-between;
`;

export const BottomBlock = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StProfileImg = styled.div`
  width: 130px;
  height: 130px;

  border: 1px solid ${COLOR.PAGE_BLUE};

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StInfoTitleSpan = styled.span<FontStyle>`
  font-size: ${({ size }) => (size ? size : '11px')};
  font-weight: ${({ weight }) => (weight ? weight : null)};
  color: ${({ color }) => (color ? 'gray' : null)};

  margin-left: ${({ left }) => (left ? left : 'auto')};
`;

export const StInfo = styled.div`
  width: 130px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding-left: 5px;
  box-sizing: border-box;

  font-size: 10px;
`;

export const StInfoArea = styled.div`
  width: 180px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StInfoBlock = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StProfileModifyInput = styled.input`
  width: 150px;
  height: 30px;
  display: none;
`;

export const StImgEditButton = styled.div`
  background-color: white;
  width: 25px;
  height: 25px;

  border: 2px solid black;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  position: absolute;
  right: -5px;
  bottom: -5px;
`;

export const AlertDiv = styled.div`
  .swal-custom-title {
    font-size: 18px;
  }
  .swal-custom-text {
    font-size: 10px;
  }
`;

export const InputBlock = styled.div`
  position: relative;
`;

export const BirthDot = styled.div<DotProps>`
  background-color: ${({ validation }) => (validation ? 'green' : 'red')};
  width: 7px;
  height: 7px;

  border-radius: 50%;
  position: absolute;
  right: 7px;
  top: 12px;
`;

export const PhoneNumhDot = styled.div<DotProps>`
  background-color: ${({ validation }) => (validation ? 'green' : 'red')};
  width: 7px;
  height: 7px;

  border-radius: 50%;
  position: absolute;
  right: 7px;
  top: 12px;
`;
