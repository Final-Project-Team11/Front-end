import React from 'react';
import { DropdownProps } from './interfaces';
import { StBlock, StLi, StUlBlock } from './styles';
import { IoIosArrowDown } from '@react-icons/all-files/io/IoIosArrowDown';
import { IoIosArrowUp } from '@react-icons/all-files/io/IoIosArrowUp';

import { createPortal } from 'react-dom';
import useDropDown from '../../../hooks/common/useDropDown';

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
  const [selectedItem, setSelectedItem] = React.useState('');

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

  const [divRef, ulRef, setIsOpen, isOpen, inputPosition] = useDropDown();

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
