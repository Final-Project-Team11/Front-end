import React from 'react';

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
    <div>
      <input type="text" ref={postcodeRef} placeholder="우편번호" />
      <button type="button" onClick={searchAddressHandler}>
        우편번호 찾기
      </button>
      <br />
      <input type="text" ref={roadAddressRef} placeholder="도로명주소" />
      <span ref={guideRef} style={{ color: '#ff0000', display: 'none' }}></span>
    </div>
  );
};

export default DaumAddressAPI;
