import React, { useState } from 'react';
import * as UI from './style';
import { Props } from './interfaces';
import Modal from '../../Modal/Modal';
import UploadedDetail from '../UploadedDetail';
import { useGetUploadedDetail } from '../../../api/hooks/UploadedFile/useGetUploadedDetail';

const UploadedOne = ({ file, type }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const payload = {
    id: file.eventId,
    types: type,
    userId: file.userId,
  };

  const { data, refetch, isLoading } = useGetUploadedDetail(payload);

  const modalOpenHandler = () => {
    refetch();
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <UI.StUploadedFileBlock key={file.eventId} onClick={modalOpenHandler}>
      {modalOpen && (
        <Modal closeModal={closeModal}>
          <UploadedDetail data={data} isLoading={isLoading} type={type} />
        </Modal>
      )}
      <UI.StNameDateBlock>
        <UI.StContentSpan>😵‍💫 | {file.userName}</UI.StContentSpan>
        <UI.StDateSpan className="date"> {file.enrollDay}</UI.StDateSpan>
      </UI.StNameDateBlock>
      <UI.StContentSpan>📎 | {file.fileName}</UI.StContentSpan>
    </UI.StUploadedFileBlock>
  );
};

export default UploadedOne;
