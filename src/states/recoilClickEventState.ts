import { atom } from 'recoil';
import { CalendarProps } from '../pages/SubMain/interfaces';

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
