import React from 'react';
import { InputWrapper, StForm } from './styles';
import MaxInput from '../../components/Inputs/Input/MaxInput';
import ButtonInput from '../../components/Inputs/ButtonInput';
import Button from '../../components/Button/Button';
import { SignupInfo } from './interfaces';
import { useCompanyIdValidation } from './hooks/useCompanyIdValidation';
import { useSignup } from './hooks/useSignup';
import { usePasswordCheck } from './hooks/usePasswordCheck';
import axios from 'axios';
import DaumAddressAPI from './hooks/DaumAddressAPI';

const MasterSignup = () => {
  const [signInfo, setSignInfo] = React.useState<SignupInfo>({
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

  const [isValid, setIsValid] = React.useState<boolean | null>(false);

  // 사업자 등록번호 조회 api
  const COMPANYNUM_VALID_KEY = process.env.REACT_APP_COMPANYNUM_VALID_KEY;

  const handleButtonClick = async () => {
    try {
      const response = await axios.post(
        `https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=${COMPANYNUM_VALID_KEY}`,
        {
          b_no: [signInfo.companyNum],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );
      const data = response.data.data[0];
      if (data.b_stt_cd === '01' || data.b_stt_cd === '02' || data.b_stt_cd === '03') {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    } catch (error) {
      console.error(error);
      setIsValid(false);
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
    if (companyIdValidation && validPassword(signInfo.password)) {
      signup.mutate(newSignInfo);
    } else {
      alert('가입에 실패하였습니다 입력한 내용을 확인해주세요');
    }
  };

  return (
    <StForm onSubmit={submitSignInfoHandler}>
      <h1 style={{ fontSize: '20px', marginTop: '30px', fontWeight: 'bold' }}>
        사업자 등록
      </h1>
      <InputWrapper>
        <MaxInput
          types="max"
          type="text"
          name="companyName"
          placeholder="상호명을 입력해주세요."
          value={signInfo.companyName}
          onChange={e => changeInputHandler(e)}
        >
          상호명
        </MaxInput>
        <ButtonInput
          types="button"
          type="text"
          name="companyNum"
          value={signInfo.companyNum}
          onChange={e => changeInputHandler(e)}
          onClick={handleButtonClick}
          buttonTag="사업자 확인"
          placeholder="하이픈을 제외하고 입력해주세요."
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
          types="max"
          type="text"
          value={detailAddress}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDetailAddress(e.target.value)
          }
        >
          상세주소
        </MaxInput>
        <MaxInput
          types="max"
          type="text"
          name="ceoName"
          placeholder="대표자의 이름을 입력해주세요."
          value={signInfo.ceoName}
          onChange={e => changeInputHandler(e)}
        >
          대표자명
        </MaxInput>
        <MaxInput
          types="max"
          type="text"
          name="ceoNum"
          placeholder="대표자의 연락처를 하이픈 없이 입력해주세요."
          value={signInfo.ceoNum.toString()}
          onChange={e => changeInputHandler(e)}
        >
          대표자 연락처
        </MaxInput>
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
          types="max"
          type="password"
          name="password"
          placeholder="영 대,소문자, 숫자, 특수문자 중 숫자, 특수문자를 포함하는 8자~15자"
          value={signInfo.password}
          onChange={e => changeInputHandler(e)}
        >
          비밀번호
        </MaxInput>
        <MaxInput
          types="max"
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
      </InputWrapper>
      <div style={{ marginTop: '30px' }}>
        <Button size="example">가입하기</Button>
      </div>
    </StForm>
  );
};

export default MasterSignup;
