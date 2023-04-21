import React from 'react';

interface IconProps {
  width?: string;
  height?: string;
  fill?: string;
}

const TagIcon = (props: IconProps) => {
  return (
    <svg
      width={props.width ? props.width : '24'}
      height={props.height ? props.height : '24'}
      viewBox="0 0 54 48"
      preserveAspectRatio="xMidYMid meet"
    >
      <g fill={props.fill ? props.fill : '#DDDDDD'} fillRule="evenodd">
        <path d="M47.59,0S17.34,.01,17.3,.01c-1.2,.03-2.28,.48-3.13,1.21C13.83,1.51,.7,15.87,.7,15.87c-.94,1.02-.94,2.58,0,3.6,0,0,13.13,14.36,13.46,14.65,.85,.73,1.93,1.19,3.13,1.21,.04,0,30.29,.01,30.29,.01,2.76,0,4.99-2.24,4.99-4.99V4.99c0-2.76-2.24-4.99-4.99-4.99Z" />
      </g>
    </svg>
  );
};

export default TagIcon;
