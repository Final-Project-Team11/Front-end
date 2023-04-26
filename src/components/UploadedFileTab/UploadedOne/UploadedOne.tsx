import React, { useEffect, useState } from 'react';
import * as UI from './style';
import { Props } from '../interfaces';
import Modal from '../../Modal/Modal';
import UploadedDetail from '../UploadedDetail';
import { useGetUploadedDetail } from '../../../api/hooks/UploadedFile/useGetUploadedDetail';
import Person from '../../../assets/Icons/Person';
import File from '../../../assets/Icons/File';

const UploadedOne = ({ file, type }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const payload = {
    eventId: file.Id,
    types: type,
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
    <>
      <UI.StUploadedFileBlock onClick={modalOpenHandler}>
        <UI.StNameDateBlock>
          <UI.StContentSpan>
            <Person colors="gray" /> | {file.userName}
          </UI.StContentSpan>
          <UI.StDateSpan className="date"> {file.start}</UI.StDateSpan>
        </UI.StNameDateBlock>
        <UI.StContentSpan>
          <File colors="gray" /> | {file.files[0].fileName}
        </UI.StContentSpan>
      </UI.StUploadedFileBlock>
      {modalOpen && (
        <Modal closeModal={closeModal}>
          <UploadedDetail
            data={data}
            isLoading={isLoading}
            type={type}
            closeModal={closeModal}
          />
        </Modal>
      )}
    </>
  );
};

export default UploadedOne;
