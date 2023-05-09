import React, { useEffect, useState } from 'react';
import FolderIcon from '../../../../../assets/Icons/FolderIcon';
import { HiOutlinePlus } from '@react-icons/all-files/hi/HiOutlinePlus';
import * as UI from './styles';
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

  id?: number | string;
}

interface fileType {
  fileLocation?: string;
  fileName?: string;
}

interface fileProps {
  fileLocation?: File;
  fileName?: string;
}

const FileUpload = (props: FileUploadProps) => {
  const [files, setFiles] = useState<fileProps[]>();
  const [fileList, setFileList] = useState<fileType[]>([]);
  const ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const uploadFiles = e.target.files;
    if (uploadFiles) {
      const newFileList: File[] = [];
      const fileName = [];

      if (files !== undefined) {
        for (let i = 0; i < files?.length; i++) {
          newFileList.push(files[i].fileLocation as File);
        }
      }

      const plusFiles = files !== undefined ? [...files] : [];
      for (let i = 0; i < uploadFiles.length; i++) {
        // 새로운 파일들을 배열에 추가
        newFileList.push(uploadFiles[i]);
        plusFiles.push({ fileName: uploadFiles[i].name, fileLocation: uploadFiles[i] });
        fileName.push({ fileName: uploadFiles[i].name, fileLocation: '' });
      }

      props.onFileHandler(newFileList);
      setFiles(plusFiles);

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
  }, [props.id]);

  const cancelFileHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const clickedElement = event.target as HTMLDivElement;
    const fileName = clickedElement.parentElement?.innerText.split('x')[0].trim();

    const newFileList = files?.filter(item => {
      return item.fileName !== fileName;
    });

    const newList = fileList?.filter(item => {
      return item.fileName !== fileName;
    });
    const uplaodFiles: File[] = [];

    if (newFileList !== undefined) {
      for (let i = 0; i < newFileList?.length; i++) {
        uplaodFiles.push(newFileList[i].fileLocation as File);
      }
    }

    props.onFileHandler(uplaodFiles);
    setFiles(newFileList);
    setFileList(newList);
  };

  return (
    <UI.StContainer>
      <UI.StIconBlock>
        <FolderIcon />
      </UI.StIconBlock>
      <UI.StFileListBlock>
        {fileList?.map(item => {
          if (item.fileLocation !== '') {
            return (
              <UI.StTagBlock key={nanoid()}>
                <a href={item.fileLocation} target="_blank">
                  {item.fileName}
                </a>
              </UI.StTagBlock>
            );
          } else {
            return (
              <UI.StTagBlock key={nanoid()}>
                <div>{item.fileName}</div>
                <UI.StDeleteBlock className="files" onClick={cancelFileHandler}>
                  x
                </UI.StDeleteBlock>
              </UI.StTagBlock>
            );
          }
        })}
      </UI.StFileListBlock>
      {props.disable === false && (
        <>
          <UI.StPlusLabel htmlFor="FileInput">
            <HiOutlinePlus size="25px" />
          </UI.StPlusLabel>
          <UI.StInput type="file" id="FileInput" multiple onChange={ChangeHandler} />
        </>
      )}
    </UI.StContainer>
  );
};

export default FileUpload;
