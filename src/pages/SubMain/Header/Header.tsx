import React, { useContext, useRef } from 'react';
import { HeaderProps } from './interfaces';
import * as styles from './styles';
import { nanoid } from 'nanoid';
import Card from '../../../components/Card/Card';
import ChangeVacation from '../../../assets/Meerkat/ChangeVacation';
import ChangeSchedule from '../../../assets/Meerkat/ChangeSchedule';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { getCookie } from '../../../api/auth/CookieUtils';
import { useNavigate } from 'react-router-dom';
import { recoilTabState } from '../../../states/recoilTabState';
import { useRecoilState, useRecoilValue } from 'recoil';
import { recoilReportState } from '../../../states/recoilReportState';
import ReportModal from '../../../components/Main/Modal/ReportModal/ReportModal';
import Dropdown from '../../../components/Atoms/Dropdown/Dropdown';
import Modal from '../../../components/Atoms/Modal/CustomModal';
import { recoilSelectedDateState } from '../../../states/recoilSelectedDateState';
import Swal from 'sweetalert2';
import { removeCookie } from '../../../api/auth/CookieUtils';
import TodayMoveIcon from '../../../assets/Icons/TodayMoveIcon';

function Header(props: HeaderProps) {
  const navigate = useNavigate();
  const [tab, setTab] = useRecoilState(recoilTabState);
  const [open, setOpen] = useRecoilState(recoilReportState);
  const selectedDate = useRecoilValue(recoilSelectedDateState);
  const currentTab = useRef<string | number>();
  const CardClickHandler = () => {
    const token = getCookie('token');
    const decoded = token && jwtDecode<JwtPayload>(token);
    const authLevel = decoded ? decoded.authLevel : '';
    if (authLevel === 1) {
      navigate('/business');
    } else if (authLevel === 2) {
      navigate('/manager');
    } else if (authLevel === 3) {
      navigate('/mypage');
    } else {
      navigate('/mypage');
    }
  };

  const closeModal = () => {
    setOpen(false);
  };

  const reports = [
    { name: '보고서(기타)', value: 0 },
    { name: '회의록', value: 1 },
    { name: '결재 요청서', value: 2 },
  ];

  const token = getCookie('token');

  const logOutClickHandler = () => {
    Swal.fire({
      title: '로그아웃 하시겠습니까?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: '네,로그아웃할게요',
      cancelButtonText: '아니요, 좀더 구경할게요!',
      reverseButtons: true,
    }).then(result => {
      if (result.isConfirmed) {
        navigate('/login');
        removeCookie('token');
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: '취소되었습니다.',
          icon: 'error',
        });
      }
    });
  };

  const today = new Date();
  const selectedMonth = selectedDate
    .toString()
    .split('-')
    .splice(1, 2)
    .join('')
    .padStart(2, '0');

  const selectedYear = selectedDate.toString().split('-').splice(0, 1);

  return (
    <styles.StWrap>
      <styles.StCardBlock onClick={CardClickHandler}>
        <Card tab={tab} />
      </styles.StCardBlock>
      <styles.StContainer tab={tab}>
        <styles.StDateBlock tab={tab}>
          <styles.StYearBlock>
            <span>{selectedYear}</span>
          </styles.StYearBlock>
          <styles.StMonthBlock>
            <styles.StButton
              type="button"
              data-action="move-prev"
              onClick={props.onClickNavi}
              tab={tab}
            >
              {'<'}
            </styles.StButton>
            <styles.StMonth>{selectedMonth}</styles.StMonth>
            <styles.StButton
              type="button"
              data-action="move-next"
              onClick={props.onClickNavi}
              tab={tab}
            >
              {'>'}
            </styles.StButton>
          </styles.StMonthBlock>
          {today.getMonth() + 1 !== Number(selectedMonth) && (
            <styles.StButtonIconBlock>
              <styles.StTodayButton
                type="button"
                data-action="move-today"
                onClick={props.onClickNavi}
              ></styles.StTodayButton>
              <TodayMoveIcon tab={tab} />
            </styles.StButtonIconBlock>
          )}
        </styles.StDateBlock>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
          }}
        >
          <styles.StTeamBlock>
            {tab === false && (
              <Dropdown
                size="small"
                items={reports}
                onChange={value => {
                  setOpen(true);
                  currentTab.current = value;
                }}
                style={{
                  width: '90px',
                  height: '30px',
                  boxShadow: '0 4px 4px rgba(201, 201, 201, 0.25)',
                  fontSize: '11px',
                  border: 'none',
                  padding: '10px',
                  fontWeight: 'bold',
                  color: '#484240',
                  background: '#EAEAEA',
                }}
              >
                보고서
              </Dropdown>
            )}
          </styles.StTeamBlock>
          <styles.StColorList>
            {props?.initialCalendars?.map(item => {
              return (
                <styles.StColorContainer key={nanoid()}>
                  <styles.StColorNameBlock>{item.name}</styles.StColorNameBlock>
                  <styles.StColorBlock backgroundColor={item.backgroundColor} />
                </styles.StColorContainer>
              );
            })}
          </styles.StColorList>
          <div style={{ position: 'relative' }}>
            <styles.StTabBlock
              onClick={() => {
                setTab(!tab);
              }}
            >
              {tab === false ? <ChangeVacation /> : <ChangeSchedule />}
            </styles.StTabBlock>
            {token && (
              <styles.StLogout onClick={logOutClickHandler}>로그아웃</styles.StLogout>
            )}
          </div>
        </div>
      </styles.StContainer>
      {open && (
        <Modal closeModal={closeModal}>
          <ReportModal value={currentTab.current} />
        </Modal>
      )}
    </styles.StWrap>
  );
}

export default Header;

// {token && (
//   <styles.StLogout onClick={logOutClickHandler}>logout</styles.StLogout>
// )}
