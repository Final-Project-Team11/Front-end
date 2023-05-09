import { useState } from 'react';
// 스타일, 인터페이스
import * as UI from './style';
import { RequestedOneProps } from '../interfaces';
// 컴포넌트
import RequestDetail from '../RequestDetail';
import Modal from '../../../Atoms/Modal/CustomModal';
// SVG파일
import Person from '../../../../assets/Icons/Person';
import CalendarIcon from '../../../../assets/Icons/CalendarIcon';

const RequestedOne = ({ request, type }: RequestedOneProps) => {
  // 디테일 모달 오픈 state
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <UI.StRequestedListBlock
        key={request.Id}
        types={request.status}
        onClick={() => setModalOpen(true)}
      >
        <UI.StNameDateDiv>
          <UI.StNameSpan>
            <Person colors={request.status === 'submit' ? 'black' : 'gray'} />
            &nbsp; |&nbsp;
            {request.userName}
          </UI.StNameSpan>
          <UI.StDateSpan className="date">{request.enrollDay}</UI.StDateSpan>
        </UI.StNameDateDiv>
        <UI.StContentSpan>
          <CalendarIcon
            usage={request.status === 'submit' ? 'insideTrue' : 'insideFalse'}
          />
          &nbsp; |&nbsp;
          <UI.StRejectedSpan types={request.status}>{request.title}</UI.StRejectedSpan>
        </UI.StContentSpan>
      </UI.StRequestedListBlock>
      {modalOpen && (
        <Modal closeModal={closeModal}>
          <RequestDetail closeModal={closeModal} type={type} eventId={request.Id} />
        </Modal>
      )}
    </>
  );
};

export default RequestedOne;
