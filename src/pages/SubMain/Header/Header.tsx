import React, { useContext } from 'react';
import { HeaderProps } from './interfaces';
import * as styles from './styles';
import { nanoid } from 'nanoid';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Card from '../../../components/Card/Card';
import { ChangeTabContext, TabContext } from '../../Main/Main';
import ChangeVacation from '../../../assets/Meerkat/ChangeVacation';
import ChangeSchedule from '../../../assets/Meerkat/ChangeSchedule';

function Header(props: HeaderProps) {
  const tab = useContext<number>(TabContext);
  const [value, tabHandler] = useContext(ChangeTabContext);

  console.log('value', value);
  return (
    <styles.StWrap>
      <Card tab={tab} />
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
          <styles.StTabBlock onClick={() => tabHandler(!value)}>
            {tab === 0 ? <ChangeSchedule /> : <ChangeVacation />}
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
