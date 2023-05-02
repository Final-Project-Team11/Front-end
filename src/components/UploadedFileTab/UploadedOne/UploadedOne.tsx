import { useState } from 'react';
import * as UI from './style';
import { Props } from '../interfaces';
import Modal from '../../Atoms/Modal/CustomModal';
import UploadedDetail from '../UploadedDetail';
import Person from '../../../assets/Icons/Person';
import File from '../../../assets/Icons/File';

const UploadedOne = ({ file, type }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  // 모달 오픈하며 디테일데이터 요청, 모달로 전달
  const modalOpenHandler = () => {
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
          <UI.StDateSpan className="date"> {file.enroll}</UI.StDateSpan>
        </UI.StNameDateBlock>
        <UI.StContentSpan>
          <File colors="gray" /> | {file.files[0].fileName}
        </UI.StContentSpan>
      </UI.StUploadedFileBlock>
      {modalOpen && (
        <Modal closeModal={closeModal}>
          <UploadedDetail eventId={file.Id} types={type} closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default UploadedOne;
