import styled from 'styled-components';
import { COLOR } from '../../../styles/colors';

export const StCardDetailBlock = styled.div`
  width: 500px;
  height: 600px;

  display: flex;
  flex-direction: column;

  padding: 20px;
  box-sizing: border-box;
`;

export const StTopBlock = styled.div`
  width: 100%;
  height: 35%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StTopRightBlock = styled.div`
  width: 45%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const StTopLeftBlock = styled.div`
  width: 45%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const StProfileImg = styled.div`
  width: 150px;
  height: 150px;

  border: 2px solid ${COLOR.PAGE_BLUE};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StProfileModifyInput = styled.input`
  width: 150px;
  height: 30px;
  display: none;
`;

export const StMiddleBlock = styled.div`
  width: 100%;
  height: 40%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const StInfoBlock = styled.div`
  width: 100%;
  height: 30%;

  font-size: 30px;
  font-weight: bolder;

  padding: 0 30px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StInfoType = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 30px;
  font-weight: bolder;
`;

export const StBottomBlock = styled.div`
  width: 100%;
  height: 25%;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const StInfoSpan = styled.span`
  font-size: 30px;
  font-weight: bolder;
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
  right: 32px;
  bottom: 30px;
`;

export const StModifyInput = styled.input`
  width: 200px;
`;

export const StInputLabel = styled.label`
  width: 200px;
  font-size: 10px;
  color: ${COLOR.PAGE_DONE};
`;
