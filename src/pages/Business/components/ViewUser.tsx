import { UserHead, UserInfo, Wrapper_Space } from '../styles';
import { Users, useGetUser } from '../hooks/useGetUser';
import Wrapper_Column from '../../../components/Atoms/Wrapper_Column/Wrapper_Column';
import CustomButton from '../../../components/Atoms/Button/CustomButton';
import React from 'react';
import DetailUser from './DetailUser';

const ViewUser = () => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [selectedUser, setSelectedUser] = React.useState<Users | null>(null);

  const openModalWithUser = (user: Users) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const { data, isLoading } = useGetUser();

  const waiting = () => {
    //
  };

  return (
    <Wrapper_Column style={{ marginBottom: '50px' }}>
      <div
        style={{
          width: '710px',
          borderBottom: '2px solid #000',
          boxSizing: 'border-box',
          padding: '0 35px 15px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <UserHead>부서</UserHead>
        <Wrapper_Space style={{ gap: '20px' }}>
          <UserHead>팀</UserHead>
          <UserHead>직급</UserHead>
        </Wrapper_Space>
        <Wrapper_Space style={{ gap: '20px' }}>
          <UserHead>직무</UserHead>
          <UserHead>이름</UserHead>
          <UserHead>입사 일자</UserHead>
        </Wrapper_Space>
      </div>
      <div style={{ height: '600px', overflow: 'auto' }}>
        {data?.map(user => {
          return (
            <div
              key={user.userId}
              onClick={() => openModalWithUser(user)}
              style={{
                width: '710px',
                marginTop: '15px',
                padding: '0 35px',
                display: 'flex',
                boxSizing: 'border-box',
                justifyContent: 'space-between',
              }}
            >
              <UserInfo style={{ borderBottom: '0.5px solid black' }}>임시 부서</UserInfo>
              <Wrapper_Space style={{ gap: '20px', borderBottom: '0.5px solid black' }}>
                <UserInfo>{user.team}</UserInfo>
                <UserInfo>{user.rank}</UserInfo>
              </Wrapper_Space>
              <Wrapper_Space style={{ gap: '20px', borderBottom: '0.5px solid black' }}>
                <UserInfo>{user.job}</UserInfo>
                <UserInfo>{user.userName}</UserInfo>
                <UserInfo>{String(user.joinDay)}</UserInfo>
              </Wrapper_Space>
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '67px 0 50px' }}>
        <CustomButton buttonType="cUserSubmit">대표자 정보 등록</CustomButton>
      </div>
      {showModal && selectedUser && (
        <DetailUser
          user={selectedUser}
          onClose={() => setShowModal(false)}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </Wrapper_Column>
  );
};

export default ViewUser;
