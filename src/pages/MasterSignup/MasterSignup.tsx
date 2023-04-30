import { BackGround, StH1, Svg } from './styles';
import SignupHello from '../../assets/Meerkat/SignupHello';
import SignupMeerkat from '../../assets/Meerkat/SignupMeerkat';
import SignupForm from './components/SignupForm';

const MasterSignup = () => {
  return (
    <BackGround>
      <StH1>Meer : 캣린더 사업자 등록</StH1>
      <Svg>
        <div style={{ margin: '1165px 10px 0 0' }}>
          <SignupMeerkat />
        </div>
        <SignupForm />
        <SignupHello />
      </Svg>
    </BackGround>
  );
};

export default MasterSignup;
