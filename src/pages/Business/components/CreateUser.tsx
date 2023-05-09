import React, { useEffect } from 'react';
import Dropdown from '../../../components/Atoms/Dropdown/Dropdown';
import { useUserIdValidation } from '../hooks/useUserIdValidation';
import CustomLabel from '../../../components/Atoms/Label/CustomLabel';
import CustomInput from '../../../components/Atoms/Input/CustomInput';
import CustomButton from '../../../components/Atoms/Button/CustomButton';
import { useForm } from 'react-hook-form';
import Wrapper_Row from '../../../components/Atoms/Wrapper_Row/Wrapper_Row';
import Swal from 'sweetalert2';
import { useSignup } from '../hooks/useSignup';
import { StFrom, StH1 } from '../styles';
import Wrapper_Column from '../../../components/Atoms/Wrapper_Column/Wrapper_Column';
import { COLOR } from '../../../styles/colors';
import { ErrorP } from '../../MasterSignup/styles';

type UserSignupInfoPlus = {
  userName: string;
  team: string;
  rank: string;
  job: string;
  salaryDay: number;
  joinDay: string;
  authLevel: number | string;
  userId: string;
  auth: number | string;
};

const CreateUser = () => {
  // <-----------------------------------React-Hook-Form----------------------------------->
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    reset,
    setValue,
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

  const userIdCheck = watch('userId');
  useEffect(() => {
    setUserIdValidation(false);
  }, [userIdCheck]);
  // <-----------------------------------권한----------------------------------->
  type Auth = {
    auth: number | string;
  };
  const [auth, setAuth] = React.useState<Auth>({ auth: '' });
  const selecteAuthHandler = (value: number | string) => {
    setAuth({ auth: value });
    setValue('auth', value, { shouldValidate: true });
  };

  // 권한 드롭 다운 배열
  const authority = [
    { name: '관리자', value: 2 },
    { name: '직원', value: 3 },
  ];

  useEffect(() => {
    register('auth', {
      required: '필수 선택 값입니다',
    });
  }, [register]);
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
        <Wrapper_Row>
          이름&nbsp;<span style={{ color: `${COLOR.POINT_C}` }}>*</span>
        </Wrapper_Row>
        <CustomInput
          inputType="login"
          style={{ width: '500px' }}
          placeholder="직원의 이름을 입력해주세요"
          {...register('userName', {
            required: '필수 입력값입니다',
          })}
        />
      </CustomLabel>
      {errors.userName && <ErrorP>{errors.userName.message}</ErrorP>}
      {/* <----------------------------------부서----------------------------------> */}
      <CustomLabel>
        <Wrapper_Row>
          팀&nbsp;<span style={{ color: `${COLOR.POINT_C}` }}>*</span>
        </Wrapper_Row>
        <CustomInput
          inputType="login"
          style={{ width: '500px' }}
          placeholder="직원의 팀을 입력해주세요"
          {...register('team', {
            required: '필수 입력값입니다',
          })}
        />
      </CustomLabel>
      {errors.team && <ErrorP>{errors.team.message}</ErrorP>}
      {/* <-----------------------------직급&직무-----------------------------> */}
      <Wrapper_Row style={{ gap: '20px' }}>
        <Wrapper_Column>
          <CustomLabel>
            <Wrapper_Row>
              직급&nbsp;<span style={{ color: `${COLOR.POINT_C}` }}>*</span>
            </Wrapper_Row>
            <CustomInput
              inputType="login"
              style={{ width: '240px' }}
              placeholder="직원의 직급을 입력해주세요"
              {...register('rank', {
                required: '필수 입력값입니다',
              })}
            />
          </CustomLabel>
          {errors.rank && (
            <ErrorP style={{ margin: '15px 0 -15px' }}>{errors.rank.message}</ErrorP>
          )}
        </Wrapper_Column>
        <Wrapper_Column>
          <CustomLabel>
            <Wrapper_Row>
              직무&nbsp;<span style={{ color: `${COLOR.POINT_C}` }}>*</span>
            </Wrapper_Row>
            <CustomInput
              inputType="login"
              style={{ width: '240px' }}
              placeholder="직원의 직무를 입력해주세요"
              {...register('job', {
                required: '필수 입력값입니다',
              })}
            />
          </CustomLabel>
          {errors.job && (
            <ErrorP style={{ margin: '15px 0 -15px' }}>{errors.job.message}</ErrorP>
          )}
        </Wrapper_Column>
      </Wrapper_Row>
      {/* <------------------------월급일&입사일------------------------> */}
      <Wrapper_Row style={{ gap: '20px' }}>
        <Wrapper_Column>
          <CustomLabel>
            <Wrapper_Row>
              월급일&nbsp;<span style={{ color: `${COLOR.POINT_C}` }}>*</span>
            </Wrapper_Row>
            <CustomInput
              inputType="login"
              style={{ width: '240px' }}
              placeholder="직원의 월급일을 입력해주세요"
              maxLength={2}
              {...register('salaryDay', {
                required: '필수 입력값입니다',
                pattern: {
                  value: /^(0?[1-9]|[12][0-8])$/,
                  message: '1~28의 숫자만 입력 가능합니다',
                },
              })}
            />
          </CustomLabel>
          {errors.salaryDay && (
            <ErrorP style={{ margin: '15px 0 -15px' }}>{errors.salaryDay.message}</ErrorP>
          )}
        </Wrapper_Column>
        <Wrapper_Column>
          <CustomLabel>
            <Wrapper_Row>
              입사일&nbsp;<span style={{ color: `${COLOR.POINT_C}` }}>*</span>
            </Wrapper_Row>
            <CustomInput
              inputType="login"
              style={{ width: '240px' }}
              type="date"
              placeholder="직원의 입사일을 입력해주세요"
              {...register('joinDay', {
                required: '필수 입력값입니다',
              })}
            />
          </CustomLabel>
          {errors.joinDay && (
            <ErrorP style={{ margin: '15px 0 -15px' }}>{errors.joinDay.message}</ErrorP>
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
        권한<span style={{ color: `${COLOR.POINT_C}` }}>*</span>
      </Dropdown>
      {/* <-----------------------------아이디-----------------------------> */}
      <Wrapper_Row style={{ alignItems: 'center', gap: '20px', marginTop: '-30px' }}>
        <CustomLabel>
          {errors.auth && (
            <ErrorP style={{ marginBottom: '0px' }}>{errors.auth.message}</ErrorP>
          )}
          <Wrapper_Row>
            아이디&nbsp;<span style={{ color: `${COLOR.POINT_C}` }}>*</span>
          </Wrapper_Row>
          <CustomInput
            inputType="login"
            style={{ width: '336px' }}
            placeholder="영문과 숫자를 조합해 5자 이상 입력해 주세요"
            {...register('userId', {
              required: '필수 입력값입니다',
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{5,}$/,
                message: '영문과 숫자를 조합해 5자 이상 입력해 주세요',
              },
            })}
          />
        </CustomLabel>
        {userIdValidation ? (
          <CustomButton
            type="button"
            buttonType="cUser"
            style={{
              margin: '30px 0 0 15px',
              background: `${COLOR.FONT_COLOR}`,
              color: '#fff',
            }}
          >
            ✔
          </CustomButton>
        ) : (
          <CustomButton
            buttonType="cUser"
            type="button"
            style={{ margin: '30px 0 0 15px' }}
            onClick={checkUserIdHandler}
          >
            중복 확인
          </CustomButton>
        )}
      </Wrapper_Row>
      {errors.userId && <ErrorP>{errors.userId.message}</ErrorP>}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '68px' }}>
        <CustomButton buttonType="blackBackground">생성</CustomButton>
      </div>
    </StFrom>
  );
};
export default CreateUser;
