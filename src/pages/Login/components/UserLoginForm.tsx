import { useForm } from 'react-hook-form';
// 👆 라이브러리
import CustomButton from '../../../components/Atoms/Button/CustomButton';
import CustomInput from '../../../components/Atoms/Input/CustomInput';
// 👆 Atom-component
import { useLogin } from '../hooks/useUserLogin';
import { SubmitForm } from '../styles';
import { AdminLoginInfo } from './AdminLoginForm';

export type UserLoginInfo = AdminLoginInfo & {
  userId: string;
};

const UserLoginForm = () => {
  // react-hook-form의 객체를 생성
  const { register, handleSubmit, reset } = useForm<UserLoginInfo>();
  // hook에 제출 함수를 가져옴
  const { userLoginHandler } = useLogin(reset);

  return (
    <SubmitForm onSubmit={handleSubmit(userLoginHandler)}>
      <CustomInput
        inputType="login"
        placeholder="대표자 아이디를 입력해주세요"
        {...register('companyId', {
          required: true,
        })}
      />
      <CustomInput
        inputType="login"
        placeholder="직원 아이디를 입력해주세요"
        {...register('userId', {
          required: true,
        })}
      />
      <CustomInput
        inputType="login"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        {...register('password', {
          required: true,
        })}
      />
      <CustomButton
        buttonType="login"
        style={{
          color: '#E64042',
          fontSize: '15px',
          fontWeight: 'bold',
          borderRadius: '7px',
          background: '#F6F6F6',
          marginTop: '20px',
        }}
      >
        로그인
      </CustomButton>
      {/* {showModal && (
            <Modal closeModal={closeModal}>
              <MaxInput
                types="login"
                type="password"
                value={password}
                onChange={changePasswordHandler}
              >
                변경할 비밀번호
              </MaxInput>
              <button>변경하기</button>
            </Modal>
          )} */}
    </SubmitForm>
  );
};

export default UserLoginForm;
