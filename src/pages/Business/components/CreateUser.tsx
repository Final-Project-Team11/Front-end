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
import { StFrom, StH1, VaildP } from '../styles';
import Wrapper_Column from '../../../components/Atoms/Wrapper_Column/Wrapper_Column';

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
  // <-----------------------------------React-Hook-Form----------------------------------->
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<UserSignupInfoPlus>({ mode: 'onChange' });

  // <------------------------------아이디 유호성 검사, 중복확인------------------------------>
  const { validUserId, checkUserId, userIdValidation, setUserIdValidation } =
    useUserIdValidation();

  const checkUserIdHandler = async () => {
    const { userId } = getValues();
    const isVaild = await validUserId(userId);
    if (isVaild) {
      checkUserId.mutate(userId);
    } else {
      Swal.fire({
        icon: 'error',
        title: '유효하지 않은 아이디 입니다.',
        text: '영문과 숫자를 조합해 5자 이상 입력해 주세요',
      });
    }
  };
  // <-----------------------------------권한----------------------------------->
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
  // <-----------------------------------유저 생성----------------------------------->
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
      setUserIdValidation(false);
      reset();
    } else {
      Swal.fire({
        icon: 'error',
        title: '아이디 중복 검사를 진행해주세요.',
      });
    }
  };

  return (
    <StFrom onSubmit={handleSubmit(submitSignInfoHandler)}>
      <StH1 style={{ width: '500px' }}>유저 생성</StH1>
      {/* <------------------------------이름-----------------------------> */}
      <CustomLabel>
        이름
        <CustomInput
          inputType="login"
          style={{ width: '500px' }}
          placeholder="직원의 이름을 입력해주세요"
          {...register('userName', {
            required: '필수 입력값 입니다',
          })}
        />
      </CustomLabel>
      {errors.userName && <VaildP>{errors.userName.message}</VaildP>}
      {/* <----------------------------------부서----------------------------------> */}
      <CustomLabel>
        팀
        <CustomInput
          inputType="login"
          style={{ width: '500px' }}
          placeholder="직원의 팀을 입력해주세요"
          {...register('team', {
            required: '필수 입력값 입니다',
          })}
        />
      </CustomLabel>
      {errors.team && <VaildP>{errors.team.message}</VaildP>}
      {/* <-----------------------------직급&직무-----------------------------> */}
      <Wrapper_Row style={{ gap: '20px' }}>
        <Wrapper_Column>
          <CustomLabel>
            직급
            <CustomInput
              inputType="login"
              style={{ width: '240px' }}
              placeholder="직원의 직급을 입력해주세요"
              {...register('rank', {
                required: '필수 입력값 입니다',
              })}
            />
          </CustomLabel>
          {errors.rank && (
            <VaildP style={{ margin: '15px 0' }}>{errors.rank.message}</VaildP>
          )}
        </Wrapper_Column>
        <Wrapper_Column>
          <CustomLabel>
            직무
            <CustomInput
              inputType="login"
              style={{ width: '240px' }}
              placeholder="직원의 직무를 입력해주세요"
              {...register('job', {
                required: '필수 입력값 입니다',
              })}
            />
          </CustomLabel>
          {errors.job && (
            <VaildP style={{ margin: '15px 0' }}>{errors.job.message}</VaildP>
          )}
        </Wrapper_Column>
      </Wrapper_Row>
      {/* <------------------------월급일&입사일------------------------> */}
      <Wrapper_Row style={{ gap: '20px' }}>
        <Wrapper_Column>
          <CustomLabel>
            월급일
            <CustomInput
              inputType="login"
              style={{ width: '240px' }}
              placeholder="직원의 월급일을 입력해주세요"
              maxLength={2}
              {...register('salaryDay', {
                required: '필수 입력값 입니다',
              })}
            />
          </CustomLabel>
          {errors.salaryDay && (
            <VaildP style={{ margin: '15px 0 -15px' }}>{errors.salaryDay.message}</VaildP>
          )}
        </Wrapper_Column>
        <Wrapper_Column>
          <CustomLabel>
            입사일
            <CustomInput
              inputType="login"
              style={{ width: '240px' }}
              type="date"
              placeholder="직원의 입사일을 입력해주세요"
              {...register('joinDay', {
                required: '필수 입력값 입니다',
              })}
            />
          </CustomLabel>
          {errors.joinDay && (
            <VaildP style={{ margin: '15px 0 -15px' }}>{errors.joinDay.message}</VaildP>
          )}
        </Wrapper_Column>
      </Wrapper_Row>
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
        }}
      >
        권한&nbsp;(필수)
      </Dropdown>
      {/* <-----------------------------아이디-----------------------------> */}
      <Wrapper_Row style={{ alignItems: 'center', gap: '20px', marginTop: '-30px' }}>
        <CustomLabel>
          아이디
          <CustomInput
            inputType="login"
            style={{ width: '336px' }}
            placeholder="영문과 숫자를 조합해 5자 이상 입력해 주세요"
            {...register('userId', {
              required: '필수 입력값 입니다',
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{5,}$/,
                message: '영문과 숫자를 조합해 5자 이상 입력해 주세요',
              },
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
      {errors.userId && <VaildP>{errors.userId.message}</VaildP>}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '68px' }}>
        <CustomButton buttonType="blackBackground">생성</CustomButton>
      </div>
    </StFrom>
  );
};
export default CreateUser;
