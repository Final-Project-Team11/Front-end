import styled from 'styled-components';
import { COLOR } from '../../../constants/colors';

const StContainer = styled.div`
  border-top: 3px solid ${COLOR.DETAIL_GRAY};
`;

const StTitleContentBlock = styled.div`
  display: flex;
  gap: 30px;
  line-height: 50px;
  font-size: 20px;
  align-items: center;
  text-align: center;
`;

const StTitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StContentBlock = styled.div`
  height: 150px;
  border-top: 3px solid ${COLOR.DETAIL_GRAY};
  border-bottom: 3px solid ${COLOR.DETAIL_GRAY};
`;

const StMentionBlock = styled.div`
  border-bottom: 3px solid ${COLOR.DETAIL_GRAY};
  height: 50px;
`;

export { StContainer, StTitleBlock, StContentBlock, StMentionBlock, StTitleContentBlock };
