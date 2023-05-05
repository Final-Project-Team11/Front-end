import * as UI from './style';
import { BsCheckCircle } from '@react-icons/all-files/bs/BsCheckCircle';
import { BsXCircle } from '@react-icons/all-files/bs/BsXCircle';
import { BsCircle } from '@react-icons/all-files/bs/BsCircle';
import { FileProps } from '../interfaces';
import Person from '../../../assets/Icons/Person';
import CalendarIcon from '../../../assets/Icons/CalendarIcon';
import { useState } from 'react';
import Modal from '../../Atoms/Modal/CustomModal';
import MyRequestDetail from '../MyRequestDetail/MyRequestDetail';

const MyRequestList = ({ file }: FileProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <UI.StFileBlock status={file.status} onClick={() => setModalOpen(true)}>
        <UI.StSpanBlock>
          <UI.StNameDateBlock>
            <UI.StFileSpan>
              <Person colors={file.status === 'submit' ? 'black' : 'gray'} />
              &nbsp; |&nbsp;
              {file.userName}
            </UI.StFileSpan>
            <UI.StDateSpan className="date">{file.enroll}</UI.StDateSpan>
          </UI.StNameDateBlock>
          <UI.StFileSpan>
            <CalendarIcon
              usage={file.status === 'submit' ? 'insideTrue' : 'insideFalse'}
            />
            &nbsp; |&nbsp;
            {file.status === 'submit' ? (
              file.title
            ) : (
              <UI.StRejectedSpan>{file.title}</UI.StRejectedSpan>
            )}
          </UI.StFileSpan>
        </UI.StSpanBlock>

        {/* status 에 따라 다르게 보일 체크, X, 빈 원 표시 */}
        <UI.StStatusBlock status={file.status}>
          {file.status === 'submit' ? (
            <BsCircle />
          ) : file.status === 'accept' ? (
            <BsCheckCircle />
          ) : file.status === 'deny' ? (
            <BsXCircle />
          ) : null}
        </UI.StStatusBlock>
      </UI.StFileBlock>
      {modalOpen && (
        <Modal closeModal={closeModal}>
          <MyRequestDetail closeModal={closeModal} eventId={file.Id} />
        </Modal>
      )}
    </>
  );
};

export default MyRequestList;
