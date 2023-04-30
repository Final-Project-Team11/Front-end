import React, { useState } from 'react';
import * as UI from './style';
import { useGetCardInfo } from '../../api/hooks/Card/useGetCardInfo';
import { CardProps } from './interfaces';
import CardDetail from './CardDetail/CardDetail';
import CustomModal from '../Atoms/Modal/CustomModal';
import ProfileEmployee from '../../assets/Meerkat/ProfileEmployee';
import ProfileManager from '../../assets/Meerkat/ProfileManager';

const Card = ({ tab }: CardProps) => {
  const { userInfo, infoIsLoading } = useGetCardInfo();

  const [openModal, setOpenModal] = useState(false);

  if (infoIsLoading || !userInfo) {
    return <h1>...loading</h1>;
  }

  // 카드 클릭 시 Detail 요청, Modal open
  const onClickCardHandler = () => {
    setOpenModal(true);
  };

  return (
    <>
      <UI.StCardBlock tab={tab} onClick={onClickCardHandler}>
        <UI.StInfoBlock>
          <UI.StTeamNameH1>
            {userInfo.team} : {userInfo.userName}
          </UI.StTeamNameH1>
          {userInfo.team !== 'CEO' ? (
            <UI.StDateBlock>
              <UI.StInfoSpan>월급일 : D-{userInfo.salaryDay}</UI.StInfoSpan>
              <UI.StInfoSpan>남은연차 : {userInfo.remainDay}</UI.StInfoSpan>
            </UI.StDateBlock>
          ) : null}
        </UI.StInfoBlock>
        <UI.StProfileImg>
          {userInfo.profileImg ? (
            <img src={userInfo.profileImg} alt="" />
          ) : (
            <ProfileEmployee page="page" />
          )}
        </UI.StProfileImg>
      </UI.StCardBlock>
      {openModal && (
        <CustomModal closeModal={() => setOpenModal(false)}>
          <CardDetail closeModal={() => setOpenModal(false)} />
        </CustomModal>
      )}
    </>
  );
};

export default React.memo(Card);
