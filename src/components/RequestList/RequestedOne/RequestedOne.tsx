import React, { useState } from 'react';
import * as UI from './style';
import { Props } from './interfaces';
import { useGetRequestDetail } from '../../../api/hooks/Request.tsx/useGetRequestDetail';
import Modal from '../../Modal/Modal';
import RequestDetail from '../RequestDetail/RequestDetail';

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

  if (data) console.log(data);

  return (
    <UI.StRequestedListBlock
      key={request.eventId}
      types={request.status}
      onClick={() => getDetail()}
    >
      {modalOpen && (
        <Modal closeModal={closeModal}>
          <RequestDetail data={data} isLoading={isLoading} />
        </Modal>
      )}
      <UI.StLeftBlock>
        <UI.StNameDateBlock>
          <UI.StNameDateDiv>
            <UI.StNameSpan>😵‍💫 | {request.userName}</UI.StNameSpan>
            <UI.StDateSpan className="date">{request.enrollDay}</UI.StDateSpan>
          </UI.StNameDateDiv>
        </UI.StNameDateBlock>
        <UI.StContentSpan>
          📎 |{' '}
          {request.status === 'deny' ? (
            <UI.StRejectedSpan>{request.title}</UI.StRejectedSpan>
          ) : (
            request.title
          )}
        </UI.StContentSpan>
      </UI.StLeftBlock>
    </UI.StRequestedListBlock>
  );
};

export default RequestedOne;
