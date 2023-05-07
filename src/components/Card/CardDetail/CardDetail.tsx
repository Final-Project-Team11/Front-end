import React, { useRef, useState } from 'react';
// 스타일, 인터페이스
import * as UI from './style';
import { COLOR } from '../../../styles/colors';
import { CardDetailProps, Payload } from '../interfaces';
// 서버 요청
import { usePatchDetail } from '../../../api/hooks/Card/usePatchDetail';
import { useGetCardDetail } from '../../../api/hooks/Card/useGetCardDetail';
// SVG파일
import ProfileEmployee from '../../../assets/Meerkat/ProfileEmployee';
import ProfileManager from '../../../assets/Meerkat/ProfileManager';
// 컴포넌트
import useInput from '../../../hooks/common/useInput';
import CustomInput from '../../Atoms/Input/CustomInput';
import CustomButton from '../../Atoms/Button/CustomButton';
import Loading from '../../Loading/Loading';
// 라이브러리
import Swal from 'sweetalert2';

const CardDetail = ({ closeModal, decodedToken }: CardDetailProps) => {
  // 카드디테일 정보 가져오기
  const { data } = useGetCardDetail();

  // 수정모드 동작 상태
  const [isEditMode, setIsEditMode] = useState(false);

  // 인풋 검사 정규식
  const birthDayValid =
    /^(19[0-9][0-9]|20\d{2})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  const phoneNumValid = /^010\d{4}\d{4}$/;

  // 수정모드 input initialValue 세팅용 변환
  let phoneNumInitialValue = '';
  if (data?.phoneNum) {
    phoneNumInitialValue =
      data?.phoneNum?.slice(0, 3) +
      data?.phoneNum?.slice(4, 8) +
      data?.phoneNum?.slice(9);
  }
  let birthDayInitialValue = '';
  if (data?.birthDay) {
    birthDayInitialValue = data?.birthDay.replace(/\//g, '-');
  }

  // phoneNum, birthDay 가져올 useInput maxLength, initialValue, 정규식으로 유효성 검사
  const [birthDay, birthDayHandler, , birthDayIsValid] = useInput(
    10,
    birthDayInitialValue,
    birthDayValid
  );
  const [phoneNum, phoneNumHandler, , phoneNumIsValid] = useInput(
    11,
    phoneNumInitialValue,
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

  // 기존 생일, 폰번호랑 input값이랑 다른지 체크
  const birthDayChanged = birthDay.replace(/-/g, '/');
  const phoneNumChanged =
    phoneNum.slice(0, 3) + '-' + phoneNum.slice(3, 7) + '-' + phoneNum.slice(7);
  const birthIsDiffer = birthDayChanged !== data?.birthDay;
  const phoneNumIsDiffer = phoneNumChanged !== data?.phoneNum;

  // 서버 요청 payload
  const file = imgInputRef.current?.files?.[0];
  const payload: Payload = {
    birthDay,
    phoneNum,
    file,
  };

  // 수정완료 버튼 핸들러
  const inputSubmitHandler = () => {
    // sweetAlert Modal보다 상단에 띄우기 위한 타겟
    const sweetAlertDiv = document.getElementById('cardSweetAlertDiv');
    if (!sweetAlertDiv) return;

    // 유효성 통과하고, 기존값들이랑 다르면 sweetAlert로 더블체크
    if (
      birthDayIsValid &&
      phoneNumIsValid &&
      (birthIsDiffer || phoneNumIsDiffer || file)
    ) {
      Swal.fire({
        title: '변경사항을 저장하시겠습니까?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: COLOR.PAGE_BLUE,
        cancelButtonColor: 'black',
        confirmButtonText: '저장',
        cancelButtonText: '취소',
        target: sweetAlertDiv,
        customClass: {
          title: 'swal-custom-title',
          popup: 'swal-custom-z-index', //customClass로 z-index 높이기.
        },
        didOpen: () => {
          const popup = document.querySelector('.swal-custom-z-index');
          if (popup) {
            (popup as HTMLElement).style.zIndex = '20000';
          }
        },
      }).then(result => {
        // 더블체크 완료 후 formData 전송, 확인메세지, 모달 닫기
        if (result.isConfirmed) {
          mutate(payload);

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '저장되었습니다!',
            showConfirmButton: false,
            timer: 1500,
            target: sweetAlertDiv,
          });
        }
      });
      //유효성 탈락 시 메세지
    } else if (
      (birthDayIsValid && !phoneNumIsValid) ||
      (!birthDayIsValid && phoneNumIsValid) ||
      (!birthDayIsValid && !phoneNumIsValid)
    ) {
      let titleMessage: string;
      let html;
      if (birthDayIsValid && !phoneNumIsValid) {
        titleMessage = '올바른 형식의 핸드폰 번호를 입력해주세요.';
        html = '<p class="swal-custom-text">010xxxxyyyy 형식으로 입력해주세요.</p>';
      } else if (!birthDayIsValid && phoneNumIsValid) {
        titleMessage = '올바른 형식의 생년월일을 선택해주세요';
        // html = '<p class="swal-custom-text">yyyy/mm/dd 형식으로 입력해주세요.</p>';
      } else {
        titleMessage = '올바른 형식의 생년월일과 핸드폰번호를 입력해주세요.';
        html =
          '<p class="swal-custom-text">생일은 yyyy-mm-dd 형식, 010xxxxyyyy 형식으로 입력해주세요.</p>';
      }
      Swal.fire({
        icon: 'error',
        title: titleMessage,
        html: html,
        target: sweetAlertDiv,
        customClass: {
          popup: 'swal-popup',
          title: 'swal-custom-title',
        },
      });
      setIsEditMode(true);
    }
  };

  // 카드 닫기 버튼 함수
  const closeBtnHandler = () => {
    // sweetAlert Modal보다 상단에 띄우기 위한 타겟
    const sweetAlertDiv = document.getElementById('cardSweetAlertDiv');
    if (!sweetAlertDiv) return;

    if (birthIsDiffer || phoneNumIsDiffer || file) {
      Swal.fire({
        title: '변경사항이 사라집니다. 나가시겠습니까?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: 'black',
        cancelButtonColor: 'gray',
        confirmButtonText: '닫기',
        cancelButtonText: '계속 작성',
        target: sweetAlertDiv,
        reverseButtons: true,
        customClass: {
          title: 'swal-custom-title',
          popup: 'swal-custom-z-index', //customClass로 z-index 높이기.
        },
        didOpen: () => {
          const popup = document.querySelector('.swal-custom-z-index');
          if (popup) {
            (popup as HTMLElement).style.zIndex = '20000';
          }
        },
      }).then(result => {
        // 더블체크 완료 후 formData 전송, 확인메세지, 모달 닫기
        if (result.isConfirmed) {
          closeModal();
        }
      });
    } else {
      closeModal();
    }
  };

  // 인풋 파일선택 커스텀div로 연동
  const handleButtonClick = () => {
    imgInputRef?.current?.click();
  };

  // 로딩
  if (!data) {
    return (
      <UI.LoadingBlock>
        <Loading />
      </UI.LoadingBlock>
    );
  }

  // 직책
  let position;
  switch (decodedToken.authLevel) {
    case 3: {
      position = '사원';
      break;
    }
    case 2: {
      position = '팀장';
      break;
    }
    case 1: {
      position = 'CEO';
      break;
    }
    default: {
      position = '알수없음';
      break;
    }
  }

  return (
    <div>
      <UI.StCardDetailBlock>
        <UI.TopBlock>
          <UI.LeftBlock>
            {/* 프로필이미지 - 설정중 임시 이미지, 설정된 이미지, 기본이미지 */}
            <UI.StProfileImg>
              {img ? (
                <img src={img.result as string} alt="" />
              ) : data.profileImg ? (
                <img src={data.profileImg} alt="" />
              ) : decodedToken.authLevel === 3 ? (
                <ProfileEmployee page="detail" />
              ) : (
                <ProfileManager page="detail" />
              )}
              {/* 프로필 설정인풋 */}
              {isEditMode && (
                <>
                  <UI.StProfileModifyInput
                    type="file"
                    ref={imgInputRef}
                    accept="image/*"
                    onChange={imgPreviewHandler}
                  />
                  <UI.StImgEditButton onClick={handleButtonClick}>
                    수정하기
                  </UI.StImgEditButton>
                </>
              )}
            </UI.StProfileImg>
            {decodedToken.authLevel === 1 ? null : (
              <UI.JoinDate color="gray">입사일 &nbsp;| &nbsp;{data.joinDay}</UI.JoinDate>
            )}
          </UI.LeftBlock>
          <UI.StInfoArea>
            <UI.StInfoTitleSpan weight="bolder">
              {decodedToken.teamName}
            </UI.StInfoTitleSpan>
            <UI.NameBirthArea>
              {/* 직급 | 이름 */}
              <UI.StInfoBlock>
                <UI.StInfoTitleSpan>{position}&nbsp; |</UI.StInfoTitleSpan>
                <UI.StInfo>{data.userName}</UI.StInfo>
              </UI.StInfoBlock>

              {/* 생일 - 수정모드, 기본, 없을때 */}
              <UI.StInfoBlock>
                <UI.StInfoTitleSpan>생일 &nbsp;| </UI.StInfoTitleSpan>
                {isEditMode ? (
                  <UI.InputBlock>
                    <CustomInput
                      inputType="cardInfo"
                      type="date"
                      value={birthDay}
                      onChange={birthDayHandler}
                    />
                    <UI.BirthDot validation={birthDayIsValid as boolean} />
                  </UI.InputBlock>
                ) : data.birthDay ? (
                  <UI.StInfo>{data.birthDay}</UI.StInfo>
                ) : (
                  <UI.StInfo>'생일이 설정되지 않았습니다.'</UI.StInfo>
                )}
              </UI.StInfoBlock>
            </UI.NameBirthArea>

            {/* 연락처 - 수정모드, 기본, 없을 때. */}
            <UI.StInfoBlock types="phoneNum">
              <UI.StInfoTitleSpan>연락처&nbsp; | </UI.StInfoTitleSpan>
              {isEditMode ? (
                <UI.InputBlock>
                  <CustomInput
                    inputType="cardInfo"
                    type="number"
                    value={phoneNum}
                    onChange={phoneNumHandler}
                    placeholder="01012341234"
                  />
                  <UI.PhoneNumhDot validation={phoneNumIsValid as boolean} />
                </UI.InputBlock>
              ) : data.phoneNum ? (
                <UI.StInfo>{data.phoneNum}</UI.StInfo>
              ) : (
                <UI.StInfo>'연락처가 설정되지 않았습니다.'</UI.StInfo>
              )}
            </UI.StInfoBlock>
            {/* 연락처 끝 */}
            {/* 버튼 - 수정모드, 일반모드 */}
            <UI.ButtonBlock>
              <CustomButton
                buttonType="cardDetail"
                type="button"
                onClick={() => closeBtnHandler()}
              >
                닫기
              </CustomButton>
              {isEditMode ? (
                <CustomButton
                  buttonType="cardDetail"
                  type="button"
                  onClick={() => {
                    setIsEditMode(false);
                    inputSubmitHandler();
                  }}
                >
                  수정완료
                </CustomButton>
              ) : (
                <CustomButton
                  buttonType="cardDetail"
                  type="button"
                  onClick={() => setIsEditMode(true)}
                >
                  수정하기
                </CustomButton>
              )}
            </UI.ButtonBlock>
            {/* 버튼 끝 */}
          </UI.StInfoArea>
        </UI.TopBlock>
        {/* 입사일 */}
      </UI.StCardDetailBlock>
      <UI.AlertDiv id="cardSweetAlertDiv" />
    </div>
  );
};

export default CardDetail;
