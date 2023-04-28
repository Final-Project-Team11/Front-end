import React, { useEffect, useState } from 'react';

export function useInput(
  maxLength?: number, //maxLength
  initialValue?: string, // initialValue
  valid?: RegExp // 유효성검사 RegExp는 정규식의 타입
): [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  (value: string) => void,
  boolean | undefined
] {
  const [inputValue, setInputValue] = useState<string>(initialValue || '');

  useEffect(() => {
    setInputValue(initialValue || '');
  }, [initialValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (maxLength) {
      if (e.target.value.length <= maxLength) {
        setInputValue(e.target.value);
      }
    } else {
      setInputValue(e.target.value);
    }
  };

  // 유효성 검사 => inputValue 를 정규식 valid로 검사해서 isValid boolean을 뱉어냄
  let isValid: boolean | undefined;
  if (valid) {
    isValid = valid.test(inputValue);
  }

  return [inputValue, handleChange, setInputValue, isValid];
}

export default useInput;
