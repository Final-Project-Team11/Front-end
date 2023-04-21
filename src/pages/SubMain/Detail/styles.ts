import styled from 'styled-components';
import { COLOR } from '../../../styles/colors';

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
  height: 250px;
  border-top: 3px solid ${COLOR.DETAIL_GRAY};
  border-bottom: 3px solid ${COLOR.DETAIL_GRAY};
  padding: 10px 0;
`;

const StMentionBlock = styled.div`
  border-bottom: 3px solid ${COLOR.DETAIL_GRAY};
  height: 60px;
  margin-bottom: 30px;
`;

const StButtonBlock = styled.div``;

const StTextArea = styled.textarea`
  width: 100%;
  border: none;
  height: 100%;
  outline: none;
  font-size: 20px;
  resize: none;
`;

const StInput = styled.input`
  border: none;
  font-size: 20px;

  outline: none;
`;

const StMarkBlock = styled.div`
  width: 13px;
  height: 30px;
  background-color: ${COLOR.SCHEDULE_BLUE};
  border-radius: 10px;
  margin-left: 10px;
`;

const StMarkNameBlcok = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const StPeriodBlock = styled.div`
  display: flex;
  gap: 3px;
  font-weight: bold;
`;

const StTextAreaBlock = styled.div`
  margin-left: 30px;
  height: 170px;
`;

const StFileBlock = styled.div`
  display: flex;
  margin-left: 8px;
  align-items: center;
  gap: 10px;
`;

const StFileNameSpan = styled.span`
  color: rgb(221, 221, 221);

  &:hover {
    color: rgb(186, 186, 186);
  }
`;

export {
  StContainer,
  StTitleBlock,
  StContentBlock,
  StMentionBlock,
  StTitleContentBlock,
  StButtonBlock,
  StTextArea,
  StInput,
  StMarkBlock,
  StPeriodBlock,
  StMarkNameBlcok,
  StTextAreaBlock,
  StFileBlock,
  StFileNameSpan,
};
