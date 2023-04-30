import { StForm } from '../styles';
import CustomLabel from '../../../components/Atoms/Label/CustomLabel';
import CustomInput from '../../../components/Atoms/Input/CustomInput';
import Wrapper_Row from '../../../components/Atoms/Wrapper_Row/Wrapper_Row';
import CustomButton from '../../../components/Atoms/Button/CustomButton';
import DaumAddressAPI from '../hooks/DaumAddressAPI';
// 👆 components
import React from 'react';
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
    });
  };

  // <-----------------------사업자 번호 유효성 체크 ----------------------->
  const { checkCompanyNum } = useCompanyNumCheck();
  const checkCompanyNumHandler = () => {
    const { companyNum } = getValues();
    checkCompanyNum(companyNum);
  };
  const maxLength = 10;
  // <-------------------------------------주소------------------------------------->

  const handleAddressSelected = (postcode: string, roadAddress: string) => {
    const halfAddress = `${postcode} ${roadAddress}`;
    setValue('address', halfAddress);
  };
  // <-------------------------아이디 유효성&중복체크------------------------->
  const { validcompanyId, checkCompanyId, companyIdValidation } =
    useCompanyIdValidation();

  const checkCompanyIdHandler = () => {
    const { companyId } = getValues();
    validcompanyId(companyId);
    if (companyIdValidation) {
      checkCompanyId.mutate(companyId);
    } else {
      setValue('companyId', '');
      Swal.fire({
        icon: 'error',
        title: '유효하지 않은 아이디 입니다.',
        text: '아이디 양식을 다시 재확인 해주세요.',
      });
    }
  };
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
        상호명
        <CustomInput
          inputType="signup"
          placeholder="상호명을 입력해주세요."
          {...register('companyName', {
            required: true,
          })}
        />
      </CustomLabel>
      {/* <-----------------------상호명-----------------------> */}

      {/* <-----------------------사업자등록번호-----------------------> */}
      <Wrapper_Row style={{ alignItems: 'center' }}>
        <CustomLabel>
          사업자 등록번호
          <CustomInput
            inputType="signup"
            maxLength={maxLength}
            placeholder="-을 제외하고 입력해주세요."
            {...register('companyNum', {
              required: true,
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
          인증 하기
        </CustomButton>
        {/* <-----------------------사업자등록번호-----------------------> */}

        {/* <-----------------------주소-----------------------> */}
      </Wrapper_Row>
      <DaumAddressAPI selectedAddressHandler={handleAddressSelected} />
      <CustomLabel>
        상세주소
        <CustomInput
          inputType="signup"
          placeholder="상세 주소를 입력해주세요."
          {...register('detailAddress', {
            required: true,
          })}
        />
      </CustomLabel>
      {/* <-----------------------주소-----------------------> */}

      {/* <------------------대표자 성명------------------> */}
      <CustomLabel style={{ marginTop: '50px' }}>
        대표자 성명
        <CustomInput
          inputType="signup"
          placeholder="대표자의 성명을 입력해주세요."
          {...register('ceoName', {
            required: true,
          })}
        />
      </CustomLabel>
      {/* <------------------대표자 성명------------------> */}

      {/* <------------------휴대폰 번호------------------> */}
      <CustomLabel>
        대표자 핸드폰 번호
        <CustomInput
          inputType="signup"
          placeholder="-을 제외하고 입력해주세요."
          {...register('ceoNum', {
            required: true,
            maxLength: {
              value: 11,
              message: '휴대폰 번호를 다시 확인해주세요',
            },
            pattern: {
              value: /^[0-9]{11}$/,
              message: '휴대폰 번호를 다시 확인해주세요',
            },
          })}
        />
        {errors.ceoNum && (
          <p style={{ fontSize: '15px', color: `${COLOR.POINT_C}` }}>
            {errors.ceoNum.message}
          </p>
        )}
      </CustomLabel>
      {/* <------------------핸드폰 번호------------------> */}

      {/* <-----------------------이메일-----------------------> */}
      <Wrapper_Row style={{ alignItems: 'center' }}>
        <CustomLabel>
          이메일
          <CustomInput
            inputType="signup"
            placeholder="전체 이메일을 입력해주세요"
            {...register('companyId', {
              required: true,
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
      {/* <-----------------------이메일-----------------------> */}

      {/* <-----------------------아이디-----------------------> */}
      <Wrapper_Row style={{ alignItems: 'center' }}>
        <CustomLabel>
          아이디
          <CustomInput
            inputType="signup"
            placeholder="영 대, 소문자, 숫자 5자 이상 입력해주세요."
            {...register('companyId', {
              required: true,
            })}
          />
        </CustomLabel>
        <CustomButton
          buttonType="valid"
          type="button"
          onClick={checkCompanyIdHandler}
          style={{ margin: '30px 0 0 15px' }}
        >
          중복 확인
        </CustomButton>
      </Wrapper_Row>
      {/* <-----------------------아이디-----------------------> */}

      {/* <-----------------------비밀번호-----------------------> */}
      <CustomLabel>
        비밀번호
        <CustomInput
          inputType="signup"
          type="password"
          placeholder="영 대,소문자, 숫자, 특수문자 중 숫자, 특수문자를 포함하는 8자~15자"
          {...register('password', {
            required: true,
            pattern: {
              value:
                /^(?=.*\d)(?=.*[!@#$%^&*()_+\-={};':"\\|,.<>?~])[A-Za-z\d!@#$%^&*()_+\-={};':"\\|,.<>?~]{8,15}$/,
              message: '비밀번호 형식이 올바르지 않습니다',
            },
          })}
        />
        {errors.password && (
          <p style={{ fontSize: '15px', color: `${COLOR.POINT_C}` }}>
            {errors.password.message}
          </p>
        )}
      </CustomLabel>
      {/* <-----------------------비밀번호-----------------------> */}

      {/* <-----------------------비밀번호 재입력-----------------------> */}
      <CustomLabel>
        비밀번호 확인
        <CustomInput
          inputType="signup"
          type="password"
          placeholder="비밀번호를 한 번 더 입력해주세요."
          {...register('confirmPassword', {
            required: true,
            validate: value => value === password || '비밀번호가 일치하지 않습니다',
          })}
        />
        {errors.confirmPassword && (
          <p style={{ fontSize: '15px', color: `${COLOR.POINT_C}` }}>
            {errors.confirmPassword.message}
          </p>
        )}
      </CustomLabel>
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
