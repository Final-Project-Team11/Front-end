import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import useGetTeamInfo from '../../api/hooks/Main/useGetTeamInfo';
import * as styles from './styles';
import TagIcon from '../../assets/Icons/TagIcon';

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
    console.log('test');
  };

  useEffect(() => {
    const { current } = inputRef;
    if (current !== null) {
      const { top, left, height, width } = current.getBoundingClientRect();
      const absoluteTop = window.pageYOffset + current.getBoundingClientRect().top;
      setInputPosition({ top: absoluteTop, left, height, width });
      console.log({ top, left, height, width });
    }
  }, [tagList]);

  useEffect(() => {
    props.mention && setTagList(props.mention);
  }, [props.mention]);

  const onLiClickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    const name = e.currentTarget.textContent;

    if (props.disable === false) {
      const isValue = tagList.find(tag => tag === name);
      console.log('isValue', isValue);
      if (isValue !== undefined) {
        alert('언급된 이름이 있습니다.');
        setMouseClick(!mouseClick);
      } else {
        const newTtagList = [...tagList];
        name && newTtagList.push(name);
        setTagList(newTtagList);
        setMouseClick(!mouseClick);
        props.mentionHandler(newTtagList);
      }
    }
  };

  const onInputKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const isValue = data.find(name => name === inputValue);
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
              {props.disable === false && <styles.StDeleteBlock>x</styles.StDeleteBlock>}
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
                <styles.StLiBlock onClick={onLiClickHandler}>
                  {/* <styles.StImageBlock /> */}
                  {item}
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
