import React from 'react';
import Dropdown from '../../../components/Atoms/Dropdown/Dropdown';
import { useUserIdValidation } from '../hooks/useUserIdValidation';
import CustomLabel from '../../../components/Atoms/Label/CustomLabel';
import CustomInput from '../../../components/Atoms/Input/CustomInput';
import CustomButton from '../../../components/Atoms/Button/CustomButton';
import { useForm } from 'react-hook-form';
import Wrapper_Row from '../../../components/Atoms/Wrapper_Row/Wrapper_Row';
import Swal from 'sweetalert2';
import { useSignup } from '../hooks/useSignup';

type UserSignupInfoPlus = {
  userName: string;
  team: string;
  rank: string;
  job: string;
  salaryDay: number;
  joinDay: string;
  authLevel: number | string;
  userId: string;
};

const CreateUser = () => {
  // <------------------------------React-Hook-Form------------------------------>
  const { register, handleSubmit, getValues, reset } = useForm<UserSignupInfoPlus>();

  // <-------------------------아이디 유호성 검사, 중복확인------------------------->
  const { validUserId, checkUserId, userIdValidation } = useUserIdValidation();

  const checkUserIdHandler = () => {
    const { userId } = getValues();
    validUserId(userId);
    if (userIdValidation) {
      checkUserId.mutate(userId);
    } else {
      Swal.fire({
        icon: 'error',
        title: '유효하지 않은 아이디 입니다.',
        text: '아이디 양식을 다시 재확인 해주세요.',
      });
    }
  };
  // <------------------------------권한------------------------------>
  type Auth = {
    auth: number | string;
  };
  const [auth, setAuth] = React.useState<Auth>({ auth: '' });
  const selecteAuthHandler = (value: number | string) => {
    setAuth({ auth: value });
  };

  // 권한 드롭 다운 배열
  const authority = [
    { name: '관리자', value: 2 },
    { name: '직원', value: 3 },
  ];

  // <------------------------------유저 생성------------------------------>
  const { signup } = useSignup();
  const submitSignInfoHandler = (data: UserSignupInfoPlus) => {
    const joinDay = new Date(data.joinDay);
    const newData = {
      userName: data.userName,
      team: data.team,
      rank: data.rank,
      job: data.job,
      salaryDay: data.salaryDay,
      joinDay: joinDay,
      authLevel: auth.auth,
      userId: data.userId,
    };
    if (userIdValidation) {
      signup.mutate(newData);
      reset();
    } else {
      alert('가입에 실패하였습니다 입력한 내용을 확인해주세요');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitSignInfoHandler)}
      style={{
        width: '500px',
        margin: '50px 210px 50px 210px',
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
        유저 생성
      </h1>
      {/* <------------------------이름------------------------> */}
      <CustomLabel>
        이름
        <CustomInput
          inputType="cUser"
          placeholder="직원의 이름을 입력해주세요"
          {...register('userName', {
            required: true,
          })}
        />
      </CustomLabel>
      {/* <------------------------부서&팀------------------------> */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
        <CustomLabel>
          부서
          <CustomInput inputType="cUserHalf" placeholder="준비 중인 입력칸입니다." />
        </CustomLabel>
        <CustomLabel>
          팀
          <CustomInput
            inputType="cUserHalf"
            placeholder="직원의 팀을 입력해주세요"
            {...register('team', {
              required: true,
            })}
          />
        </CustomLabel>
      </div>
      {/* <------------------------직급&직무------------------------> */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
        <CustomLabel>
          직급
          <CustomInput
            inputType="cUserHalf"
            placeholder="직원의 직급을 입력해주세요"
            {...register('rank', {
              required: true,
            })}
          />
        </CustomLabel>
        <CustomLabel>
          직무
          <CustomInput
            inputType="cUserHalf"
            placeholder="직원의 직무를 입력해주세요"
            {...register('job', {
              required: true,
            })}
          />
        </CustomLabel>
      </div>
      {/* <------------------------월급일&입사일------------------------> */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
        <CustomLabel>
          월급일
          <CustomInput
            inputType="cUserHalf"
            placeholder="직원의 월급일을 입력해주세요"
            maxLength={2}
            {...register('salaryDay', {
              required: true,
            })}
          />
        </CustomLabel>
        <CustomLabel>
          입사일
          <CustomInput
            inputType="cUserHalf"
            type="date"
            placeholder="직원의 입사일을 입력해주세요"
            {...register('joinDay', {
              required: true,
            })}
          />
        </CustomLabel>
      </div>
      {/* <------------------------권한------------------------> */}
      <Dropdown
        size="small"
        items={authority}
        value={auth.auth}
        onChange={selecteAuthHandler}
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
          <CustomInput
            inputType="cUserId"
            placeholder="영 대, 소문자, 숫자 5자 이상 입력해주세요."
            {...register('userId', {
              required: true,
            })}
          />
        </CustomLabel>
        <CustomButton
          buttonType="cUser"
          type="button"
          style={{ margin: '30px 0 0 15px' }}
          onClick={checkUserIdHandler}
        >
          중복 확인
        </CustomButton>
      </Wrapper_Row>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '68px' }}>
        <CustomButton buttonType="cUserSubmit">유저 생성</CustomButton>
      </div>
    </form>
  );
};
export default CreateUser;
