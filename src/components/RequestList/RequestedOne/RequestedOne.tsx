import React, { useState } from 'react';
import * as UI from './style';
import Modal from '../../Atoms/Modal/CustomModal';
import RequestDetail from '../RequestDetail';
import Person from '../../../assets/Icons/Person';
import CalendarIcon from '../../../assets/Icons/CalendarIcon';
import { RequestedOneProps } from '../interfaces';

const RequestedOne = ({ request, type }: RequestedOneProps) => {
  // GETdetail payload

  const [modalOpen, setModalOpen] = useState(false);

  // 모달을 띄우고, GETdetail 요청을 보내서 모달에 전달.
  const getDetail = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <UI.StRequestedListBlock
        key={request.Id}
        types={request.status}
        onClick={() => getDetail()}
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
