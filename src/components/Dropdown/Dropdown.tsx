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
  onChange,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState('');

  const clickItemHandler = (item: { name: string; value: number | string }) => {
    setSelectedItem(item.name);
    setIsOpen(false);
    if (onChange) {
      onChange(item.value);
    }
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
        {selectedItem || children}
        {'  '}
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </StBlock>
      <ul>
        {isOpen && (
          <>
            {items.map((item: { name: string; value: number | string }) => {
              return (
                <StLi
                  key={item.name}
                  onClick={() => clickItemHandler(item)}
                  size={size}
                  color={color}
                  background={background}
                  border={border}
                >
                  {item.name}
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
