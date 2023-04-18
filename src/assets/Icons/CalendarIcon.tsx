import React from 'react';
import { IconProps } from './interfaces';

const CalendarIcon = (props: IconProps) => {
  return (
    <svg
      width={props.width ? props.width : '24'}
      height={props.height ? props.height : '24'}
      viewBox="0 0 54 48"
      preserveAspectRatio="xMidYMid meet"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M38.82,3.73h-3.08V0h-4.2V3.73H10.44V0H6.24V3.73H3.15c-1.73,0-3.15,1.42-3.15,3.15v29.32c0,1.73,1.42,3.15,3.15,3.15H38.82c1.73,0,3.15-1.42,3.15-3.15V6.88c0-1.73-1.42-3.15-3.15-3.15Zm-.92,32.38H4.16V12.85H37.89v23.26Z" />
        <path d="M19.98,20.36v11.25h2.89v-14.8c-.11,0-1.19-.02-1.19-.02-.18,.05-5.95,3.95-5.95,3.91,.43,.48,.9,1.01,1.37,1.53,.94-.61,1.73-1.13,2.88-1.87Z" />
      </g>
    </svg>
  );
};

export default CalendarIcon;
