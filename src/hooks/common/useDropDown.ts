import React, { useEffect, useRef, useState } from 'react';
import debounce from 'lodash/debounce';

interface PositionProps {
  top: number;
  left: number;
  height: number;
  width: number;
}

const useDropDown = (): [
  React.RefObject<HTMLDivElement>,
  React.RefObject<HTMLUListElement>,
  React.Dispatch<React.SetStateAction<boolean>>,
  boolean,
  PositionProps
] => {
  const [inputPosition, setInputPosition] = useState<PositionProps>({
    top: 0,
    left: 0,
    height: 0,
    width: 0,
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const [width, setWidth] = useState(window.innerWidth);

  //화면 확대 / 축소를 감지
  const resizeHandler = debounce(() => {
    setWidth(window.innerWidth);
  }, 300);

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  //item list 값이 바뀔때마다, 위치를 재확인한다.
  //포탈은 position을 이용하기 때문에 위치 정보값이 필요하다.
  // getBoundingClientRect은 해당 요소의 상태좌표값을 가져오고,
  // 절대 좌표를 얻기 위해서는 window.pageYOffset을 더해주어야 한다.
  useEffect(() => {
    //input 태그를 감싸는 div
    const { current } = divRef;

    //팀목록을 li를 감싸고 있는 UI
    const ulCurrent = ulRef.current;

    if (current !== null && ulCurrent !== null) {
      const { top, left, height, width } = current.getBoundingClientRect();
      const absoluteTop = window.pageYOffset + current.getBoundingClientRect().top;
      const absoluteLeft = window.pageXOffset + current.getBoundingClientRect().left;

      //브라우저 전체 높이값보다 input을 감싸고 있는 div 태그 + UI 높이값보다 클때, UL 태그를 위로 올리기
      if (top + height + ulCurrent.getBoundingClientRect().height > window.innerHeight) {
        const ulHeight = ulCurrent.getBoundingClientRect().height;
        const newTop = absoluteTop - height - ulHeight;
        setInputPosition({ top: newTop, left: absoluteLeft, height, width });
      } else {
        setInputPosition({ top: absoluteTop, left: absoluteLeft, height, width });
      }
    }
  }, [isOpen, width]);

  return [divRef, ulRef, setIsOpen, isOpen, inputPosition];
};

export default useDropDown;
