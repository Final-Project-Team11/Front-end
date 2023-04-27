import React, { useState } from 'react';

export function useInput(
  maxLength?: number,
  initialValue?: string
): [string, (e: React.ChangeEvent<HTMLInputElement>) => void, (value: string) => void] {
  const [inputValue, setInputValue] = useState<string>(initialValue || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (maxLength) {
      if (e.target.value.length <= maxLength) {
        setInputValue(e.target.value);
      }
    } else {
      setInputValue(e.target.value);
    }
  };

  return [inputValue, handleChange, setInputValue];
}

export default useInput;
