export const usePasswordCheck = (first: string) => {
  const validPassword = (item: string) =>
    /^(?=.*\d)(?=.*[!@#$%^&*()_+\-={};':"\\|,.<>?~])[A-Za-z\d!@#$%^&*()_+\-={};':"\\|,.<>?~]{8,15}$/.test(
      item
      // 최소8자 ~ 최대 15자 영문 소, 대문자, 숫자, 특수문자 사용가능 숫자, 특수문자 필수 포함(공백x)
    )
      ? true
      : false;

  const checkPasswordHandler = (item: string): boolean => {
    return first === item ? true : false;
  };

  return { validPassword, checkPasswordHandler };
};
