import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
// 👆 라이브러리
import CustomButton from '../../../components/Atoms/Button/CustomButton';
import CustomInput from '../../../components/Atoms/Input/CustomInput';
// 👆 Atom-component
import { TextWrapper, SubmitForm, StSpan } from '../styles';
import { useLogin } from '../hooks/useLogin';

export type AdminLoginInfo = {
  companyId: string;
  password: string;
};

const AdminLoginForm = () => {
  // react-hook-form의 객체를 생성
  const { register, handleSubmit, reset } = useForm<AdminLoginInfo>();
  // hook에 제출 함수를 가져옴
  const { loginHandler } = useLogin(reset, 'auth/admin');
  const navigate = useNavigate();

  //아이디/비밀번호 찾기 클릭 시 표출
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
      <TextWrapper>
        <StSpan>
          미어캣린더가 처음이라면!&nbsp;
          <StSpan
            onClick={() => navigate('/masterSignup')}
            style={{ fontWeight: 'bold' }}
          >
            회원가입
          </StSpan>
        </StSpan>
        <StSpan onClick={Waiting}>아이디 / 비밀번호 찾기</StSpan>
      </TextWrapper>
      <CustomButton buttonType="login">로그인</CustomButton>
    </SubmitForm>
  );
};

export default AdminLoginForm;
