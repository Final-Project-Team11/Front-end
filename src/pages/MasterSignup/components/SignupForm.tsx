import { ErrorP, StForm } from '../styles';
import CustomLabel from '../../../components/Atoms/Label/CustomLabel';
import CustomInput from '../../../components/Atoms/Input/CustomInput';
import Wrapper_Row from '../../../components/Atoms/Wrapper_Row/Wrapper_Row';
import CustomButton from '../../../components/Atoms/Button/CustomButton';
import DaumAddressAPI from '../hooks/DaumAddressAPI';
// 👆 components
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AdminLoginInfo } from '../../Login/components/AdminLoginForm';
import { useCompanyNumCheck } from '../hooks/useCompanyNumCheck';
import Swal from 'sweetalert2';
import { COLOR } from '../../../styles/colors';
import { useCompanyIdValidation } from '../hooks/useCompanyIdValidation';
import { useNavigate } from 'react-router-dom';
import { useSignup } from '../hooks/useSignup';

export type AdminSignupInfoPlus = AdminLoginInfo & {
  // companyId: string;
  // password: string;
  companyName: string;
  address: string;
  ceoName: string;
  ceoNum: string;
  companyNum: string;
  // 필요없는
  confirmPassword: string;
  detailAddress: string;
  companyEmail: string;
};

