import React, { Fragment, useState } from 'react';
import { AiOutlineComment } from 'react-icons/ai';
import { BsHeart, BsShareFill } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../../Components/base/Container';
import LikeButton from '../../Components/Curation/LikeButton';
import StoryHeader from '../../Components/Story/list/StoryHeader';

const StoryList = (props) => {
  const [stories, setStories] = useState({
    profileImage: `/images/images.jpeg`,
    nickname: '친구이름',
    content:
      '요즘 핫한 오징어게임! 드디어 나도봤다! 추억의 달고나게임ㅎㅎ 아쉽게 실패 ㅠ',
    type: 'Media',
  });
  const history = useHistory();

  return (
    <Fragment>
      <StoryHeader title="친구야 뭐하니?" />
      <ExpandedContainer>
        <StoryDescContainer>
          <StoryInfoContainer>
            <StoryAuthorContainer>
              <AuthorProfileImage src={stories.profileImage} />
              <AuthorNickname>{stories.nickname}</AuthorNickname>
            </StoryAuthorContainer>
            <StoryPreview>{stories.content}</StoryPreview>
            <LikeButton type={stories.type} />
          </StoryInfoContainer>
          <StoryButtonContainer>
            <BsHeart size={30} color={'red'} />
            <AiOutlineComment
              size={30}
              onClick={() => history.push('/story/comment/1')}
            />
            <BsShareFill size={30} />
          </StoryButtonContainer>
        </StoryDescContainer>
      </ExpandedContainer>
    </Fragment>
  );
};

const ExpandedContainer = styled(Container)`
  flex: 1;
  background-image: url('/images/dalgona.jpeg');
  background-position: center;
  background-size: cover;
  margin-top: 0;
`;

const StoryDescContainer = styled.section`
  width: 100%;
  height: 22rem;

  display: flex;
  justify-content: space-between;

  padding: 2rem;
  margin-top: auto;

  background-color: rgba(0, 0, 0, 0.2);
`;

const StoryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StoryAuthorContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorProfileImage = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 100%;
  background-color: grey;
`;

const AuthorNickname = styled.h1`
  font-size: 1.8rem;
  margin: 0;
  color: white;
  font-weight: bold;
  margin-left: 1rem;
`;

const StoryPreview = styled.p`
  font-size: 1.6rem;
  font-weight: normal;
  color: white;
  line-height: 1.6;
  margin: 1rem 0;
`;

const StoryButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0;
`;

export default StoryList;
