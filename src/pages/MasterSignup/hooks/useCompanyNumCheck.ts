import React from 'react';

export const useCompanyNumCheck = () => {
  const [isValid, setIsValid] = React.useState<boolean | null>(null);

  const validCompanyNumLength = (companyNum: string) => {
    const isValidLength = companyNum.length === 10 && /^\d+$/.test(companyNum);
    setIsValid(isValidLength);
  };

  return { isValid, validCompanyNumLength };
};
