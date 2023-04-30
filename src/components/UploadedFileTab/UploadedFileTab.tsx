import React, { useRef } from 'react';
import { UploadedFileTabProps, UploadedFileList } from './interfaces';
import { PageData, useGetFile } from '../../api/hooks/UploadedFile/useGetFile';
import Board from '../Board/Board';
import UploadedOne from './UploadedOne/UploadedOne';
import FolderIcon from '../../assets/Icons/FolderIcon';
import BusinessIcon from '../../assets/Icons/BusinessIcon';
import { COLOR } from '../../styles/colors';
import { useInfiniteQueryHook } from '../../hooks/common/useInfiniteQueryHook';

const UploadedFileTab = ({ type }: UploadedFileTabProps) => {
  const { data, fetchNextPage, hasNextPage } = useGetFile(type);

  // 무한스크롤을 적용할 div를 타겟하기 위해 추가한 useRef
  const targetDiv = useRef<HTMLDivElement | null>(null);

  // 무한스크롤 커스텀훅
  useInfiniteQueryHook<PageData>({ targetDiv, fetchNextPage, hasNextPage });

  // data.pages를 풀어서 하나의 배열로 -> useInfiniteQuery 에서 return 하는 data 형식 참고.
  const files = data ? data.pages.flatMap(page => page[type] as UploadedFileList[]) : [];

  // 받아오는 type 에 따라 보드 타이틀, icon 변경
  let title;
  let icon;
  switch (type) {
    case 'meetingfiles' || 'reportfiles': {
      title = '회의록';
      icon = <FolderIcon width="21px" height="15px" fill={COLOR.PAGE_BLUE} />;
      break;
    }
    case 'reportfiles': {
      title = '보고서';
      icon = <FolderIcon width="21px" height="15px" fill={COLOR.PAGE_BLUE} />;
      break;
    }
    case 'myfiles': {
      title = '내가 올린 파일';
      icon = <BusinessIcon width="21px" height="15px" fill={COLOR.PAGE_BLUE} />;
      break;
    }
  }

  return (
    <Board icon={icon} title={title} targetDiv={targetDiv}>
      {files.map((file: UploadedFileList) => {
        return <UploadedOne key={file.Id} file={file} type={type} />;
      })}
    </Board>
  );
};

export default UploadedFileTab;
