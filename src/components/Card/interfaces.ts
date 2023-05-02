export interface CardProps {
  tab?: boolean;
  location: 'main' | 'mypage';
}

export interface CardInfoType {
  userId: string;
  userName: string;
  profileImg: string;
  birthDay: string;
  phoneNum: string;
  joinDay: string;
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
