import React from 'react';
import styled from 'styled-components';

interface DaumAddressAPIProps {
  selectedAddressHandler: (postcode: string, roadAddress: string) => void;
}

const DaumAddressAPI: React.FC<DaumAddressAPIProps> = ({ selectedAddressHandler }) => {
  const postcodeRef = React.useRef<HTMLInputElement>(null);
  const roadAddressRef = React.useRef<HTMLInputElement>(null);
  const guideRef = React.useRef<HTMLSpanElement>(null);

  const searchAddressHandler = () => {
    new (window as any).daum.Postcode({
      oncomplete: (data: any) => {
        const roadAddr = data.roadAddress;
        let extraRoadAddr = '';

        if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
          extraRoadAddr += data.bname;
        }

        if (data.buildingName !== '' && data.apartment === 'Y') {
          extraRoadAddr +=
            extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName;
        }

        if (extraRoadAddr !== '') {
          extraRoadAddr = ' (' + extraRoadAddr + ')';
        }

        if (postcodeRef.current && roadAddressRef.current) {
          postcodeRef.current.value = data.zonecode;
          roadAddressRef.current.value = roadAddr;
        }

        const guideTextBox = guideRef.current;

        if (guideTextBox) {
          if (data.autoRoadAddress) {
            const expRoadAddr = data.autoRoadAddress + extraRoadAddr;
            guideTextBox.innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';
            guideTextBox.style.display = 'block';
          } else if (data.autoJibunAddress) {
            const expJibunAddr = data.autoJibunAddress;
            guideTextBox.innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';
            guideTextBox.style.display = 'block';
          } else {
            guideTextBox.innerHTML = '';
            guideTextBox.style.display = 'none';
          }
        }

        selectedAddressHandler(data.zonecode, roadAddr);
      },
    }).open();
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: '25px',
      }}
    >
      <div>
        <label style={{ display: 'flex', flexDirection: 'column' }}>
          <StSpan>회사 주소</StSpan>
          <StInput ref={postcodeRef} placeholder="우편번호" style={{}} />
        </label>
      </div>
      <StInput ref={roadAddressRef} placeholder="도로명주소" />
      <StButton type="button" onClick={searchAddressHandler}>
        주소 검색
      </StButton>
      <span ref={guideRef} style={{ color: '#ff0000', display: 'none' }}></span>
    </div>
  );
};

export default DaumAddressAPI;

export const StInput = styled.input`
  width: 290px;
  height: 50px;
  box-shadow: 0 4px 4px rgba(201, 201, 201, 0.25);
  font-size: 15px;
  border: none;
  padding: 15px;
  box-sizing: border-box;

  margin-right: 15px;
`;

export const StButton = styled.button`
  width: 145px;
  height: 50px;
  margin-top: 15px;

  border: 1px solid #badaff;
  border-radius: 7px;
  box-shadow: 0 4px 4px rgba(201, 201, 201, 0.25);
  box-sizing: border-box;

  background-color: #fff;
  text-align: center;
  font-size: 15px;
  color: #badaff;
  font-weight: bold;
`;

export const StSpan = styled.span`
  font-size: 16px;
  font-weight: bolder;
  color: #484240;

  margin-bottom: 15px;
`;
