// 스타일, 인터페이스
import * as UI from './style';
// 서버 요청
import { useGetVacationStatus } from '../../../api/hooks/Vacation/useGetVacationStatus';
// 컴포넌트
import Loading from '../../Loading/Loading';
// SVG파일
import WorkingMeerkat from '../../../assets/Meerkat/WorkingMeerkat';
import VacationMeerkat from '../../../assets/Meerkat/VacationMeerkat';
import WaitingVacation from '../../../assets/Meerkat/WaitingVacation';

const VacationStatus = () => {
  // 휴가 상태 요청
  const { data, isLoading } = useGetVacationStatus();

  // 로딩
  if (isLoading || !data) {
    return (
      <UI.LoadingBlock>
        <Loading />
      </UI.LoadingBlock>
    );
  }

  // 휴가 상태 따라 svg파일 세팅
  let svgFile;
  if (data) {
    if (data.status === 'accept') {
      svgFile = <VacationMeerkat />;
    } else if (data.status === 'submit') {
      svgFile = <WaitingVacation />;
    } else {
      svgFile = <WorkingMeerkat />;
    }
  }

  return <UI.SvgBlock>{svgFile}</UI.SvgBlock>;
};

export default VacationStatus;
