interface Detail {
  content: string;
  enrollDay: string;
  eventId: number;
  file: string;
  fileName: string;
  title: string;
  userName: string;
  ref?: string[];
}

export interface DetailProps {
  data: {
    meetingfiles: Detail;
    myfiles: Detail;
    reportfiles: Detail;
  };
  isLoading: boolean;
  type: 'myfiles' | 'meetingfiles' | 'reportfiles';
}
