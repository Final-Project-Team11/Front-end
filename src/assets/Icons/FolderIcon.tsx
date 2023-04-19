import React from 'react';

interface IconProps {
  width?: string;
  height?: string;
  fill?: string;
}

const FolderIcon = (props: IconProps) => {
  return (
    <svg
      width={props.width ? props.width : '24'}
      height={props.height ? props.height : '24'}
      viewBox="0 0 54 48"
      preserveAspectRatio="xMidYMid meet"
    >
      <g fill="none" fillRule="evenodd">
        <path
          fill={props.fill ? props.fill : '#DDDDDD'}
          xmlns="http://www.w3.org/2000/svg"
          d="M47.63,5.61H26.34S21.09,0,21.15,0H5.19C2.32,0,0,2.32,0,5.19l.06,31.94c0,2.97,2.41,5.38,5.38,5.38H47.63c2.97,0,5.38-2.41,5.38-5.38V10.99c0-2.97-2.41-5.38-5.38-5.38Z"
        />
      </g>
    </svg>
  );
};

export default FolderIcon;
