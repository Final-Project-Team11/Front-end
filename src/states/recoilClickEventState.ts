import { atom } from 'recoil';
interface CalendarProps {
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

export const recoilClickEventState = atom<CalendarProps>({
  key: 'eventClick',
  default: {
    id: '',
    calendarId: '',
    title: '',
    body: '',
    start: new Date(),
    end: new Date(),
    attendees: [],
    location: '',
    userId: '',
    userName: '',
    typeDetail: '',
    files: [
      {
        fileLocation: '',
        fileName: '',
      },
    ],
    fileList: [],
    color: '',
    backgroundColor: '',
    dragBackgroundColor: '',
    borderColor: '',
    isReadOnly: false,
  },
});
