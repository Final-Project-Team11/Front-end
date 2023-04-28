import React, { useRef, useState } from 'react';
import * as UI from './style';
import useInput from '../../../hooks/common/useInput';
import { usePatchDetail } from '../../../api/hooks/Card/usePatchDetail';
import { useGetCardDetail } from '../../../api/hooks/Card/useGetCardDetail';
import { FaPen } from 'react-icons/fa';
import CustomInput from '../../Atoms/Input/CustomInput';

const CardDetail = () => {
  const { data } = useGetCardDetail();

  // 수정모드 동작 상태
  const [isEditMode, setIsEditMode] = useState(false);

  // 인풋 검사 정규식
  const birthDayValid =
    /^(19[0-9][0-9]|20\d{2})\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/;
  const phoneNumValid = /^010-\d{4}-\d{4}$/;

  // phoneNum, birthDay 가져올 useInput maxLength 없고, initialValue 지정
  const [birthDay, birthDayHandler, , birthDayIsValid] = useInput(
    10,
    data?.birthDay,
    birthDayValid
  );
  const [phoneNum, phoneNumHandler, , phoneNumIsValid] = useInput(
    13,
    data?.phoneNum,
    phoneNumValid
  );

  // 인풋에서 이미지 가져올 useRef
  const imgInputRef = useRef<HTMLInputElement>(null);

  // 이미지 저장해둘 상태
  const [img, setImg] = useState<FileReader | null>(null);

  // 미리보기하기
  const imgPreviewHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 이미지 파일을 base64로 변환시켜주는 코드
    if (!e.target.files || !e.target.files[0]) {
      return;
    }
    const fileReader = new FileReader();
    const inputImage = e.target.files[0];

    fileReader.readAsDataURL(inputImage);
    fileReader.onloadend = () => {
      setImg(fileReader);
    };
  };

  const { mutate } = usePatchDetail();

  // 업데이트(수정할 때 formData에 이미지는 반영 X)

  const inputSubmitHandler = () => {
    const file = imgInputRef.current?.files?.[0];
    const formData = new FormData();
    if (file) {
      formData.append('file', file);
    }
    formData.append('birthDay', birthDay);
    formData.append('phoneNum', phoneNum);

    mutate(formData);
  };

  const handleButtonClick = () => {
    imgInputRef?.current?.click();
  };

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <UI.StCardDetailBlock>
      <UI.StTopBlock>
        <UI.StTopLeftBlock>
          <UI.StProfileImg>
            <img src={img ? (img.result as string) : data?.profileImg} alt="" />
            {isEditMode && (
              <>
                <UI.StProfileModifyInput
                  type="file"
                  ref={imgInputRef}
                  accept="image/*"
                  onChange={imgPreviewHandler}
                />
                <UI.StImgEditButton onClick={handleButtonClick}>
                  <FaPen />
                </UI.StImgEditButton>
              </>
            )}
          </UI.StProfileImg>
        </UI.StTopLeftBlock>
        <UI.StTopRightBlock></UI.StTopRightBlock>
      </UI.StTopBlock>
      <UI.StMiddleBlock>
        <UI.StInfoBlock>
          <UI.StInfoType>생일 : </UI.StInfoType>
          {isEditMode ? (
            <UI.StInputLabel htmlFor="">
              {birthDayIsValid
                ? '수정 가능합니다.'
                : '올바른 형식이 아닙니다. yyyy/mm/dd 형식으로 입력해주세요'}
              <CustomInput
                inputType="cardInfo"
                value={birthDay}
                onChange={birthDayHandler}
              />
            </UI.StInputLabel>
          ) : (
            <UI.StInfoSpan>{data?.birthDay}</UI.StInfoSpan>
          )}
        </UI.StInfoBlock>
        <UI.StInfoBlock>
          <UI.StInfoType>핸드폰 번호 : </UI.StInfoType>
          {isEditMode ? (
            <UI.StInputLabel htmlFor="">
              {phoneNumIsValid
                ? '수정 가능합니다.'
                : '올바른 형식이 아닙니다. 010-1234-5678 형식으로 입력해주세요'}
              <CustomInput
                inputType="cardInfo"
                value={phoneNum}
                onChange={phoneNumHandler}
              />
            </UI.StInputLabel>
          ) : (
            <UI.StInfoSpan>{data?.phoneNum}</UI.StInfoSpan>
          )}
        </UI.StInfoBlock>
      </UI.StMiddleBlock>
      <UI.StBottomBlock>
        <UI.StInfoType>입사일{data?.joinDay}</UI.StInfoType>
        {/* 수정모드 진입 버튼 */}
        {isEditMode ? (
          <button
            onClick={() => {
              setIsEditMode(false);
              inputSubmitHandler();
            }}
          >
            수정완료
          </button>
        ) : (
          <button onClick={() => setIsEditMode(true)}>수정하기</button>
        )}
      </UI.StBottomBlock>
    </UI.StCardDetailBlock>
  );
};

export default CardDetail;
