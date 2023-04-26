export interface RequestType {
  type: 'schedule' | 'other';
}

export interface RequestTypes {
  title: '출장관련' | '결재요청';
  icon: JSX.Element;
}

export interface File {
  fileName: string;
  fileLocation: string;
}
export interface RequestInfo {
  files: File[];
  Id: number;
  attendees: string[];
  body: string;
  end: string;
  start: string;
  status: 'submit' | 'accept' | 'deny';
  title: string;
  userName: string;
}
export interface DetailProps {
  data: RequestInfo | undefined;
  isLoading: boolean;
  closeModal: () => void;
}

export interface RequestTabType {
  Id: number;
  createdAt: string;
  enrollDay: string;
  status: 'submit' | 'accept' | 'deny';
  title: string;
  userName: string;
  files: File[];
}

export interface DecideParams {
  eventId: number;
  types: string;
}
