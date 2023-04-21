import React from 'react';
import { COLOR } from '../../styles/colors';

interface Color {
  colors: 'black' | 'gray';
}

const Person = ({ colors }: Color) => {
  return (
    <svg viewBox="0 0 20.89 25.67" width="8px" height="10px">
      <g fill={colors === 'black' ? 'black' : COLOR.PAGE_DONE}>
        <path d="M.04,25.67c0-1.79-.1-3.54,.03-5.27,.11-1.6,1.19-2.7,2.48-3.51,4.26-2.66,8.75-3.16,13.45-1.24,1.53,.63,2.96,1.41,4,2.75,.59,.75,.89,1.61,.89,2.57,0,1.55,0,3.11,0,4.7H.04Z" />
        <path d="M3.98,6.4C3.98,2.86,6.84,0,10.38,0c3.54,0,6.44,2.88,6.43,6.43,0,3.55-2.9,6.43-6.44,6.42-3.55,0-6.4-2.89-6.39-6.46Z" />
      </g>
    </svg>
  );
};

export default Person;
