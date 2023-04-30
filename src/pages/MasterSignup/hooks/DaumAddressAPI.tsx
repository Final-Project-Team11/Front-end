import React from 'react';
import CustomLabel from '../../../components/Atoms/Label/CustomLabel';
import CustomInput from '../../../components/Atoms/Input/CustomInput';
import Wrapper_Row from '../../../components/Atoms/Wrapper_Row/Wrapper_Row';
import CustomButton from '../../../components/Atoms/Button/CustomButton';
import Wrapper_Column from '../../../components/Atoms/Wrapper_Column/Wrapper_Column';

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
    <Wrapper_Column>
      <Wrapper_Row style={{ alignItems: 'flex-end', gap: '15px' }}>
        <CustomLabel>
          회사 주소
          <CustomInput
            inputType="half"
            style={{ width: '290px' }}
            placeholder="우편번호"
            ref={postcodeRef}
          />
        </CustomLabel>
        <CustomInput inputType="half" ref={roadAddressRef} placeholder="도로명주소" />
        <CustomButton buttonType="valid" type="button" onClick={searchAddressHandler}>
          주소 검색
        </CustomButton>
      </Wrapper_Row>
      <span ref={guideRef} style={{ color: '#ff0000', display: 'none' }}></span>
    </Wrapper_Column>
  );
};

export default DaumAddressAPI;
