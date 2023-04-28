import React, { useEffect, useState } from 'react';
import FolderIcon from '../../../../../assets/Icons/FolderIcon';
import { HiOutlinePlusSm } from 'react-icons/hi';
import * as styles from './styles';
import { nanoid } from 'nanoid';

interface FileUploadProps {
  onFileHandler: React.Dispatch<React.SetStateAction<File[] | undefined>>;
  disable?: boolean;
  files?: [
    {
      fileLocation?: string;
      fileName?: string;
    }
  ];
}

interface fileType {
  fileLocation?: string;
  fileName?: string;
}

const FileUpload = (props: FileUploadProps) => {
  const [files, setFiles] = useState<File[]>();
  const [fileList, setFileList] = useState<fileType[]>([]);
  const ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const uploadFiles = e.target.files;
    if (uploadFiles) {
      const newFileList = Array.from(files || []); // 기존의 FileList를 배열로 변환
      const fileName = [];
      for (let i = 0; i < uploadFiles.length; i++) {
        // 새로운 파일들을 배열에 추가
        newFileList.push(uploadFiles[i]);
        fileName.push({ fileName: uploadFiles[i].name, fileLocation: '' });
      }
      props.onFileHandler(newFileList);
      setFiles(newFileList);

      const newFileName = [...fileList, ...fileName];
      setFileList(newFileName);
    }
  };

  useEffect(() => {
    if (props.files !== undefined) {
      setFileList(props.files);
    } else {
      setFileList([]);
    }
  }, [props.files]);

  return (
    <styles.StContainer>
      <FolderIcon />
      {fileList?.map(item => {
        if (item.fileLocation !== '') {
          return (
            <styles.StTagBlock key={nanoid()}>
              <a href={item.fileLocation}>{item.fileName}</a>
            </styles.StTagBlock>
          );
        } else {
          console.log('asdas');
          return <styles.StTagBlock key={nanoid()}>{item.fileName}</styles.StTagBlock>;
        }
      })}

      {props.disable === false && (
        <>
          <styles.StPlusLabel htmlFor="FileInput">
            <HiOutlinePlusSm size="25px" />
          </styles.StPlusLabel>
          <styles.StInput type="file" id="FileInput" multiple onChange={ChangeHandler} />
        </>
      )}
    </styles.StContainer>
  );
};

export default FileUpload;