const SignupForm = () => {
  const navigate = useNavigate();

  // react-hook-form의 객체를 생성
  const {
    register,
    getValues,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<AdminSignupInfoPlus>({ mode: 'onChange' });

  const waiting = () => {
    Swal.fire({
      icon: 'info',
      title: '준비 중인 기능입니다.',
      text: '현재는 이메일 유효성에 대한 검사만 제공합니다',
    });
  };

  // <-----------------------사업자 번호 유효성 체크 ----------------------->
  const { checkCompanyNum, isValid, setIsValid } = useCompanyNumCheck();
  const checkCompanyNumHandler = () => {
    const { companyNum } = getValues();
    checkCompanyNum(companyNum);
  };

  const companyNumCheck = watch('companyNum');

  useEffect(() => {
    setIsValid(false);
  }, [companyNumCheck]);

  // <-------------------------------------주소------------------------------------->

  const handleAddressSelected = (postcode: string, roadAddress: string) => {
    const halfAddress = `${postcode} ${roadAddress}`;
    setValue('address', halfAddress);
  };

  const address = watch('address');
  console.log('주소', address);
  // <-------------------------아이디 유효성&중복체크------------------------->
  const { validcompanyId, companyIdValidation, setCompanyIdValidation } =
    useCompanyIdValidation();

  const companyId = watch('companyId');

  const checkCompanyIdHandler = async () => {
    validcompanyId(companyId);
  };

  console.log(companyIdValidation);

  useEffect(() => {
    setCompanyIdValidation(false);
  }, [companyId]);

  // <-------------------------비밀번호, 비밀번호 확인------------------------->
  const password = watch('password');
  // <-------------------------회원가입------------------------->
  const { signup } = useSignup();
  const submit = (data: AdminSignupInfoPlus) => {
    const fullAdress = data.address + ' ' + data.detailAddress;
    const newData = {
      companyId: data.companyId,
      password: data.password,
      companyName: data.companyName,
      address: fullAdress,
      ceoName: data.ceoName,
      ceoNum: data.ceoNum,
      companyNum: data.companyNum,
    };
    signup.mutate(newData);
  };

  return (
    <StForm onSubmit={handleSubmit(submit)}>
      {/* <-----------------------상호명-----------------------> */}
      <CustomLabel>
        <Wrapper_Row>
          상호명&nbsp;<span style={{ color: `${COLOR.POINT_C}` }}>*</span>
        </Wrapper_Row>
        <CustomInput
          inputType="signup"
          placeholder="상호명을 입력해주세요."
          {...register('companyName', {
            required: '상호명은 필수 입력값입니다',
          })}
        />
      </CustomLabel>
      {errors.companyName && <ErrorP>{errors.companyName.message}</ErrorP>}
      {/* <-----------------------상호명-----------------------> */}

      {/* <-----------------------사업자등록번호-----------------------> */}
      <Wrapper_Row style={{ alignItems: 'center' }}>
        <CustomLabel>
          <Wrapper_Row>
            사업자 등록번호&nbsp;<span style={{ color: `${COLOR.POINT_C}` }}>*</span>
          </Wrapper_Row>
          <CustomInput
            inputType="signup"
            maxLength={10}
            placeholder="-을 제외하고 입력해주세요."
            {...register('companyNum', {
              required: '사업자 등록번호는 필수 입력값입니다',
              pattern: {
                value: /^[0-9]{10}$/,
                message: '숫자 10자리를 입력해주세요',
              },
            })}
          />
        </CustomLabel>
        <CustomButton
          type="button"
          buttonType="valid"
          // 인증이 완료 되었을 때, 버튼을 추가적으로 못 누르게 하는 기능 필요
          onClick={checkCompanyNumHandler}
          style={{ margin: '30px 0 0 15px' }}
        >
          {isValid ? '✔' : '인증 하기'}
        </CustomButton>
      </Wrapper_Row>
      {errors.companyNum && <ErrorP>{errors.companyNum.message}</ErrorP>}
      {/* <-----------------------사업자등록번호-----------------------> */}

      {/* <-----------------------주소-----------------------> */}
      <DaumAddressAPI selectedAddressHandler={handleAddressSelected} />
      {address === undefined
        ? errors.detailAddress && <ErrorP>{'주소는 필수 입력값입니다'}</ErrorP>
        : null}
      <CustomLabel>
        <Wrapper_Row>
          상세 주소&nbsp;<span style={{ color: `${COLOR.POINT_C}` }}>*</span>
        </Wrapper_Row>
        <CustomInput
          inputType="signup"
          placeholder="상세 주소를 입력해주세요."
          {...register('detailAddress', {
            required: '상세주소는 필수 입력값입니다',
          })}
        />
      </CustomLabel>
      {errors.detailAddress && <ErrorP>{errors.detailAddress.message}</ErrorP>}
      {/* <-----------------------주소-----------------------> */}

      {/* <------------------대표자 성명------------------> */}
      <CustomLabel style={{ marginTop: '50px' }}>
        <Wrapper_Row>
          대표자 성명&nbsp;<span style={{ color: `${COLOR.POINT_C}` }}>*</span>
        </Wrapper_Row>
        <CustomInput
          inputType="signup"
          placeholder="대표자의 성명을 입력해주세요."
          {...register('ceoName', {
            required: '대표자 성명은 필수 입력값입니다',
          })}
        />
      </CustomLabel>
      {errors.ceoName && <ErrorP>{errors.ceoName.message}</ErrorP>}
      {/* <------------------대표자 성명------------------> */}

      {/* <------------------휴대폰 번호------------------> */}
      <CustomLabel>
        <Wrapper_Row>
          대표자 휴대폰 번호&nbsp;<span style={{ color: `${COLOR.POINT_C}` }}>*</span>
        </Wrapper_Row>
        <CustomInput
          inputType="signup"
          placeholder="-을 제외하고 입력해주세요."
          {...register('ceoNum', {
            required: '대표자 휴대폰 번호는 필수 입력값입니다',
            pattern: {
              value: /^010[0-9]{8}$/,
              message: '휴대폰 번호를 다시 확인해주세요',
            },
          })}
        />
      </CustomLabel>
      {errors.ceoNum && <ErrorP>{errors.ceoNum.message}</ErrorP>}
      {/* <------------------핸드폰 번호------------------> */}

      {/* <-----------------------이메일-----------------------> */}
      <Wrapper_Row style={{ alignItems: 'center' }}>
        <CustomLabel>
          <Wrapper_Row>
            이메일&nbsp;<span style={{ color: `${COLOR.POINT_C}` }}>*</span>
          </Wrapper_Row>
          <CustomInput
            inputType="signup"
            type="email"
            placeholder="전체 이메일을 입력해주세요"
            {...register('companyEmail', {
              required: '이메일은 필수 입력값입니다',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: '이메일 형식이 올바르지 않습니다',
              },
            })}
          />
        </CustomLabel>
        <CustomButton
          buttonType="valid"
          type="button"
          onClick={waiting}
          style={{ margin: '30px 0 0 15px' }}
        >
          인증 하기
        </CustomButton>
      </Wrapper_Row>
      {errors.companyEmail && <ErrorP>{errors.companyEmail.message}</ErrorP>}
      {/* <-----------------------이메일-----------------------> */}

      {/* <-----------------------아이디-----------------------> */}
      <Wrapper_Row style={{ alignItems: 'center' }}>
        <CustomLabel>
          <Wrapper_Row>
            아이디&nbsp;<span style={{ color: `${COLOR.POINT_C}` }}>*</span>
          </Wrapper_Row>
          <CustomInput
            inputType="signup"
            placeholder="영문과 숫자를 혼합해 5자 이상 입력해주세요"
            {...register('companyId', {
              required: '아이디는 필수 입력값입니다',
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/,
                message: '영문과 숫자를 혼합해 5자 이상 입력해주세요',
              },
            })}
          />
        </CustomLabel>
        <CustomButton
          buttonType="valid"
          type="button"
          onClick={checkCompanyIdHandler}
          style={{ margin: '30px 0 0 15px' }}
        >
          {companyIdValidation ? '✔' : '중복 확인'}
        </CustomButton>
      </Wrapper_Row>
      {errors.companyId && <ErrorP>{errors.companyId.message}</ErrorP>}
      {/* <-----------------------아이디-----------------------> */}

      {/* <-----------------------비밀번호-----------------------> */}
      <CustomLabel>
        <Wrapper_Row>
          비밀번호&nbsp;<span style={{ color: `${COLOR.POINT_C}` }}>*</span>
        </Wrapper_Row>
        <CustomInput
          inputType="signup"
          type="password"
          maxLength={15}
          placeholder="숫자, 특수문자를 포함하는 8자~15자"
          {...register('password', {
            required: '비밀번호는 필수 입력값입니다',
            pattern: {
              value:
                /^(?=.*\d)(?=.*[!@#$%^&*()_+\-={};':"\\|,.<>?~])[A-Za-z\d!@#$%^&*()_+\-={};':"\\|,.<>?~]{8,15}$/,
              message: '숫자, 특수문자를 포함하는 8자~15자를 입력해주세요',
            },
          })}
        />
      </CustomLabel>
      {errors.password && <ErrorP>{errors.password.message}</ErrorP>}
      {/* <-----------------------비밀번호-----------------------> */}

      {/* <-----------------------비밀번호 재입력-----------------------> */}
      <CustomLabel>
        <Wrapper_Row>
          비밀번호 확인&nbsp;<span style={{ color: `${COLOR.POINT_C}` }}>*</span>
        </Wrapper_Row>
        <CustomInput
          inputType="signup"
          type="password"
          placeholder="비밀번호를 한 번 더 입력해주세요."
          {...register('confirmPassword', {
            required: '비밀번호 확인을 진행해주세요',
            validate: value => value === password || '비밀번호가 일치하지 않습니다',
          })}
        />
      </CustomLabel>
      {errors.confirmPassword && <ErrorP>{errors.confirmPassword.message}</ErrorP>}
      {/* <-----------------------비밀번호 재입력-----------------------> */}
      <Wrapper_Row
        style={{
          width: '100%',
          marginTop: '100px',
          gap: '20px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CustomButton
          type="button"
          buttonType="submit"
          onClick={() => navigate('/login')}
          style={{ border: `1px solid ${COLOR.FONT_COLOR} `, background: '#fff' }}
        >
          돌아가기
        </CustomButton>
        <CustomButton
          buttonType="submit"
          style={{ color: '#fff', background: `${COLOR.SUB1}`, border: 'none' }}
        >
          회원가입
        </CustomButton>
      </Wrapper_Row>
    </StForm>
  );
};
export default SignupForm;
