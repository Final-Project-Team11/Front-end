export interface Props {
  request: {
    eventId: number;
    userName: string;
    title: string;
    file: string;
    enrollDay: string;

    status: 'submit' | 'accept' | 'deny';
  };
}
