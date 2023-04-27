import React, { useState } from 'react';
import * as UI from './style';
import { useGetCardInfo } from '../../api/hooks/Card/useGetCardInfo';
import profileImg from '../../assets/images/profile-default.jpg';
import { CardProps } from './interfaces';
import { useGetCardDetail } from '../../api/hooks/Card/useGetCardDetail';
import Modal from '../Modal/Modal';
import CardDetail from './CardDetail/CardDetail';

const Card = ({ tab }: CardProps) => {
  const { userInfo, infoIsLoading } = useGetCardInfo();
  const { data, refetch, isLoading } = useGetCardDetail();
  const [openModal, setOpenModal] = useState(false);

  if (infoIsLoading || !userInfo) {
    return <h1>...loading</h1>;
  }

  // 카드 클릭 시 Detail 요청, Modal open
  const onClickCardHandler = () => {
    refetch();
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
          <img src={profileImg} alt="" />
        </UI.StProfileImg>
      </UI.StCardBlock>
      {openModal && data && (
        <Modal closeModal={() => setOpenModal(false)}>
          <CardDetail data={data} />
        </Modal>
      )}
    </>
  );
};

export default Card;
