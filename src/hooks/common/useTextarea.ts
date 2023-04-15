import React, { useState } from 'react';

const useTextarea = (): [
  string,
  (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
  (value: string) => void
] => {
  const [value, setValue] = useState<string>('');

  const setHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return [value, setHandler, setValue];
};

export default useTextarea;
