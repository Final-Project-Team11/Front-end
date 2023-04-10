import React from 'react';
import { HeaderProps } from './interfaces';
import {
  StWrap,
  StCardBlock,
  StContainer,
  StDateBlock,
  StYearBlock,
  StYearFrist,
  StYearSecond,
  StMonthBlock,
} from './styles';

function index(porps: HeaderProps) {
  return (
    <StWrap>
      <StCardBlock />
      <StContainer>
        <StDateBlock>
          <StYearBlock>
            <StYearFrist>
              {porps.selectedDateRangeText
                .toString()
                .split('-')
                .splice(0, 1)
                .join('')
                .slice(0, 2)}
            </StYearFrist>
            <StYearSecond>
              {porps.selectedDateRangeText
                .toString()
                .split('-')
                .splice(0, 1)
                .join('')
                .slice(2, 4)}
            </StYearSecond>
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

export default index;
