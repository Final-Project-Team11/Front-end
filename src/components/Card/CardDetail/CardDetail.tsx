import React, { useRef, useState } from 'react';
import * as UI from './style';
import { StButton } from '../../Button/styles';
import useInput from '../../../hooks/common/useInput';
import { usePatchDetail } from '../../../api/hooks/Card/usePatchDetail';
import { useGetCardDetail } from '../../../api/hooks/Card/useGetCardDetail';
import { FaPen } from 'react-icons/fa';

const CardDetail = () => {
  const { data, isLoading } = useGetCardDetail();
  // if (isLoading || !data) {
  //   return <div>loading...</div>;
  // }

  // 수정모드 동작 상태
  const [isEditMode, setIsEditMode] = useState(false);

  // phoneNum, birthDay 가져올 useInput maxLength 없고, initialValue 지정
  const [birthDay, birthDayHandler] = useInput(undefined, data?.birthDay);
  const [phoneNum, phoneNumHandler] = useInput(undefined, data?.phoneNum);

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
            <UI.StModifyInput value={birthDay} onChange={birthDayHandler} />
          ) : (
            <UI.StInfoSpan>{data?.birthDay}</UI.StInfoSpan>
          )}
        </UI.StInfoBlock>
        <UI.StInfoBlock>
          <UI.StInfoType>핸드폰 번호 : </UI.StInfoType>
          {isEditMode ? (
            <UI.StModifyInput value={phoneNum} onChange={phoneNumHandler} />
          ) : (
            <UI.StInfoSpan>{data?.phoneNum}</UI.StInfoSpan>
          )}
        </UI.StInfoBlock>
      </UI.StMiddleBlock>
      <UI.StBottomBlock>
        <UI.StInfoType>입사일{data?.joinDay}</UI.StInfoType>
        {/* 수정모드 진입 버튼 */}
        {isEditMode ? (
          <StButton
            size="signup"
            onClick={() => {
              setIsEditMode(false);
              inputSubmitHandler();
            }}
          >
            수정완료
          </StButton>
        ) : (
          <StButton size="signup" onClick={() => setIsEditMode(true)}>
            수정하기
          </StButton>
        )}
      </UI.StBottomBlock>
    </UI.StCardDetailBlock>
  );
};

export default CardDetail;
