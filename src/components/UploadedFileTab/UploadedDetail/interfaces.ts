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
    meetingfile: Detail;
    myfile: Detail;
    reportfile: Detail;
  };
  isLoading: boolean;
  type: 'myfiles' | 'meetingfiles' | 'reportfiles';
  closeModal: () => void;
}
