import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import useGetTeamInfo from '../../../../../api/hooks/Main/useGetTeamInfo';
import * as styles from './styles';
import TagIcon from '../../../../../assets/Icons/TagIcon';
import { nanoid } from 'nanoid';

interface HashTagProps {
  mention?: string[];
  disable?: boolean;
  mentionHandler?: any;
}

const HashTag = (props: HashTagProps) => {
  const [mouseClick, setMouseClick] = useState(false);
  const [tagList, setTagList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const { data, isLoading } = useGetTeamInfo();

  const [inputPosition, setInputPosition] = useState({
    top: 0,
    left: 0,
    height: 0,
    width: 0,
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const mouseDownHandler = () => {
    setMouseClick(!mouseClick);
  };

  useEffect(() => {
    const { current } = inputRef;
    if (current !== null) {
      const { top, left, height, width } = current.getBoundingClientRect();
      const absoluteTop = window.pageYOffset + current.getBoundingClientRect().top;
      if (data !== undefined) {
        if (
          absoluteTop + data.length * 20 >
          screen.height - (document.body.clientHeight - absoluteTop) / 2
        ) {
          const newTop = absoluteTop - (data.length * 49 - height);
          setInputPosition({ top: newTop, left, height, width });
        } else {
          setInputPosition({ top: absoluteTop, left, height, width });
        }
      }
    }
  }, [data]);

  useEffect(() => {
    props.mention && setTagList(props.mention);
  }, [props.mention]);

  const onLiClickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    const name = e.currentTarget.textContent;

    if (props.disable === false) {
      const isValue = tagList.find(tag => tag === name);

      if (isValue !== undefined) {
        alert('언급된 이름이 있습니다.');
        setMouseClick(!mouseClick);
      } else {
        const newTagList = [...tagList];
        name && newTagList.push(name);
        setTagList(newTagList);
        setMouseClick(!mouseClick);
        props.mentionHandler(newTagList);
      }
    }
  };

  const onInputKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const isValue = data.find(name => name.userName === inputValue);
      const istags = tagList.find(tag => tag === inputValue);
      const newTtagList = [...tagList];

      if (isValue !== undefined) {
        if (istags === undefined) {
          newTtagList.push(inputValue);
          setTagList(newTtagList);
          props.mentionHandler(newTtagList);
          setInputValue('');
        } else {
          alert('언급된 이름이 있습니다.');
          setInputValue('');
        }
      } else {
        alert('팀목록에 해당 인원이 없습니다.');
        setInputValue('');
      }
    }
  };

  const deleteClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const clickedElement = event.target as HTMLDivElement;
    const clickedElementId = clickedElement.id;

    const newTagList = tagList.filter(item => item !== clickedElementId);
    setTagList(newTagList);
    props.mentionHandler(newTagList);
  };

  return (
    <styles.StContainer>
      <styles.StIconBlock>
        <TagIcon />
      </styles.StIconBlock>
      <styles.StInputBlock ref={inputRef}>
        {tagList?.map(item => {
          return (
            <styles.StTagBlock key={item}>
              <styles.StProfileBlock>
                <styles.StImageBlock />
                {item}
              </styles.StProfileBlock>
              {props.disable === false && (
                <styles.StDeleteBlock id={item} onClick={deleteClickHandler}>
                  x
                </styles.StDeleteBlock>
              )}
            </styles.StTagBlock>
          );
        })}
        <styles.StInput
          onMouseDown={mouseDownHandler}
          onKeyPress={onInputKeyDownHandler}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          disabled={props.disable}
        />
      </styles.StInputBlock>
      {props.disable === false &&
        mouseClick &&
        createPortal(
          <styles.StUlBlock pos={inputPosition}>
            <styles.StTeamMark>Team A :</styles.StTeamMark>
            {data?.map(item => {
              return (
                <styles.StLiBlock key={nanoid()} onClick={onLiClickHandler}>
                  {/* {item.userName}-{item.userId} */}
                  {item.userName}
                </styles.StLiBlock>
              );
            })}
          </styles.StUlBlock>,
          document.getElementById('root') as HTMLElement
        )}
    </styles.StContainer>
  );
};

export default HashTag;
