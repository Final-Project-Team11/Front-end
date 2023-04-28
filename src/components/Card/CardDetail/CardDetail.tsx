import React, { useRef, useState } from 'react';
import * as UI from './style';
import useInput from '../../../hooks/common/useInput';
import { usePatchDetail } from '../../../api/hooks/Card/usePatchDetail';
import { useGetCardDetail } from '../../../api/hooks/Card/useGetCardDetail';
import { FaPen } from 'react-icons/fa';
import CustomInput from '../../Atoms/Input/CustomInput';
import profileImg from '../../../assets/images/profile-default.jpg';
import Swal from 'sweetalert2';
import { COLOR } from '../../../styles/colors';
import { CloseModal } from '../interfaces';

const CardDetail = ({ closeModal }: CloseModal) => {
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

  // 업데이트
  const file = imgInputRef.current?.files?.[0];
  const formData = new FormData();
  if (file) {
    formData.append('file', file);
  }
  formData.append('birthDay', birthDay);
  formData.append('phoneNum', phoneNum);
  const inputSubmitHandler = () => {
    const sweetAlertDiv = document.getElementById('cardSweetAlertDiv');
    if (!sweetAlertDiv) return;

    if (birthDayIsValid && phoneNumIsValid) {
      Swal.fire({
        title: '변경사항을 저장하시겠습니까?',
        // text: "You won't be able to revert this!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: COLOR.PAGE_BLUE,
        cancelButtonColor: 'black',
        confirmButtonText: '저장',
        cancelButtonText: '취소',
        target: sweetAlertDiv,
        customClass: {
          popup: 'swal-custom-z-index',
        },
        didOpen: () => {
          const popup = document.querySelector('.swal-custom-z-index');
          if (popup) {
            (popup as HTMLElement).style.zIndex = '2500';
          }
        },
      }).then(result => {
        if (result.isConfirmed) {
          mutate(formData);

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '저장되었습니다!',
            showConfirmButton: false,
            timer: 1500,
            target: sweetAlertDiv,
          }).then(() => {
            closeModal();
          });
        }
      });
    } else if (birthDayIsValid && !phoneNumIsValid) {
      Swal.fire({
        icon: 'error',
        title: '올바른 형식의 핸드폰 번호를 입력해주세요',
        target: sweetAlertDiv,
      });
    } else if (!birthDayIsValid && phoneNumIsValid) {
      Swal.fire({
        icon: 'error',
        title: '올바른 형식의 생년월일을 입력해주세요',
        target: sweetAlertDiv,
      });
    }
  };

  // 인풋 파일선택 커스텀div로 연동
  const handleButtonClick = () => {
    imgInputRef?.current?.click();
  };

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <>
      <UI.StCardDetailBlock>
        <UI.StTopBlock>
          <UI.StTopLeftBlock>
            <UI.StProfileImg>
              <img
                src={
                  img
                    ? (img.result as string)
                    : data.profileImg
                    ? data.profileImg
                    : profileImg
                }
                alt=""
              />
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
              <UI.StInfoSpan>{data.birthDay}</UI.StInfoSpan>
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
              <UI.StInfoSpan>{data.phoneNum}</UI.StInfoSpan>
            )}
          </UI.StInfoBlock>
        </UI.StMiddleBlock>
        <UI.StBottomBlock>
          <UI.StInfoType>입사일{data.joinDay}</UI.StInfoType>
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
      <div id="cardSweetAlertDiv" />
    </>
  );
};

export default CardDetail;
