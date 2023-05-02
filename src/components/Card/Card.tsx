import React, { useState } from 'react';
import * as UI from './style';
import { useGetCardInfo } from '../../api/hooks/Card/useGetCardInfo';
import { CardProps, DecodedToken, NavButton } from './interfaces';
import CardDetail from './CardDetail/CardDetail';
import CustomModal from '../Atoms/Modal/CustomModal';
import ProfileEmployee from '../../assets/Meerkat/ProfileEmployee';
import ProfileManager from '../../assets/Meerkat/ProfileManager';
import { getCookie } from '../../api/auth/CookieUtils';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Card = ({ tab, location }: CardProps) => {
  const { userInfo, infoIsLoading } = useGetCardInfo();
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  const token = getCookie('token');
  const decodedToken: DecodedToken = jwtDecode(token);

  if (infoIsLoading || !userInfo) {
    return <h1>...loading</h1>;
  }

  // 카드 클릭 시 Detail 요청, Modal open
  const onClickCardHandler = () => {
    setOpenModal(true);
  };

  // 버튼 텍스트
  // 메인, 마이페이지 이동 함수
  let buttonText: string;
  let navigateButton: NavButton;
  switch (location) {
    case 'main': {
      buttonText = `my page >`;
      if (decodedToken.authLevel === 3) {
        navigateButton = e => {
          e.stopPropagation();
          navigate('/mypage');
        };
      } else {
        navigateButton = e => {
          e.stopPropagation();
          navigate('/manager');
        };
      }
      break;
    }
    case 'mypage': {
      buttonText = `calendar >`;
      navigateButton = e => {
        e.stopPropagation();
        navigate('/main');
      };
      break;
    }
  }

  return (
    <>
      <UI.StCardBlock tab={tab} onClick={onClickCardHandler}>
        <UI.StInfoBlock>
          <UI.StInfoSpan bolder="bolder">
            {userInfo.team} : {userInfo.userName}
          </UI.StInfoSpan>
          {userInfo.team !== 'CEO' ? (
            <UI.StDateBlock>
              <UI.StInfoSpan>월급일 : D-{userInfo.salaryDay}</UI.StInfoSpan>
              <UI.StInfoSpan>남은연차 : {userInfo.remainDay}</UI.StInfoSpan>
            </UI.StDateBlock>
          ) : null}
        </UI.StInfoBlock>
        <UI.RightBlock>
          <UI.StProfileImg>
            {userInfo.profileImg ? (
              <img src={userInfo.profileImg} alt="" />
            ) : decodedToken?.authLevel === 3 ? (
              <ProfileEmployee page="page" />
            ) : (
              <ProfileManager page="page" />
            )}
          </UI.StProfileImg>
          <UI.NavButton onClick={navigateButton}>{buttonText}</UI.NavButton>
        </UI.RightBlock>
      </UI.StCardBlock>
      {openModal && (
        <CustomModal closeModal={() => setOpenModal(false)}>
          <CardDetail
            closeModal={() => setOpenModal(false)}
            decodedToken={decodedToken}
          />
        </CustomModal>
      )}
    </>
  );
};

export default React.memo(Card);
