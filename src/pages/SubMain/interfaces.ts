export interface InitialCalendar {
  id: string;
  name: string;
  color?: string;
  backgroundColor?: string;
  dragBackgroundColor?: string;
  borderColor?: string;
}

export interface CalendarProps {
  id?: string | number;
  Id?: string | number;
  calendarId?: string;
  title?: string;
  body?: string;
  start?: Date;
  end?: Date;
  attendees?: string[];
  location?: string;
  userId?: string;
  userName?: string;
  typeDetail?: string;
  files?: [
    {
      fileLocation?: string;
      fileName?: string;
    }
  ];

  fileList?: File[] | undefined; //서버에서 정보 받을 때,
  color?: string;
  backgroundColor?: string;
  dragBackgroundColor?: string;
  borderColor?: string;
  isReadOnly?: boolean;
}

export interface CalendarInfo {
  event?: CalendarProps[];
  issue?: CalendarProps[];
  meeting?: CalendarProps[];
  schedule?: CalendarProps[];
  report?: CalendarProps[];
  other?: CalendarProps[];
  meetingReport?: CalendarProps[];
  vacation?: CalendarProps[];
  teamName?: string;
}
