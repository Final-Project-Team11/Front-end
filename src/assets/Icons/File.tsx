import React from 'react';
import { COLOR } from '../../styles/colors';

interface Color {
  colors: 'black' | 'gray';
}

const File = ({ colors }: Color) => {
  return (
    <svg viewBox="0 0 19.73 25.62" width="8px" height="10px">
      <g fill={colors === 'black' ? 'black' : COLOR.PAGE_DONE}>
        <path d="M0,12.79C0,9.45,0,6.1,0,2.76,0,1.01,1.01,0,2.77,0,5.78,0,8.8,.01,11.81,0c.36,0,.61,.11,.85,.36,2.26,2.37,4.54,4.72,6.8,7.09,.14,.14,.25,.38,.25,.58,.01,4.96,.02,9.93,0,14.89,0,1.71-1.06,2.69-2.78,2.69-4.72,0-9.44,0-14.17,0-1.78,0-2.77-.99-2.77-2.79,0-3.34,0-6.69,0-10.03h0Zm17.85-3.85c-2.28-2.36-4.48-4.65-6.74-7v7h6.74Z" />
      </g>
    </svg>
  );
};

export default File;
