import React from 'react';
import { DropdownProps } from './interfaces';
import { StBlock, StLi } from './styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Dropdown: React.FC<DropdownProps> = ({
  items,
  children,
  size,
  color,
  background,
  border,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState('');
  // 선택된 아이템을 저장하는 상태 값

  const clickItemHandler = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <>
      <StBlock
        onClick={() => setIsOpen(!isOpen)}
        size={size}
        color={color}
        background={background}
        border={border}
      >
        {children}
        {'  '}
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </StBlock>
      <ul>
        {isOpen && (
          <>
            {items.map((item: string) => {
              return (
                <StLi
                  key={item}
                  onClick={() => clickItemHandler(item)}
                  size={size}
                  color={color}
                  background={background}
                  border={border}
                >
                  {item}
                </StLi>
              );
            })}
          </>
        )}
      </ul>
    </>
  );
};

export default Dropdown;
