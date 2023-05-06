import * as UI from './style';
// 스타일, 인터페이스
import { FileProps } from '../interfaces';
// 컴포넌트
import Modal from '../../../Atoms/Modal/CustomModal';
import MyRequestDetail from '../MyRequestDetail/MyRequestDetail';
// SVG파일
import Person from '../../../../assets/Icons/Person';
import CalendarIcon from '../../../../assets/Icons/CalendarIcon';
// 라이브러리
import { BsCheckCircle } from '@react-icons/all-files/bs/BsCheckCircle';
import { BsXCircle } from '@react-icons/all-files/bs/BsXCircle';
import { BsCircle } from '@react-icons/all-files/bs/BsCircle';
import { useState } from 'react';

const MyRequestList = ({ file }: FileProps) => {
  // 상세정보 모달 오픈상태
  const [modalOpen, setModalOpen] = useState(false);

  // 모달닫기함수
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
