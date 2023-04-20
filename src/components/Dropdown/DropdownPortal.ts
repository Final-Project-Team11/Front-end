import { ReactPortal } from 'react';
import ReactDom from 'react-dom';
import React from 'react';

const DropdownPortal = ({
  children,
  target,
}: {
  children: React.ReactNode;
  target: string;
}): ReactPortal | null => {
  const [container, setContainer] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    const el = document.createElement('div');
    el.setAttribute('id', target);
    document.body.appendChild(el);
    setContainer(el);
    return () => {
      document.body.removeChild(el);
    };
  }, [target]);

  if (container) {
    return ReactDom.createPortal(children, container);
  }
  return null;
};

export default DropdownPortal;
