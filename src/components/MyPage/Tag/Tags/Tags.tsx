// 스타일, 인터페이스
import * as UI from './style';
import { TagsProps } from '../interfaces';
// 서버 요청
import { usePatchTag } from '../../../../api/hooks/Tag/usePatchTag';

const Tags = ({ tag, types }: TagsProps) => {
  // 태그 클릭 시 체크 요청
  const { tagCheck } = usePatchTag();

  // 멘션 클릭 시 체크
  const clickTagHandler = (mentionId: number) => {
    tagCheck(mentionId);
  };

  return (
    <UI.StTagsBlock isChecked={tag.isChecked}>
      <UI.StContentSpan
        types={types}
        onClick={() => !tag.isChecked && clickTagHandler(tag.mentionId)}
      >
        @ / <UI.StTitleSpan>{tag.title}</UI.StTitleSpan>&nbsp;
        <UI.StTitleSpan>{tag.userName}</UI.StTitleSpan>
      </UI.StContentSpan>
    </UI.StTagsBlock>
  );
};

export default Tags;
