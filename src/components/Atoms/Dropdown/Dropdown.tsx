import React, { useEffect, useRef, useState } from 'react';
import { DropdownProps } from './interfaces';
import { StBlock, StLi, StUlBlock } from './styles';
import { IoIosArrowDown } from '@react-icons/all-files/io/IoIosArrowDown';
import { IoIosArrowUp } from '@react-icons/all-files/io/IoIosArrowUp';

import { createPortal } from 'react-dom';

const Dropdown: React.FC<DropdownProps> = ({
  items,
  children,
  size,
  color,
  background,
  border,
  onChange,
  style,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState('');
  const divRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const clickItemHandler = (
    event: React.MouseEvent<HTMLLIElement>,
    item: { name: string; value: number | string }
  ) => {
    event.stopPropagation();
    setSelectedItem(item.name);
    setIsOpen(false);
    if (onChange) {
      onChange(item.value);
    }
  };

  //기준이 되는 div의 위치를 가져오기
  const [inputPosition, setInputPosition] = useState({
    top: 0,
    left: 0,
    height: 0,
    width: 0,
  });

  //item list 값이 바뀔때마다, 위치를 재확인한다.
  //포탈은 position을 이용하기 때문에 위치 정보값이 필요하다.
  // getBoundingClientRect은 해당 요소의 상태좌표값을 가져오고,
  // 절대 좌표를 얻기 위해서는 window.pageYOffset을 더해주어야 한다.
  useEffect(() => {
    const { current } = divRef;
    const ulCurrent = ulRef.current;

    if (current !== null) {
      const { top, left, height, width } = current.getBoundingClientRect();
      const absoluteTop = window.pageYOffset + current.getBoundingClientRect().top;
      const absoluteLeft = window.pageXOffset + current.getBoundingClientRect().left;
      if (ulCurrent !== null) {
        if (
          top + height + ulCurrent.getBoundingClientRect().height >
          window.innerHeight
        ) {
          const ulHeight = ulCurrent.getBoundingClientRect().height;
          const newTop = absoluteTop - height - ulHeight;
          setInputPosition({ top: newTop, left, height, width });
        } else {
          setInputPosition({ top: absoluteTop, left: absoluteLeft, height, width });
        }
      }
    }
  }, [isOpen]);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <StBlock
        onClick={clickHandler}
        size={size}
        color={color}
        background={background}
        border={border}
        style={style}
        ref={divRef}
      >
        {selectedItem || children}
        {'  '}
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </StBlock>
      <ul>
        {isOpen &&
          createPortal(
            <StUlBlock pos={inputPosition} ref={ulRef}>
              {items.map((item: { name: string; value: number | string }) => {
                return (
                  <StLi
                    key={item.name}
                    onClick={event => clickItemHandler(event, item)}
                    size={size}
                    color={color}
                    background={background}
                    border={border}
                    style={style}
                  >
                    {item.name}
                  </StLi>
                );
              })}
            </StUlBlock>,
            document.getElementById('root') as HTMLElement
          )}
      </ul>
    </>
  );
};

export default Dropdown;
