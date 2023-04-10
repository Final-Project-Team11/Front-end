import styled from 'styled-components';

const StContainer = styled.div`
  margin: 10px 360px 0;
  border-top: 3px solid #badaff;
`;

const StTitleBlock = styled.div`
  display: flex;
  gap: 30px;
  line-height: 50px;
  font-size: 20px;
  text-align: center;
`;

const StContentBlock = styled.div`
  height: 150px;
  border-top: 3px solid #badaff;
  border-bottom: 3px solid #badaff;
`;

const StMentionBlock = styled.div`
  border-bottom: 3px solid #badaff;
  height: 50px;
`;

export { StContainer, StTitleBlock, StContentBlock, StMentionBlock };
