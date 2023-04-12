import React from 'react';
import { HeaderProps } from './interfaces';
import {
  StWrap,
  StCardBlock,
  StContainer,
  StDateBlock,
  StYearBlock,
  StMonthBlock,
} from './styles';

function Header(porps: HeaderProps) {
  return (
    <StWrap>
      <StCardBlock tab={porps.tab} />
      <StContainer tab={porps.tab}>
        <StDateBlock tab={porps.tab}>
          <StYearBlock>
            {porps.selectedDateRangeText.toString().split('-').splice(0, 1)}/
          </StYearBlock>
          <StMonthBlock>
            {porps.selectedDateRangeText
              .toString()
              .split('-')
              .splice(1, 2)
              .join('')
              .padStart(2, '0')}
          </StMonthBlock>
        </StDateBlock>
      </StContainer>
    </StWrap>
  );
}

export default Header;
