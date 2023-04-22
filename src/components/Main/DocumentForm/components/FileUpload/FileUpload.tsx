import React, { useEffect, useState } from 'react';
import FolderIcon from '../../../../../assets/Icons/FolderIcon';
import { HiOutlinePlusSm } from 'react-icons/hi';
import * as styles from './styles';
import { nanoid } from 'nanoid';

interface FileUploadProps {
  onFileHandler: React.Dispatch<React.SetStateAction<File | undefined>>;
  disable?: boolean;
  fileLocation?: string;
  fileName?: string;
}
const FileUpload = (props: FileUploadProps) => {
  console.log('FileUpload', props);
  const [files, setFiles] = useState<File>();
  const [fileNames, setFileNames] = useState<string[]>([]);
  const ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files) {
      const uploadFile = e.target.files[0];
      setFiles(uploadFile);
      const newFiles = [...fileNames, e.target.files[0].name];
      setFileNames(newFiles);
      props.onFileHandler(uploadFile);
    }
  };

  useEffect(() => {
    if (props.fileName !== undefined) {
      const newFileName = [props.fileName];
      setFileNames(newFileName);
    }
  }, [props.fileName]);

  console.log('newFileName', fileNames);
  return (
    <styles.StContainer>
      <FolderIcon />
      {fileNames?.map(item => {
        if (item !== '') {
          return (
            <styles.StTagBlock key={nanoid()}>
              <a href={props.fileLocation}> {item}</a>
            </styles.StTagBlock>
          );
        } else {
          return null;
        }
      })}

      {props.disable === false && (
        <>
          <styles.StPlusLabel htmlFor="FileInput">
            <HiOutlinePlusSm size="25px" />
          </styles.StPlusLabel>
          <styles.StInput type="file" id="FileInput" onChange={ChangeHandler} />
        </>
      )}
    </styles.StContainer>
  );
};

export default FileUpload;
