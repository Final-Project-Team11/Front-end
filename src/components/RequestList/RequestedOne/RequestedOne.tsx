import React, { useState } from 'react';
import * as UI from './style';
import { Props } from './interfaces';
import { useGetRequestDetail } from '../../../api/hooks/Request/useGetRequestDetail';
import Modal from '../../Modal/Modal';
import RequestDetail from '../RequestDetail/RequestDetail';
import Person from '../../../assets/Icons/Person';
import CalendarIcon from '../../../assets/Icons/CalendarIcon';

const RequestedOne = ({ request }: Props) => {
  const { data, refetch, isLoading } = useGetRequestDetail(request.eventId);
  const [modalOpen, setModalOpen] = useState(false);

  const getDetail = () => {
    refetch();
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <UI.StRequestedListBlock
        key={request.eventId}
        types={request.status}
        onClick={() => getDetail()}
      >
        <UI.StLeftBlock>
          <UI.StNameDateBlock>
            <UI.StNameDateDiv>
              <UI.StNameSpan>
                <Person colors={request.status === 'submit' ? 'black' : 'gray'} />
                &nbsp; |&nbsp;
                {request.userName}
              </UI.StNameSpan>
              <UI.StDateSpan className="date">{request.enrollDay}</UI.StDateSpan>
            </UI.StNameDateDiv>
          </UI.StNameDateBlock>
          <UI.StContentSpan>
            <CalendarIcon
              usage={request.status === 'submit' ? 'insideTrue' : 'insideFalse'}
            />
            &nbsp; |&nbsp;
            {request.status === 'deny' ? (
              <UI.StRejectedSpan>{request.title}</UI.StRejectedSpan>
            ) : (
              request.title
            )}
          </UI.StContentSpan>
        </UI.StLeftBlock>
      </UI.StRequestedListBlock>
      {modalOpen && (
        <Modal closeModal={closeModal}>
          <RequestDetail data={data} isLoading={isLoading} />
        </Modal>
      )}
    </>
  );
};

export default RequestedOne;
