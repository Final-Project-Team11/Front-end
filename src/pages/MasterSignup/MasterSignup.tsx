import { BackGround, StH1, Svg } from './styles';
import SignupHello from '../../assets/Meerkat/SignupHello';
import SignupMeerkat from '../../assets/Meerkat/SignupMeerkat';
import SignupForm from './components/SignupForm';

const MasterSignup = () => {
  return (
    <BackGround>
      <StH1>Meer : 캣린더 사업자 등록</StH1>
      <Svg>
        <div
          style={{ display: 'flex', alignItems: 'flex-end', margin: '0 40px 150px 0 ' }}
        >
          <SignupMeerkat />
        </div>
        <SignupForm />
        <div style={{ marginTop: '50px' }}>
          <SignupHello />
        </div>
      </Svg>
    </BackGround>
  );
};

export default MasterSignup;
