export interface CardProps {
  location: 'main' | 'mypage';
}

export interface CardDetailInfo {
  userId: string;
  userName: string;
  profileImg: string;
  birthDay: string;
  phoneNum: string;
  joinDay: string;
}

export interface CardInfo {
  userName: string;
  team: string;
  salaryDay: number;
  remainDay: number;
  profileImg: string;
}

export interface DecodedToken {
  authLevel: number;
  companyId: string;
  iat: number;
  teamId: number;
  teamName: string;
  userId: string;
  userName: string;
}

export interface CardDetailProps {
  closeModal: () => void;
  decodedToken: DecodedToken;
}

export type NavButton = (event: React.MouseEvent) => void;

export interface Payload {
  birthDay: string;
  phoneNum: string;
  file: File | undefined;
}
