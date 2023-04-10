import React from 'react';
import * as interfaces from './interfaces';
import DropdownBody from '../DropdownBody/DropdownBody';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

const DropdownHeader = ({ children }: interfaces.DropdownHeaderProps) => {
  const [view, setView] = React.useState(false);

  return (
    <>
      <ul onClick={() => setView(!view)}>
        {children}
        {'  '}
        {view ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        {view && <DropdownBody />}
      </ul>
    </>
  );
};
export default DropdownHeader;
