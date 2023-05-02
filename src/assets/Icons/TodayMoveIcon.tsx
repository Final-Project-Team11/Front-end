import React from 'react';
import { COLOR } from '../../styles/colors';

interface IconProps {
  width?: string;
  height?: string;
  fill?: string;
  tab: boolean;
}

const TodayMoveIcon = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="_레이어_2"
      width={props.width ? props.width : '18px'}
      height={props.height ? props.height : '32px'}
      viewBox="0 0 18.01 31.93"
    >
      <style>{`.TodayMoveIcon-1{fill:${
        props.tab === false ? COLOR.SCHEDULE_BLUE : COLOR.VACATION_RED
      }}`}</style>

      <g id="_레이어_1-2">
        <g>
          <path
            className="TodayMoveIcon-1"
            d="M15.33,6.49c-1.41-1.03-3.18-1.58-5.12-1.58H1.71L5.91,.71l-.71-.71L.15,5.06c-.14,.14-.19,.36-.11,.54,.03,.07,.08,.11,.13,.16h-.01s5.06,5.07,5.06,5.07l.71-.71L1.71,5.91H10.21c1.72,0,3.29,.48,4.53,1.39,1.51,1.1,2.27,2.58,2.27,4.4,0,1.3-.35,2.49-1.04,3.55-1.24,1.88-3.43,3-5.87,3H2.49v1h7.6c2.78,0,5.29-1.29,6.71-3.45,.8-1.22,1.21-2.6,1.21-4.1,0-2.12-.93-3.92-2.68-5.2Z"
          />
          <path
            className="TodayMoveIcon-1"
            d="M6.12,29.19c1.32-.14,2.16-.9,2.16-1.95,0-1.15-1.03-1.96-2.62-1.96s-2.61,.81-2.61,1.96c0,1.04,.83,1.8,2.13,1.95v1.14H2.44v.74h6.44v-.74h-2.76v-1.14Zm-2.12-1.94c0-.71,.66-1.2,1.66-1.2s1.67,.49,1.67,1.2-.66,1.2-1.67,1.2-1.66-.48-1.66-1.2Z"
          />
          <polygon
            className="TodayMoveIcon-1"
            points="11.11 30.73 14.94 30.73 14.94 28.88 10.14 28.88 10.14 29.62 14.02 29.62 14.02 30.06 10.19 30.06 10.19 31.93 15.21 31.93 15.21 31.17 11.11 31.17 11.11 30.73"
          />
          <polygon
            className="TodayMoveIcon-1"
            points="10.23 24.91 10.23 27.12 15.01 27.12 15.01 26.38 11.17 26.38 11.17 24.91 10.23 24.91"
          />
          <rect
            className="TodayMoveIcon-1"
            x="9.36"
            y="27.63"
            width="6.44"
            height=".75"
          />
        </g>
      </g>
    </svg>
  );
};

export default TodayMoveIcon;
