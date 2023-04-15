export interface UploadedFileTabProps {
  type: 'Myfile' | 'meeting' | 'report';
  icon: '📕' | '📗' | '📘';
}

export interface UploadedFileList {
  eventId: number;
  userName: string;
  title?: string;
  file: string;
}
