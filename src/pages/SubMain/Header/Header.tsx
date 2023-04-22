import React, { useContext } from 'react';
import { HeaderProps } from './interfaces';
import * as styles from './styles';
import { nanoid } from 'nanoid';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Card from '../../../components/Card/Card';

import ChangeVacation from '../../../assets/Meerkat/ChangeVacation';
import ChangeSchedule from '../../../assets/Meerkat/ChangeSchedule';
import { ChangeTabContext } from '../../../api/hooks/Main/useTabContext';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { getCookie } from '../../../api/auth/CookieUtils';
import { useNavigate } from 'react-router-dom';

function Header(props: HeaderProps) {
  const [tab, tabHandler] = useContext(ChangeTabContext);
  const navigate = useNavigate();

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

  return (
    <styles.StWrap>
      <styles.StCardBlock onClick={CardClickHandler}>
        <Card tab={tab} />
      </styles.StCardBlock>
      <styles.StContainer tab={tab}>
        <styles.StDateBlock tab={tab}>
          <styles.StYearBlock>
            <span>{props.selectedDateRangeText.toString().split('-').splice(0, 1)}</span>
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

            {props.selectedDateRangeText
              .toString()
              .split('-')
              .splice(1, 2)
              .join('')
              .padStart(2, '0')}
            <styles.StButton
              type="button"
              data-action="move-next"
              onClick={props.onClickNavi}
              tab={tab}
            >
              {'>'}
            </styles.StButton>
          </styles.StMonthBlock>
        </styles.StDateBlock>

        <styles.StColorList>
          <styles.StTabBlock onClick={() => tabHandler(!tab)}>
            {tab === false ? <ChangeSchedule /> : <ChangeVacation />}
          </styles.StTabBlock>
          {props?.initialCalendars?.map(item => {
            return (
              <styles.StColorContainer key={nanoid()}>
                <styles.StColorNameBlock>{item.name}</styles.StColorNameBlock>
                <styles.StColorBlock backgroundColor={item.backgroundColor} />
              </styles.StColorContainer>
            );
          })}
          <styles.StTeamBlock />
        </styles.StColorList>
      </styles.StContainer>
    </styles.StWrap>
  );
}

export default Header;
