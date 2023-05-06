import { useState } from 'react';
// 스타일, 인터페이스
import * as UI from './style';
import { CardProps, DecodedToken, NavButton } from './interfaces';
// 서버 요청
import { useGetCardInfo } from '../../api/hooks/Card/useGetCardInfo';
import { getCookie } from '../../api/auth/CookieUtils';
import jwtDecode from 'jwt-decode';
// 컴포넌트
import CardDetail from './CardDetail/CardDetail';
import CustomModal from '../Atoms/Modal/CustomModal';
import Loading from '../Loading/Loading';
// SVG파일
import ProfileEmployee from '../../assets/Meerkat/ProfileEmployee';
import ProfileManager from '../../assets/Meerkat/ProfileManager';
// 라이브러리
import { BsPencilSquare } from '@react-icons/all-files/bs/BsPencilSquare';
import { useNavigate } from 'react-router-dom';
import { recoilTabState } from '../../states/recoilTabState';
import { useRecoilValue } from 'recoil';

const Card = ({ location }: CardProps) => {
  // 프로필카드 정보 가져오기
  const { userInfo, infoIsLoading } = useGetCardInfo();
  // 테마 패치용 recoilState
  const tab = useRecoilValue(recoilTabState);
  // 캘린더 <-> 마이페이지 이동
  const navigate = useNavigate();
  // 모달 여닫는용
  const [openModal, setOpenModal] = useState(false);

  // 토큰 디코드해서 권한레벨 얻기
  const token = getCookie('token');
  const decodedToken: DecodedToken = jwtDecode(token);

  // 로딩
  if (infoIsLoading || !userInfo) {
    return (
      <UI.LoadingBlock>
        <Loading />
      </UI.LoadingBlock>
    );
  }

  // 카드 클릭 시 Detail 요청, Modal open
  const onClickCardHandler = () => {
    setOpenModal(true);
  };

  // 권한 레벨에 따라 이동버튼 텍스트, 페이지 경로 변경
  let buttonText: string;
  let navigateButton: NavButton;
  switch (location) {
    case 'main': {
      if (decodedToken.authLevel === 3) {
        buttonText = `mypage >`;
        navigateButton = e => {
          e.stopPropagation();
          navigate('/mypage');
        };
      } else if (decodedToken.authLevel === 2) {
        buttonText = `mypage >`;
        navigateButton = e => {
          e.stopPropagation();
          navigate('/manager');
        };
      } else {
        buttonText = `유저 관리 >`;
        navigateButton = e => {
          e.stopPropagation();
          navigate('/business');
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
      <UI.StCardBlock tab={tab}>
        <UI.StInfoBlock>
          <UI.StInfoSpan bolder="bolder" reviseSpan={true}>
            <span>
              {userInfo.team} &nbsp;|&nbsp; {userInfo.userName}
            </span>
            <BsPencilSquare className="reviseBtn" onClick={onClickCardHandler} />
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
          <UI.NavButton onClick={navigateButton} tab={tab}>
            {buttonText}
          </UI.NavButton>
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

export default Card;
