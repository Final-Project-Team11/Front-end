import React, { useState } from 'react';

// 평범한 useInput
export function useInput(): [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  (value: string) => void
] {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return [inputValue, handleChange, setInputValue];
}

export default useInput;
