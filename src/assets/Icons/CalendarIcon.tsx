import React from 'react';
import { IconProps } from './interfaces';

const CalendarIcon = (props: IconProps) => {
  return (
    <svg
      width={props.width ? props.width : '24'}
      height={props.height ? props.height : '24'}
      viewBox="0 0 46.02 43.16"
      preserveAspectRatio="xMidYMid meet"
    >
      <g fill={props.fill ? props.fill : '#DDDDDD'} fillRule="evenodd">
        <path d="M42.56,4.09h-3.38V0h-4.61V4.09H11.45V0H6.84V4.09H3.46c-1.9,0-3.46,1.56-3.46,3.46V39.7c0,1.9,1.56,3.46,3.46,3.46H42.56c1.9,0,3.46-1.56,3.46-3.46V7.55c0-1.9-1.56-3.46-3.46-3.46Zm-1.01,35.51H4.56V14.09H41.55v25.51Z" />
        <path d="M21.91,22.32v12.34h3.17V18.43c-.12,0-1.3-.02-1.3-.02-.2,.06-6.53,4.33-6.53,4.28,.47,.52,.99,1.11,1.5,1.68,1.03-.67,1.9-1.23,3.16-2.05Z" />
      </g>
    </svg>
  );
};

export default CalendarIcon;
