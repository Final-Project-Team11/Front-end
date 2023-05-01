import React from 'react';
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
  salaryDay: number;
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
      } else {
        closeModal();
      }
    });
  };
  //   const [showModal, setShowModal] = React.useState<boolean>(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const authority = [
    { name: '관리자', value: 2 },
    { name: '직원', value: 3 },
  ];

  const { register } = useForm<DetailUser>();

  return (
    <CustomModal closeModal={closeModal}>
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
        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
          <CustomLabel>
            부서
            <StDivHalf>임시 부서</StDivHalf>
          </CustomLabel>
          <CustomLabel>
            팀
            <CustomInput
              style={{ color: `${COLOR.SUB1}`, fontWeight: 'bolder' }}
              inputType="cUserHalf"
              placeholder="직원의 팀을 입력해주세요"
              defaultValue={user.team}
              {...register('team')}
            />
          </CustomLabel>
        </div>
        {/* <------------------------직급&직무------------------------> */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
          <CustomLabel>
            직급
            <CustomInput
              style={{ color: `${COLOR.SUB1}`, fontWeight: 'bolder' }}
              inputType="cUserHalf"
              placeholder="직원의 직급을 입력해주세요"
              defaultValue={user.rank}
              {...register('rank')}
            />
          </CustomLabel>
          <CustomLabel>
            직무
            <CustomInput
              style={{ color: `${COLOR.SUB1}`, fontWeight: 'bolder' }}
              inputType="cUserHalf"
              placeholder="직원의 직무를 입력해주세요"
              defaultValue={user.job}
              {...register('job')}
            />
          </CustomLabel>
        </div>
        {/* <------------------------월급일&입사일------------------------> */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
          <CustomLabel>
            월급일
            <StDivHalf>매월&nbsp;{user.salaryDay}일</StDivHalf>
          </CustomLabel>
          <CustomLabel>
            입사일
            <StDivHalf>{String(user.joinDay)}</StDivHalf>
          </CustomLabel>
        </div>
        {/* <------------------------권한------------------------> */}
        <Dropdown
          size="small"
          items={authority}
          //   value={auth.auth}
          //   onChange={selecteAuthHandler}
          style={{
            width: '500px',
            height: '50px',
            boxShadow: '0 4px 4px rgba(201, 201, 201, 0.25)',
            fontSize: '15px',
            border: 'none',
            padding: '15px',
            fontWeight: 'bold',
            color: '#484240',
            marginBottom: '-30px',
          }}
        >
          권한
        </Dropdown>
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
          <CustomButton type="button" buttonType="cUserSubmit" onClick={closeModal}>
            닫기
          </CustomButton>
          <CustomButton type="button" buttonType="cUserSubmit">
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
