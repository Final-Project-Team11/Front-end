import React from 'react';
import { HeaderProps } from './interfaces';
import * as styles from './styles';
import { nanoid } from 'nanoid';

function Header(props: HeaderProps) {
  return (
    <styles.StWrap>
      <styles.StCardBlock tab={props.tab} />
      <styles.StContainer tab={props.tab}>
        <styles.StDateBlock tab={props.tab}>
          <styles.StYearBlock>
            <span>{props.selectedDateRangeText.toString().split('-').splice(0, 1)}</span>
            <span>/</span>
          </styles.StYearBlock>
          <styles.StMonthBlock>
            {props.selectedDateRangeText
              .toString()
              .split('-')
              .splice(1, 2)
              .join('')
              .padStart(2, '0')}
          </styles.StMonthBlock>
        </styles.StDateBlock>
        <styles.StColorList>
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
