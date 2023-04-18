export interface UploadedFileTabProps {
  type: 'myfiles' | 'meetingfiles' | 'reportfiles';
  icon: '📕' | '📗' | '📘';
}

export interface UploadedFileList {
  enrollDay: string;
  eventId: number;
  file: string;
  fileName: string;
  title: string;
  userName: string;
  eventType?: string;
}
