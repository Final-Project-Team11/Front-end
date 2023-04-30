import React from 'react';
import Dropdown from '../../components/Atoms/Dropdown/Dropdown';
import 'react-datepicker/dist/react-datepicker.css';
import { Users, useGetUser } from './hooks/useGetUser';
import { useDeleteUser } from './hooks/useDeletUser';
import { usePatchUser } from './hooks/usePatchUser';
import { Wrapper, ViewUserArea, StSpan, UserInfo } from './styles';
import CreateUser from './components/CreateUser';
import Swal from 'sweetalert2';
import CustomModal from '../../components/Atoms/Modal/CustomModal';
import CustomLabel from '../../components/Atoms/Label/CustomLabel';
import CustomInput from '../../components/Atoms/Input/CustomInput';
import CustomButton from '../../components/Atoms/Button/CustomButton';
import Wrapper_Row from '../../components/Atoms/Wrapper_Row/Wrapper_Row';
import ViewUser from './components/ViewUser';

const Business = () => {
  // 모달 상태변수, 콜백함수
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const { data, isLoading } = useGetUser();

  const selecteAuthorityPatchHandler = (value: number | string) => {
    setPatchUserInfo({ ...patchUserInfo, authLevel: Number(value) });
  };

  if (!data && isLoading) {
    <div>Loading</div>;
  }

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

  const { patchUser } = usePatchUser();

  // const patchUserHandler = () => {
  //   closeModal();

  //   Swal.fire({
  //     title: '유저 정보를 수정 하시겠습니까?',
  //     text: '수정된 정보는 되돌릴 수 없습니다.',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: '수정',
  //   }).then(result => {
  //     if (result.isConfirmed) {
  //       Swal.fire({ title: '정상적으로 수정 되었습니다.', icon: 'success' });
  //       patchUser(selectedUser.userId, patchUserInfo);
  //     } else {
  //       setShowModal(true);
  //     }
  //   });
  // };

  // 권한 드롭 다운 배열

  return (
    <Wrapper>
      {/* <------------------------------유저 조회------------------------------> */}
      <ViewUserArea>
        <Wrapper_Row style={{ width: '730px', marginBottom: '60px' }}>
          <StSpan>유저 조회</StSpan>
          <StSpan style={{ margin: '0 91px 0 60px' }}>부서별 보기</StSpan>
          <input type="search" />
        </Wrapper_Row>
        <ViewUser />
      </ViewUserArea>
      <CreateUser />
    </Wrapper>
  );
};

export default Business;
