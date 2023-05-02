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

  // 권한 드롭 다운 배열

  return (
    <Wrapper>
      {/* <------------------------------유저 조회------------------------------> */}
      <ViewUserArea>
        <ViewUser />
      </ViewUserArea>
      <CreateUser />
    </Wrapper>
  );
};

export default Business;
