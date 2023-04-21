import React from 'react';
import { StForm, BackGround, StH1, NameTag, EmailInput, Svg } from './styles';
import { StInput, StButton, StSpan } from './hooks/DaumAddressAPI';
import MaxInput from '../../components/Inputs/Input/MaxInput';
import ButtonInput from '../../components/Inputs/ButtonInput';
import Button from '../../components/Button/Button';
import { AdminSignupInfo } from './interfaces';
import { useCompanyIdValidation } from './hooks/useCompanyIdValidation';
import { useSignup } from './hooks/useSignup';
import { usePasswordCheck } from './hooks/usePasswordCheck';
import axios from 'axios';
import DaumAddressAPI from './hooks/DaumAddressAPI';
import { useCompanyNumCheck } from './hooks/useCompanyNumCheck';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import SignupHello from '../../assets/Meerkat/SignupHello';
import SignupMeerkat from '../../assets/Meerkat/SignupMeerkat';

const MasterSignup = () => {
  const navigate = useNavigate();
  const [signInfo, setSignInfo] = React.useState<AdminSignupInfo>({
    companyName: '',
    address: '',
    ceoName: '',
    ceoNum: '',
    companyId: '',
    password: '',
    companyNum: '',
  });

  const handleAddressSelected = (postcode: string, roadAddress: string) => {
    const fullAddress = `${postcode} ${roadAddress}`;
    setSignInfo(old => ({
      ...old,
      address: fullAddress,
    }));
  };

  // const [isValid, setIsValid] = React.useState<boolean | null>(false);

  // // 사업자 등록번호 조회 api
  // const COMPANYNUM_VALID_KEY = process.env.REACT_APP_COMPANYNUM_VALID_KEY;

  // const handleButtonClick = async () => {
  //   try {
  //     const response = await axios.post(
  //       `https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=${COMPANYNUM_VALID_KEY}`,
  //       {
  //         b_no: [signInfo.companyNum],
  //       },
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Accept: 'application/json',
  //         },
  //       }
  //     );
  //     const data = response.data.data[0];
  //     if (data.b_stt_cd === '01' || data.b_stt_cd === '02' || data.b_stt_cd === '03') {
  //       setIsValid(true);
  //     } else {
  //       setIsValid(false);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     setIsValid(false);
  //   }
  // };

  // 임시 사업자 등록번호 인증(숫자 10자리)
  const { isValid, validCompanyNumLength } = useCompanyNumCheck();

  const changeCompanyNumHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignInfo({ ...signInfo, [name]: value });
    validCompanyNumLength(value);
  };

  const checkCompanyNumHandler = () => {
    if (isValid) {
      alert('유효한 사업자 등록번호 입니다.');
    } else {
      alert('올바른 사업자 등록번호를 입력해주세요.');
    }
  };

  //주소 디테일 정보
  const [detailAddress, setDetailAddress] = React.useState('');

  // 아이디 유효성&중복체크
  const { validcompanyId, checkCompanyId, companyIdValidation, setCompanyValidation } =
    useCompanyIdValidation();

  // 비밀번호 유효성&일치체크
  const { validPassword, checkPasswordHandler } = usePasswordCheck(signInfo.password);

  // 패스워드 일치 확인
  const [checkPassword, setCheckPassword] = React.useState<string>('');

  // 회원 가입
  const { signup } = useSignup();

  //  Input Change
  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setSignInfo({ ...signInfo, [name]: value });
  };

  // 비밀번호 reCheck input
  const reCheckPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCheckPassword(value);
  };

  // 아이디 확인
  const checkCompanyIdHandler = (item: string) => {
    if (validcompanyId(item)) {
      checkCompanyId.mutate(item);
    } else {
      // setSignInfo({ ...signInfo, companyId: '' });
      setCompanyValidation(false);
      alert('아이디 양식을 재확인 해주세요');
    }
  };

  // 회원가입 버튼 클릭 시
  const submitSignInfoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newSignInfo = {
      ...signInfo,
      address: signInfo.address + detailAddress,
    };
    if (companyIdValidation && validPassword(signInfo.password) && isValid) {
      signup.mutate(newSignInfo);
    } else {
      alert('가입에 실패하였습니다 입력한 내용을 확인해주세요');
    }
  };

  const Waiting = () => {
    Swal.fire({
      icon: 'info',
      title: '준비 중인 기능입니다.',
    });
  };

  return (
    <BackGround>
      <StH1>Meer : 캣린더 사업자 등록</StH1>
      <Svg>
        <div style={{ margin: '1250px 10px 0 0' }}>
          <SignupMeerkat />
        </div>
        <StForm onSubmit={submitSignInfoHandler}>
          <MaxInput
            types="signup"
            type="text"
            name="companyName"
            placeholder="상호명을 입력해주세요."
            value={signInfo.companyName}
            onChange={e => changeInputHandler(e)}
            style={{ marginTop: '100px' }}
          >
            상호명
          </MaxInput>
          <ButtonInput
            types="button"
            type="text"
            name="companyNum"
            value={signInfo.companyNum}
            onChange={e => changeCompanyNumHandler(e)}
            onClick={checkCompanyNumHandler}
            buttonTag="인증 하기"
            placeholder="-을 제외하고 입력해주세요."
            style={{ marginBottom: '45px' }}
          >
            사업자 등록번호
          </ButtonInput>
          {isValid !== null && (
            <p>
              {isValid ? '사업자번호가 유효합니다.' : '사업자번호가 유효하지 않습니다.'}
            </p>
          )}
          <DaumAddressAPI selectedAddressHandler={handleAddressSelected} />
          <MaxInput
            types="signup"
            type="text"
            value={detailAddress}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDetailAddress(e.target.value)
            }
            style={{ marginBottom: '45px' }}
            placeholder="상세 주소를 입력해주세요."
          >
            상세주소
          </MaxInput>
          <MaxInput
            types="signup"
            type="text"
            name="ceoName"
            placeholder="대표자의 성명을 입력해주세요."
            value={signInfo.ceoName}
            onChange={e => changeInputHandler(e)}
          >
            대표자 성명
          </MaxInput>
          <MaxInput
            types="signup"
            type="text"
            name="ceoNum"
            placeholder="-을 제외하고 입력해주세요."
            value={signInfo.ceoNum.toString()}
            onChange={e => changeInputHandler(e)}
          >
            대표자 핸드폰 번호
          </MaxInput>
          <EmailInput>
            <NameTag>
              <StSpan>이메일</StSpan>
              <StInput type="text"></StInput>
            </NameTag>
            <StInput type="text" placeholder="직접 입력"></StInput>
            <StButton onClick={Waiting} type="button">
              인증 하기
            </StButton>
          </EmailInput>
          <ButtonInput
            types="button"
            type="text"
            name="companyId"
            onClick={() => checkCompanyIdHandler(signInfo.companyId)}
            buttonTag="중복확인"
            placeholder="영 대, 소문자, 숫자 5자 이상 입력해주세요."
            value={signInfo.companyId}
            onChange={e => changeInputHandler(e)}
          >
            아이디
          </ButtonInput>
          {signInfo.companyId ? (
            companyIdValidation ? (
              <span>사용할 수 있는 아이디 입니다.</span>
            ) : (
              <span>중복확인이 필요합니다.</span>
            )
          ) : null}
          <MaxInput
            types="signup"
            type="password"
            name="password"
            placeholder="영 대,소문자, 숫자, 특수문자 중 숫자, 특수문자를 포함하는 8자~15자"
            value={signInfo.password}
            onChange={e => changeInputHandler(e)}
          >
            비밀번호
          </MaxInput>
          <MaxInput
            types="signup"
            type="password"
            placeholder="비밀번호를 한 번 더 입력해주세요."
            value={checkPassword}
            onChange={e => reCheckPasswordHandler(e)}
          >
            비밀번호 확인
          </MaxInput>
          {checkPassword ? (
            checkPasswordHandler(checkPassword) ? (
              <span>비밀번호가 일치합니다.</span>
            ) : (
              <span>비밀번호가 일치하지 않습니다.</span>
            )
          ) : null}
          <div style={{ marginTop: '100px' }}>
            <Button
              size="signup"
              style={{
                color: '#E64042',
                fontSize: '15px',
                fontWeight: 'bold',
                border: '1px solid #E64042',
                borderRadius: '7px',
                backgroundColor: '#fff',
                marginRight: '15px',
                boxSizing: 'border-box',
              }}
              onClick={() => navigate('/login')}
            >
              취소
            </Button>
            <Button
              size="signup"
              style={{
                color: '#fff',
                fontSize: '15px',
                fontWeight: 'bold',
                borderRadius: '7px',
                backgroundColor: '#E64042',
                boxSizing: 'border-box',
              }}
            >
              회원가입
            </Button>
          </div>
        </StForm>
        <SignupHello />
      </Svg>
    </BackGround>
  );
};

export default MasterSignup;
