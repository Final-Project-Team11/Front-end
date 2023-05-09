import { useForm } from 'react-hook-form';
// 👆 라이브러리
import CustomButton from '../../../components/Atoms/Button/CustomButton';
import CustomInput from '../../../components/Atoms/Input/CustomInput';
import { ErrorP } from '../../MasterSignup/styles';
import { SubmitForm } from '../styles';
import ChangePasswordForm from './ChangePasswordForm';
// 👆 component
import { useLogin } from '../hooks/useLogin';
import React from 'react';
// 👆 hook

export type UserLoginInfo = {
  companyId: string;
  userId: string;
  password: string;
  changePassword: string;
  changePasswordCheck: string;
};

const UserLoginForm = () => {
  // React-Hook_Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<UserLoginInfo>();

  // Hooks
  const { loginHandler, showModal, setShowModal } = useLogin('auth/user');

  const closeModal = () => {
    setShowModal(false);
    setValue('password', '');
  };

  const [loginDatam, setLoginData] = React.useState<UserLoginInfo>({
    companyId: '',
    userId: '',
    password: '',
    changePassword: '',
    changePasswordCheck: '',
  });
  const submitHandler = (data: UserLoginInfo) => {
    const userLoginInfo = {
      companyId: data.companyId,
      userId: data.userId,
      password: data.password,
    };
    loginHandler(userLoginInfo);
    setLoginData(data);
  };

  return (
    <>
      <SubmitForm onSubmit={handleSubmit(submitHandler)}>
        <CustomInput
          inputType="login"
          placeholder="대표자 아이디를 입력해주세요"
          {...register('companyId', {
            required: '대표자 아이디를 입력해주세요',
          })}
        />
        {errors.companyId && <ErrorP>{errors.companyId.message}</ErrorP>}
        <CustomInput
          inputType="login"
          placeholder="직원 아이디를 입력해주세요"
          {...register('userId', {
            required: '아이디를 입력해주세요',
          })}
        />
        {errors.userId && <ErrorP>{errors.userId.message}</ErrorP>}
        <CustomInput
          inputType="login"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          {...register('password', {
            required: '비밀번호를 입력해주세요',
          })}
        />
        {errors.password && <ErrorP>{errors.password.message}</ErrorP>}
        <CustomButton
          buttonType="login"
          style={{
            marginTop: '24px',
          }}
        >
          로그인
        </CustomButton>
      </SubmitForm>
      {showModal && <ChangePasswordForm closeModal={closeModal} loginInfo={loginDatam} />}
    </>
  );
};

export default UserLoginForm;
