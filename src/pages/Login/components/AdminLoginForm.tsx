import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
// 👆 라이브러리
import CustomButton from '../../../components/Atoms/Button/CustomButton';
import CustomInput from '../../../components/Atoms/Input/CustomInput';
// 👆 Atom-component
import { TextWrapper, SubmitForm, StSpan, StSignupSpan } from '../styles';
import { useLogin } from '../hooks/useLogin';
import { ErrorP } from '../../MasterSignup/styles';
import { COLOR } from '../../../styles/colors';

export type AdminLoginInfo = {
  companyId: string;
  userId: string;
  password: string;
};

const AdminLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminLoginInfo>();

  const { loginHandler } = useLogin('auth/admin');
  const navigate = useNavigate();

  const Waiting = () => {
    Swal.fire({
      icon: 'info',
      title: '준비 중인 기능입니다.',
    });
  };

  return (
    <SubmitForm onSubmit={handleSubmit(loginHandler)}>
      <CustomInput
        inputType="login"
        placeholder="대표자 아이디를 입력해주세요"
        {...register('companyId', {
          required: '아이디를 입력해주세요',
        })}
      />
      {errors.companyId && <ErrorP>{errors.companyId.message}</ErrorP>}
      <CustomInput
        inputType="login"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        {...register('password', {
          required: '비밀번호를 입력해주세요',
        })}
      />
      {errors.password && <ErrorP>{errors.password.message}</ErrorP>}
      <TextWrapper>
        <StSpan>
          미어캣린더가 처음이라면!&nbsp;
          <StSignupSpan
            onClick={() => navigate('/masterSignup')}
            style={{ fontWeight: 'bold' }}
          >
            회원가입
          </StSignupSpan>
        </StSpan>
        <StSignupSpan
          onClick={Waiting}
          style={{ fontSize: '12px', color: `${COLOR.GRAY2}` }}
        >
          아이디 / 비밀번호 찾기
        </StSignupSpan>
      </TextWrapper>
      <CustomButton buttonType="login">로그인</CustomButton>
    </SubmitForm>
  );
};

export default AdminLoginForm;
