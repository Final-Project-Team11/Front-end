import styled from 'styled-components';

interface FontStyle {
  color?: 'gray';
  weight?: 'bolder';
  size?: string;
}

interface DotProps {
  validation: boolean;
}

interface PhoneNum {
  types?: 'phoneNum';
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

export const LoadingBlock = styled.div`
  width: 450px;
  height: 330px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopBlock = styled.div`
  width: 100%;
  height: 70%;

  display: flex;
  justify-content: space-between;
`;

export const StProfileImg = styled.div`
  background-color: #f6f6f6;
  width: 150px;
  height: 150px;

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
  width: fit-content;
  white-space: nowrap;
`;

export const JoinDate = styled.span`
  color: gray;
  font-size: 11px;
  margin-bottom: 15px;
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

export const LeftBlock = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StInfoArea = styled.div`
  width: 210px;
  height: 240px;
  display: flex;
  flex-direction: column;

  padding: 10px;
  box-sizing: border-box;
`;

export const NameBirthArea = styled.div`
  width: 100%;
  height: 80px;

  border-top: 1px solid black;
  border-bottom: 1px solid black;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 15px 0;
`;

export const StInfoBlock = styled.div<PhoneNum>`
  width: 100%;

  display: flex;
  align-items: center;
  gap: ${({ types }) => (types ? '19px' : '28px')};
`;

export const StProfileModifyInput = styled.input`
  width: 150px;
  height: 30px;
  display: none;
`;

export const StImgEditButton = styled.button`
  background-color: #d9d9d9;
  width: 150px;
  height: 25px;

  border: none;
  font-size: 11px;
  color: #484240;

  cursor: pointer;

  position: absolute;
  bottom: 0;
`;

export const AlertDiv = styled.div`
  .swal-custom-title {
    font-size: 18px;
  }
  .swal-custom-text {
    font-size: 10px;
  }
`;

// type number일 시 기본스타일 화살표 제거
export const InputBlock = styled.div`
  position: relative;

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number']::-ms-clear,
  input[type='number']::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
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

export const ButtonBlock = styled.div`
  width: 100%;

  margin-top: auto;

  display: flex;
`;
