import CustomModal from '../../../components/Atoms/Modal/CustomModal';
import CustomLabel from '../../../components/Atoms/Label/CustomLabel';
import CustomInput from '../../../components/Atoms/Input/CustomInput';
import Dropdown from '../../../components/Atoms/Dropdown/Dropdown';
import CustomButton from '../../../components/Atoms/Button/CustomButton';
import { Users } from '../hooks/useGetUser';
import { useForm } from 'react-hook-form';
import Wrapper_Row from '../../../components/Atoms/Wrapper_Row/Wrapper_Row';
import styled from 'styled-components';
import { COLOR } from '../../../styles/colors';
import { useDeleteUser } from '../hooks/useDeletUser';
import Swal from 'sweetalert2';
import React, { useEffect } from 'react';
import { usePatchUser } from '../hooks/usePatchUser';

type UserModalProps = {
  user: Users;
  onClose: () => void;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
};

type DetailUser = {
  team: string;
  rank: string;
  job: string;
  authLevel: number | string;
};

const DetailUser = ({ user, onClose, showModal, setShowModal }: UserModalProps) => {
  const { deleteUser } = useDeleteUser();

  const deleteUserHandler = (): void => {
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
        deleteUser(user.userId);
        closeModal();
      }
    });
  };

  const { patchUser } = usePatchUser();

  const authLevel = () => {
    if (String(user.authLevel) === '관리자') {
      return 2;
    } else {
      return 3;
    }
  };

  const patchUserHandler = () => {
    const team = getValues('team');
    const rank = getValues('rank');
    const job = getValues('job');

    const oldUser = {
      team: user.team,
      rank: user.rank,
      job: user.job,
      authLevel: authLevel(),
    };

    const patchUserData = {
      team: team,
      rank: rank,
      job: job,
      authLevel: authLevel(),
    };

    const comparisonUser = (old: DetailUser, patch: DetailUser): boolean => {
      const oldUser = Object.keys(old);
      const patchUserData = Object.keys(patch);

      if (oldUser.length !== patchUserData.length) {
        return false;
      }
      for (const key of oldUser) {
        if (old[key as keyof DetailUser] !== patch[key as keyof DetailUser]) {
          return false;
        }
      }

      return true;
    };

    if (comparisonUser(oldUser, patchUserData)) {
      Swal.fire({
        icon: 'question',
        title: '수정 사항이 없습니다.',
      });
    } else {
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
          patchUser(user.userId, patchUserData);
          closeModal();
        }
      });
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  type Auth = {
    auth: number | string;
  };
  const [auth, setAuth] = React.useState<Auth>({ auth: user.authLevel });

  const selecteAuthHandler = (value: number | string) => {
    setAuth({ auth: value });
  };

  const authority = [
    { name: '관리자', value: 2 },
    { name: '직원', value: 3 },
  ];

  const { register, getValues } = useForm<DetailUser>();

  return (
    <CustomModal
      closeModal={closeModal}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <form
        style={{
          width: '500px',
          margin: '50px 80px',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
        }}
      >
        <h1
          style={{
            width: '500px',
            fontSize: '18px',
            fontWeight: 'bolder',
            borderBottom: '1px solid black',
            paddingBottom: '15px',
            boxSizing: 'border-box',
            marginBottom: '25px',
          }}
        >
          유저 상세 조회
        </h1>
        {/* <------------------------이름------------------------> */}
        <CustomLabel>
          이름
          <StDiv>{user.userName}</StDiv>
        </CustomLabel>
        {/* <------------------------부서&팀------------------------> */}
        <Wrapper_Row style={{ gap: '20px' }}>
          <CustomLabel>
            부서
            <StDivHalf>임시 부서</StDivHalf>
          </CustomLabel>
          <CustomLabel>
            팀
            <CustomInput
              style={{ color: `${COLOR.SUB1}`, fontWeight: 'bolder', width: '240px' }}
              inputType="login"
              placeholder="직원의 팀을 입력해주세요"
              defaultValue={user.team}
              {...register('team')}
            />
          </CustomLabel>
        </Wrapper_Row>
        {/* <------------------------직급&직무------------------------> */}
        <Wrapper_Row style={{ gap: '20px' }}>
          <CustomLabel>
            직급
            <CustomInput
              style={{ color: `${COLOR.SUB1}`, fontWeight: 'bolder', width: '240px' }}
              inputType="login"
              placeholder="직원의 직급을 입력해주세요"
              defaultValue={user.rank}
              {...register('rank')}
            />
          </CustomLabel>
          <CustomLabel>
            직무
            <CustomInput
              style={{ color: `${COLOR.SUB1}`, fontWeight: 'bolder', width: '240px' }}
              inputType="login"
              placeholder="직원의 직무를 입력해주세요"
              defaultValue={user.job}
              {...register('job')}
            />
          </CustomLabel>
        </Wrapper_Row>
        {/* <------------------------월급일&입사일------------------------> */}
        <Wrapper_Row style={{ gap: '20px' }}>
          <CustomLabel>
            월급일
            <StDivHalf>매월&nbsp;{user.salaryDay}일</StDivHalf>
          </CustomLabel>
          <CustomLabel>
            입사일
            <StDivHalf>{String(user.joinDay)}</StDivHalf>
          </CustomLabel>
        </Wrapper_Row>
        {/* <------------------------권한------------------------> */}
        <CustomLabel style={{ marginBottom: '-15px' }}>권한</CustomLabel>
        <Wrapper_Row>
          <StDiv
            style={{
              color: `${COLOR.SUB1}`,
              fontWeight: 'bolder',
              width: '240px',
              marginRight: '20px',
            }}
          >
            {user.authLevel}
          </StDiv>
          <Dropdown
            items={authority}
            value={auth.auth}
            onChange={value => selecteAuthHandler(value)}
            style={{
              width: '240px',
              height: '50px',
              boxShadow: '0 4px 4px rgba(201, 201, 201, 0.25)',
              fontSize: '15px',
              border: 'none',
              padding: '15px',
              fontWeight: 'bold',
              color: '#484240',
              boxSizing: 'border-box',
            }}
          >
            권한 변경
          </Dropdown>
        </Wrapper_Row>
        {/* <-----------------------------아이디-----------------------------> */}
        <Wrapper_Row style={{ alignItems: 'center', gap: '20px' }}>
          <CustomLabel>
            아이디
            <StDiv style={{ width: '336px' }}>{user.userId}</StDiv>
          </CustomLabel>
          <CustomButton
            buttonType="cUser"
            type="button"
            style={{ margin: '30px 0 0 15px' }}
            onClick={deleteUserHandler}
          >
            유저 삭제
          </CustomButton>
        </Wrapper_Row>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '68px',
            gap: '20px',
          }}
        >
          <CustomButton type="button" buttonType="blackBackground" onClick={closeModal}>
            닫기
          </CustomButton>
          <CustomButton
            type="button"
            buttonType="blackBackground"
            onClick={patchUserHandler}
          >
            유저 수정
          </CustomButton>
        </div>
      </form>
    </CustomModal>
  );
};

export default DetailUser;

const StDiv = styled.div`
  width: 500px;
  height: 50px;
  box-shadow: 0 4px 4px rgba(201, 201, 201, 0.25);
  font-size: 15px;
  border: none;
  padding: 15px;
  border-radius: 4px;
  box-sizing: border-box;
`;

const StDivHalf = styled.div`
  width: 240px;
  height: 50px;
  box-shadow: 0 4px 4px rgba(201, 201, 201, 0.25);
  font-size: 15px;
  border: none;
  padding: 15px;
  border-radius: 4px;
  box-sizing: border-box;
`;
