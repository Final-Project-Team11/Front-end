interface File {
  fileName: string;
  fileLocation: string;
}

export interface MyListProps {
  Id: number;
  userName: string;
  title: string;
  files?: File[];
  enroll: string;
  status: 'submit' | 'accept' | 'deny';
}

export interface FileProps {
  file: MyListProps;
}
