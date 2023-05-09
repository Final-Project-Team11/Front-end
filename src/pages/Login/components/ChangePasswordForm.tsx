import React from 'react';
import CustomModal from '../../../components/Atoms/Modal/CustomModal';
import { SubmitForm } from '../styles';
import { useForm } from 'react-hook-form';
import { ErrorP } from '../../MasterSignup/styles';
import CustomLabel from '../../../components/Atoms/Label/CustomLabel';
import CustomInput from '../../../components/Atoms/Input/CustomInput';
import { useRePassword } from '../hooks/useRePassword';
import { COLOR } from '../../../styles/colors';
import CustomButton from '../../../components/Atoms/Button/CustomButton';
import { useLogin } from '../hooks/useLogin';
import { UserLoginInfo } from './UserLoginForm';

type ChangPasswordProps = {
  closeModal: () => void;
  loginInfo: UserLoginInfo;
};

export type ChangePasswordInfo = {
  changePassword: string;
  changePasswordCheck: string;
};

const ChangePasswordForm = ({ closeModal, loginInfo }: ChangPasswordProps) => {
  const { patchPassword } = useRePassword();
  const { loginHandler } = useLogin('auth/user');

  const changePasswordHandler = async (data: ChangePasswordInfo) => {
    const passwordChangeInfo = {
      userId: loginInfo.userId,
      password: data.changePassword,
    };
    const changeLoginInfo = {
      companyId: loginInfo.companyId,
      userId: loginInfo.userId,
      password: data.changePassword,
    };

    await patchPassword(passwordChangeInfo);
    // await loginHandler(changeLoginInfo);
    closeModal();
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ChangePasswordInfo>();
  const changePassword = watch('changePassword');

  return (
    <CustomModal closeModal={closeModal} disableClickOutside={true}>
      <SubmitForm
        style={{
          width: 'fit-content',
          height: 'fit-content',
          padding: '50px',
          boxSizing: 'border-box',
          alignItems: 'center',
        }}
        onSubmit={handleSubmit(changePasswordHandler)}
      >
        <p style={{ fontSize: '20px', fontWeight: 'bolder' }}>비밀번호 변경</p>
        <p style={{ fontSize: '12px', color: `${COLOR.GRAY2}`, marginTop: '-20px' }}>
          최초 로그인 시 비밀번호를 변경해야 합니다.
        </p>
        <CustomLabel>
          비밀번호
          <CustomInput
            inputType="login"
            type="password"
            maxLength={15}
            placeholder="숫자, 특수문자를 포함하는 8자~15자"
            {...register('changePassword', {
              required: '비밀번호는 필수 입력값입니다',
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[!@#$%^&*()_+\-={};':"\\|,.<>?~])[A-Za-z\d!@#$%^&*()_+\-={};':"\\|,.<>?~]{8,15}$/,
                message: '숫자, 특수문자를 포함하는 8자~15자를 입력해주세요',
              },
            })}
          ></CustomInput>
        </CustomLabel>
        {errors.changePassword && <ErrorP>{errors.changePassword.message}</ErrorP>}
        <CustomLabel>
          비밀번호 확인
          <CustomInput
            inputType="login"
            maxLength={15}
            type="password"
            placeholder="숫자, 특수문자를 포함하는 8자~15자"
            {...register('changePasswordCheck', {
              required: '비밀번호 확인은 필수 입력값입니다',
              validate: value =>
                value === changePassword || '비밀번호가 일치하지 않습니다',
            })}
          >
            변경할 비밀번호
          </CustomInput>
        </CustomLabel>
        {errors.changePasswordCheck && (
          <ErrorP>{errors.changePasswordCheck.message}</ErrorP>
        )}
        <CustomButton buttonType="blackBackground" style={{ width: '430px' }}>
          변경하기
        </CustomButton>
      </SubmitForm>
    </CustomModal>
  );
};

export default ChangePasswordForm;
