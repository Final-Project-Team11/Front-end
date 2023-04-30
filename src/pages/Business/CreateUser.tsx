import React from 'react';
import { UserSignupInfo } from './interfaces';
import Dropdown from '../../components/Atoms/Dropdown/Dropdown';
import ReactDatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import { useUserIdValidation } from './hooks/useUserIdValidation';
import { useSignup } from './hooks/useSignup';
import 'react-datepicker/dist/react-datepicker.css';
import CustomLabel from '../../components/Atoms/Label/CustomLabel';
import CustomInput from '../../components/Atoms/Input/CustomInput';
import CustomButton from '../../components/Atoms/Button/CustomButton';

const CreateUser = () => {
  // 유저생성 상태변수
  const [userInfo, setUserInfo] = React.useState<UserSignupInfo>({
    userName: '',
    team: '',
    rank: '',
    job: '',
    userId: '',
    joinDay: new Date(),
    salaryDay: '',
    authLevel: 0,
  });
  // 유저생성 인풋 체인지 핸들러
  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updateUserInfo = name === 'salaryDay' ? Number(value) : value;
    setUserInfo({ ...userInfo, [name]: updateUserInfo });
  };
  // datepicker handler
  const changeDateHandler = (date: Date) => {
    setUserInfo({ ...userInfo, joinDay: date });
  };
  // 아이디 유호성 검사, 중복확인 핸들러
  const checkUserIdHandler = (item: string) => {
    if (validUserId(item)) {
      checkUserId.mutate(item);
    } else {
      setUserIdValidation(false);
      alert('아이디 양식을 재확인 해주세요');
    }
  };
  // 아이디 유효성 검사, 중복확인 콜백함수
  const { validUserId, checkUserId, userIdValidation, setUserIdValidation } =
    useUserIdValidation();

  const { signup } = useSignup();

  // 유저생성 권한 드롭 다운 체인지 핸들러
  const selecteAuthorityHandler = (value: number | string) => {
    setUserInfo({ ...userInfo, authLevel: Number(value) });
  };

  // 권한 드롭 다운 배열
  const authority = [
    { name: '관리자', value: 2 },
    { name: '직원', value: 3 },
  ];

  const submitSignInfoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userIdValidation) {
      signup.mutate(userInfo);
    } else {
      alert('가입에 실패하였습니다 입력한 내용을 확인해주세요');
    }
  };

  return (
    <form
      onSubmit={submitSignInfoHandler}
      style={{
        width: '500px',
        margin: '50px 210px 50px 210px',

        display: 'flex',
        flexDirection: 'column',
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

      <CustomLabel>
        이름
        <CustomInput
          inputType="signup"
          type="text"
          value={userInfo.userName}
          name="userName"
          onChange={changeInputHandler}
        />
      </CustomLabel>
      <CustomLabel>
        부서
        <CustomInput
          inputType="signup"
          type="text"
          value={userInfo.team}
          name="team"
          onChange={changeInputHandler}
        />
      </CustomLabel>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
        <CustomLabel>
          직급
          <CustomInput
            inputType="signup"
            type="text"
            value={userInfo.rank}
            name="rank"
            onChange={changeInputHandler}
          />
        </CustomLabel>
        <CustomLabel>
          직무
          <CustomInput
            inputType="signup"
            type="text"
            value={userInfo.job}
            name="job"
            onChange={changeInputHandler}
          />
        </CustomLabel>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
        입사일
        <ReactDatePicker
          selected={userInfo.joinDay}
          onChange={changeDateHandler}
          locale={ko}
          dateFormat="yyyy년 MM월 dd일"
        />
        <CustomLabel>
          월급일
          <CustomInput
            inputType="signup"
            type="text"
            value={userInfo.salaryDay}
            name="salaryDay"
            onChange={changeInputHandler}
          />
        </CustomLabel>
      </div>
      <Dropdown
        size="small"
        items={authority}
        value={userInfo.authLevel}
        onChange={selecteAuthorityHandler}
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
        권한
      </Dropdown>
      <CustomLabel>
        아이디
        <CustomInput
          inputType="signup"
          type="text"
          value={userInfo.userId}
          name="userId"
          onChange={changeInputHandler}
        />
        <CustomButton
          buttonType="signup"
          onClick={() => checkUserIdHandler(userInfo.userId)}
        >
          중복 검사
        </CustomButton>
      </CustomLabel>
      <CustomButton
        buttonType="login"
        style={{
          width: '500px',
          boxShadow: '0 4px 4px rgba(201, 201, 201, 0.25)',
          background: '#E64042',
          color: '#fff',
          borderRadius: '7px',
          fontSize: '15px',
          fontWeight: 'bold',
        }}
      >
        유저 생성
      </CustomButton>
    </form>
  );
};
export default CreateUser;
