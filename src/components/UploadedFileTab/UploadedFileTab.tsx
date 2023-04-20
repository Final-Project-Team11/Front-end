import React, { useEffect, useRef } from 'react';
import { UploadedFileTabProps, UploadedFileList } from './interfaces';
import * as UI from './style';
import { useGetFile } from '../../api/hooks/UploadedFile/useGetFile';
import Board from '../Board/Board';
import UploadedOne from './UploadedOne/UploadedOne';
import TagIcon from '../../assets/Icons/TagIcon';
import FolderIcon from '../../assets/Icons/FolderIcon';
import BusinessIcon from '../../assets/Icons/BusinessIcon';
import CalendarIcon from '../../assets/Icons/CalendarIcon';
import { COLOR } from '../../styles/colors';

const UploadedFileTab = ({ type }: UploadedFileTabProps) => {
  const { data, fetchNextPage, hasNextPage } = useGetFile(type);
  const targetDiv = useRef<HTMLDivElement | null>(null);

  // 스크롤이벤트 동작 시 GET 요청
  const handleScroll = () => {
    const container = targetDiv.current;

    if (container) {
      const scrollHeight = container.scrollHeight;
      const scrollTop = container.scrollTop;
      const clientHeight = container.clientHeight;

      if (scrollTop + clientHeight + 1 >= scrollHeight && hasNextPage) {
        fetchNextPage();
      }
    }
  };

  // div에 스크롤 이벤트 추가.
  useEffect(() => {
    const container = targetDiv.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  const files = data ? data.pages.flatMap(page => page[type] as UploadedFileList[]) : [];

  // 받아오는 type 에 따라 보드 타이틀, icon 변경
  let title;
  let icon;
  switch (type) {
    case 'meetingfiles': {
      title = '회의록';
      icon = <FolderIcon width="21px" height="15px" fill={COLOR.PAGE_BLUE} />;
      break;
    }
    case 'myfiles': {
      title = '내가 올린 파일';
      icon = <BusinessIcon width="21px" height="15px" fill={COLOR.PAGE_BLUE} />;
      break;
    }
    case 'reportfiles': {
      title = '보고서';
      icon = <FolderIcon width="21px" height="15px" fill={COLOR.PAGE_BLUE} />;
      break;
    }
  }

  console.log(files);

  return (
    <Board icon={icon} title={title}>
      <UI.StInsideBlock ref={targetDiv}>
        {files.map((file: UploadedFileList) => {
          return <UploadedOne key={file.eventId} file={file} type={type} />;
        })}
      </UI.StInsideBlock>
    </Board>
  );
};

export default UploadedFileTab;
