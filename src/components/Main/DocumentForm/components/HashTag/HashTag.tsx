import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import useGetTeamInfo from '../../../../../api/hooks/Main/useGetTeamInfo';
import * as styles from './styles';
import TagIcon from '../../../../../assets/Icons/TagIcon';
import { nanoid } from 'nanoid';
import useDropDown from '../../../../../hooks/common/useDropDown';

interface HashTagProps {
  mention?: string[];
  disable?: boolean;
  mentionHandler?: any;
}

const HashTag = (props: HashTagProps) => {
  const [tagList, setTagList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const { data, isLoading } = useGetTeamInfo();

  const mouseDownHandler = () => {
    setIsOpen(!isOpen);
  };

  const [divRef, ulRef, setIsOpen, isOpen, inputPosition] = useDropDown();

  useEffect(() => {
    props.mention && console.log('props.mention', props.mention);
    props.mention && setTagList(props.mention);
  }, [props.mention]);

  const onLiClickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    const name = e.currentTarget.textContent;

    if (props.disable === false) {
      const isValue = tagList.find(tag => tag === name);

      if (isValue !== undefined) {
        alert('언급된 이름이 있습니다.');
        setIsOpen(!isOpen);
      } else {
        const newTagList = [...tagList];
        name && newTagList.push(name);
        setTagList(newTagList);
        setIsOpen(!isOpen);
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
      <styles.StInputBlock ref={divRef}>
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
        isOpen &&
        createPortal(
          <styles.StUlBlock className="tags" ref={ulRef} pos={inputPosition}>
            <styles.StTeamMark className="tags">Team A :</styles.StTeamMark>
            {data?.map((item, index) => {
              return (
                <styles.StLiBlock
                  className="tags"
                  key={nanoid()}
                  onClick={onLiClickHandler}
                >
                  {item.userName}-{item.userId}
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
