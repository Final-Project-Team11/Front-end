import React from 'react';
import Dropdown from '../../components/Atoms/Dropdown/Dropdown';
import { UserSignupInfo } from './interfaces';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useUserIdValidation } from './hooks/useUserIdValidation';
import { useSignup } from './hooks/useSignup';
import './business.css';
import { Users, useGetUser } from './hooks/useGetUser';
import { useDeleteUser } from './hooks/useDeletUser';
import { usePatchUser } from './hooks/usePatchUser';
import { Wrapper, ViewUser, VuHeader, Vubody, StSpan, UserInfo } from './styles';
import CreateUser from './components/CreateUser';
import Swal from 'sweetalert2';
import CustomModal from '../../components/Atoms/Modal/CustomModal';
import CustomLabel from '../../components/Atoms/Label/CustomLabel';
import CustomInput from '../../components/Atoms/Input/CustomInput';
import CustomButton from '../../components/Atoms/Button/CustomButton';

const Business = () => {
  // 모달 상태변수, 콜백함수
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const { data, isLoading } = useGetUser();
  console.log('데이터', data);
  const [selectedUser, setSelectedUser] = React.useState<Users>({
    userId: '',
    userName: '',
    team: '',
    rank: '',
    joinDay: null,
    job: '',
    salaryDay: 0,
    authLevel: '',
  });

  const selecteAuthorityPatchHandler = (value: number | string) => {
    setPatchUserInfo({ ...patchUserInfo, authLevel: Number(value) });
  };

  const handleUserClick = (user: Users) => {
    setSelectedUser(user);
    setShowModal(true);
    console.log('선택된', user);
  };

  if (!data && isLoading) {
    <div>Loading</div>;
  }

  const { deleteUser } = useDeleteUser();

  const deleteUserHandler = (): void => {
    closeModal();

    Swal.fire({
      title: '정말 삭제하시겠습니까?',
      text: '삭제된 유저는 복구되지 않습니다.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '삭제',
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire({ title: '정상적으로 삭제 되었습니다.', icon: 'success' });
        deleteUser(selectedUser.userId);
      } else {
        setShowModal(true);
      }
    });
  };

  interface PatchUserInfo {
    team: string;
    authLevel: number | string;
    rank: string;
    job: string;
  }

  const [patchUserInfo, setPatchUserInfo] = React.useState<PatchUserInfo>({
    team: '',
    authLevel: '',
    rank: '',
    job: '',
  });

  React.useEffect(() => {
    setPatchUserInfo({
      team: selectedUser.team,
      authLevel: selectedUser.authLevel,
      rank: selectedUser.rank,
      job: selectedUser.job,
    });
  }, [selectedUser]);

  const patchInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPatchUserInfo({ ...patchUserInfo, [name]: value });
  };

  const { patchUser } = usePatchUser();

  const patchUserHandler = () => {
    closeModal();

    Swal.fire({
      title: '유저 정보를 수정 하시겠습니까?',
      text: '수정된 정보는 되돌릴 수 없습니다.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '수정',
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire({ title: '정상적으로 수정 되었습니다.', icon: 'success' });
        patchUser(selectedUser.userId, patchUserInfo);
      } else {
        setShowModal(true);
      }
    });
  };

  // 권한 드롭 다운 배열
  const authority = [
    { name: '관리자', value: 2 },
    { name: '직원', value: 3 },
  ];

  return (
    <Wrapper>
      {/* <------------------------------유저 조회------------------------------> */}
      <ViewUser>
        <VuHeader>
          <StSpan>유저 조회</StSpan>
          <StSpan style={{ margin: '0 91px 0 60px' }}>부서별 보기</StSpan>
          {/* <Dropdown items={teams}>부서</Dropdown> */}
        </VuHeader>
        <Vubody>
          <div
            style={{
              borderBottom: '1px solid #484240',
              padding: '0 20px',
              boxSizing: 'border-box',
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '12px',
              gap: '80px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '50px',
              }}
            >
              <UserInfo>부서</UserInfo>
              <UserInfo>직급</UserInfo>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '50px',
              }}
            >
              <UserInfo>직무</UserInfo>
              <UserInfo>이름</UserInfo>
              <UserInfo>입사 일자</UserInfo>
            </div>
          </div>
          {data?.map(user => {
            return (
              <div
                key={user.userId}
                onClick={() => handleUserClick(user)}
                style={{
                  padding: '0 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '80px',
                }}
              >
                <div
                  style={{
                    borderBottom: '1px solid #484240',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '50px',
                  }}
                >
                  <UserInfo>{user.team}</UserInfo>
                  <UserInfo>{user.rank}</UserInfo>
                </div>
                <div
                  style={{
                    borderBottom: '1px solid #484240',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '50px',
                  }}
                >
                  <UserInfo>{user.job}</UserInfo>
                  <UserInfo>{user.userName}</UserInfo>
                  <UserInfo>{String(user.joinDay)}</UserInfo>
                </div>
              </div>
            );
          })}
          {/* <------------------------------유저 조회------------------------------> */}

          {/* <------------------------------유저 상세 조회------------------------------> */}
          {showModal && (
            <CustomModal closeModal={closeModal} style={{ width: '640px' }}>
              <h1
                style={{
                  width: '500px',
                  fontSize: '18px',
                  fontWeight: 'bolder',
                  borderBottom: '1px solid black',
                  paddingBottom: '15px',
                  boxSizing: 'border-box',
                  marginBottom: '25px',
                  textAlign: 'center',
                  margin: '30px 0 30px',
                }}
              >
                유저 조회
              </h1>
              <CustomLabel>
                이름
                <CustomInput inputType="signup" value={selectedUser.userName} />
              </CustomLabel>
              <CustomLabel>
                부서
                <CustomInput
                  inputType="signup"
                  type="text"
                  value={patchUserInfo.team}
                  name="team"
                  onChange={patchInputHandler}
                />
              </CustomLabel>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '20px',
                  color: '#8AB2E0',
                }}
              >
                <CustomLabel>
                  직급
                  <CustomInput
                    inputType="signup"
                    type="text"
                    name="rank"
                    value={patchUserInfo.rank}
                    onChange={patchInputHandler}
                  />
                </CustomLabel>
                <CustomLabel>
                  직무
                  <CustomInput
                    inputType="signup"
                    type="text"
                    name="job"
                    value={patchUserInfo.job}
                    onChange={patchInputHandler}
                  />
                </CustomLabel>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                <CustomLabel>
                  입사일
                  <CustomInput
                    inputType="signup"
                    name="job"
                    value={String(selectedUser.joinDay)}
                  />
                </CustomLabel>
                <CustomLabel>
                  월급일
                  <CustomInput
                    inputType="signup"
                    name="job"
                    value={selectedUser.salaryDay}
                  />
                </CustomLabel>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                <CustomLabel>
                  아이디
                  <CustomInput
                    inputType="signup"
                    name="job"
                    value={selectedUser.userId}
                  />
                </CustomLabel>
                <CustomLabel>
                  권한
                  <CustomInput
                    inputType="signup"
                    name="job"
                    value={selectedUser.authLevel}
                  />
                </CustomLabel>
              </div>
              <Dropdown
                size="small"
                items={authority}
                value={selectedUser.authLevel}
                onChange={selecteAuthorityPatchHandler}
                style={{
                  width: '500px',
                  height: '50px',
                  boxShadow: '0 4px 4px rgba(201, 201, 201, 0.25)',
                  fontSize: '15px',
                  border: 'none',
                  padding: '15px',
                  fontWeight: 'bold',
                  color: '#484240',
                }}
              >
                권한 변경
              </Dropdown>
              <div
                style={{
                  width: '500px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  margin: '50px 0 ',
                }}
              >
                <CustomButton
                  buttonType="signup"
                  onClick={patchUserHandler}
                  style={{
                    width: '150px',
                    boxShadow: '0 4px 4px rgba(201, 201, 201, 0.25)',
                    background: '#E64042',
                    color: '#fff',
                    borderRadius: '7px',
                    fontSize: '15px',
                    fontWeight: 'bold',
                  }}
                >
                  수정
                </CustomButton>
                <CustomButton
                  buttonType="signup"
                  onClick={deleteUserHandler}
                  style={{
                    width: '150px',
                    boxShadow: '0 4px 4px rgba(201, 201, 201, 0.25)',
                    background: '#E64042',
                    color: '#fff',
                    borderRadius: '7px',
                    fontSize: '15px',
                    fontWeight: 'bold',
                  }}
                >
                  삭제
                </CustomButton>
                <CustomButton
                  buttonType="signup"
                  onClick={closeModal}
                  style={{
                    width: '150px',
                    boxShadow: '0 4px 4px rgba(201, 201, 201, 0.25)',
                    background: '#fff',
                    color: '#E64042',
                    border: '1px solid #E64042',
                    boxSizing: 'border-box',
                    borderRadius: '7px',
                    fontSize: '15px',
                    fontWeight: 'bold',
                  }}
                >
                  닫기
                </CustomButton>
              </div>
            </CustomModal>
          )}
        </Vubody>
      </ViewUser>
      <CreateUser />
    </Wrapper>
  );
};

export default Business;
