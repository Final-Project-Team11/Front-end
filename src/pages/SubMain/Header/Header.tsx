import React from 'react';
import { HeaderProps } from './interfaces';
import * as styles from './styles';

function Header(porps: HeaderProps) {
  return (
    <styles.StWrap>
      <styles.StCardBlock tab={porps.tab} />
      <styles.StContainer tab={porps.tab}>
        <styles.StDateBlock tab={porps.tab}>
          <styles.StYearBlock>
            {porps.selectedDateRangeText.toString().split('-').splice(0, 1)}/
          </styles.StYearBlock>
          <styles.StMonthBlock>
            {porps.selectedDateRangeText
              .toString()
              .split('-')
              .splice(1, 2)
              .join('')
              .padStart(2, '0')}
          </styles.StMonthBlock>
        </styles.StDateBlock>
      </styles.StContainer>
    </styles.StWrap>
  );
}

export default Header;
