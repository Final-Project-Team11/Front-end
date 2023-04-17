export type AdminLoginInfo = {
  companyId: string;
  password: string;
};

export type LoginInfo = {
  companyId: string;
  userId: string;
  password: string;
};

export type SignupInfo = AdminLoginInfo & {
  companyName: string;
  address: string;
  ceoName: string;
  ceoNum: string;
  companyNum: string;
};
