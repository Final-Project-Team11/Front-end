export interface UploadedFileTabProps {
  type: 'myfiles' | 'meetingfiles' | 'reportfiles';
}

export interface File {
  fileName: string;
  fileLocation: string;
}

export interface UploadedFileList {
  Id: number;
  calenderId: number;
  enroll: string;
  userName: string;
  userId?: number;
  title: string;
  files: File[];
}

export interface Props {
  file: UploadedFileList;
  type: 'myfiles' | 'meetingfiles' | 'reportfiles';
}

interface Detail {
  Id: number;
  start: string;
  end: string;
  userName: string;
  title: string;
  body: string;
  attendees: string[];
  files: File[];
}

export interface DetailProps {
  data: {
    meetingfile: Detail;
    detail: Detail;
    reportfile: Detail;
  };
  isLoading: boolean;
  type: 'myfiles' | 'meetingfiles' | 'reportfiles';
  closeModal: () => void;
}
