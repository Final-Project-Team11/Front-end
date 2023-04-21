import React from 'react';
import { IconProps } from './interfaces';

const BusinessIcon = (props: IconProps) => {
  return (
    <svg
      width={props.width ? props.width : '24'}
      height={props.height ? props.height : '24'}
      viewBox="0 0 54 48"
      preserveAspectRatio="xMidYMid meet"
    >
      <g fill={props.fill ? props.fill : '#DDDDDD'} fillRule="evenodd">
        <path d="M47.63,5.61H26.34S21.09,0,21.15,0H5.19C2.32,0,0,2.32,0,5.19l.06,31.94c0,2.97,2.41,5.38,5.38,5.38H47.63c2.97,0,5.38-2.41,5.38-5.38V10.99c0-2.97-2.41-5.38-5.38-5.38Zm-11.21,10.79c2.72,.11,4.74,2.32,4.66,5.08-.08,2.63-2.46,4.88-5.05,4.77-2.65-.11-4.91-2.45-4.86-5.04,.05-2.75,2.42-4.92,5.25-4.81Zm9.41,19.51H26.48c-.78-2.72,.25-4.46,2.58-5.54,4.63-2.14,9.31-2.19,13.97-.12,2.7,1.2,3.23,2.35,2.8,5.66Z" />
      </g>
    </svg>
  );
};

export default BusinessIcon;
