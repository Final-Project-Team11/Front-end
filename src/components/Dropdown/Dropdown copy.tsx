import React from 'react';
import { DropdownProps } from './interfaces';
import { StBlock, StLi } from './styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import ReactDom from 'react-dom';

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

  const dropdownList = (
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
  const root = document.getElementById('root');
  if (!root) {
    const newRoot = document.createElement('div');
    document.body.appendChild(newRoot);
    return ReactDom.createPortal(dropdownList, newRoot);
  } else {
    return ReactDom.createPortal(dropdownList, root);
  }
};

export default Dropdown;
