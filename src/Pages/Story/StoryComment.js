import React, { Fragment, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import styled from 'styled-components';
import Container from '../../Components/base/Container';
import CommentHeader from '../../Components/Story/comment/CommentHeader';
import ShadowedContainer from '../../Components/Curation/detail/ShadowedContainer';

const StoryComment = (props) => {
  const [comments, setComments] = useState([
    {
      profileImage: '',
      nickname: '친구이름',
      comment: '댓글내용 댓글내용 댓글내용 댓글내용 댓글내용',
      createdAt: '10:53 AM',
      likes: 30,
    },
    {
      profileImage: '',
      nickname: '친구이름',
      comment: '댓글내용 댓글내용 댓글내용 댓글내용 댓글내용',
      createdAt: '10:53 AM',
      likes: 30,
    },
    {
      profileImage: '',
      nickname: '친구이름',
      comment:
        '댓글내용 댓글내용 댓글내용 댓글내용 댓글내용 댓글내용 댓글내용 댓글내용 댓글내용 댓글내용 댓글내용 댓글내용 댓글내용 댓글내용 댓글내용',
      createdAt: '10:53 AM',
      likes: 30,
    },
    {
      profileImage: '',
      nickname: '친구이름',
      comment: '댓글내용 댓글내용 댓글내용 댓글내용 댓글내용',
      createdAt: '10:53 AM',
      likes: 30,
    },
  ]);

  return (
    <Fragment>
      <CommentHeader title="댓글보기" />
      <Container>
        <CommentCounter>댓글 {comments.length}개</CommentCounter>
        <CommentList>
          {comments.map((comment) => {
            return (
              <CommentItemContainer>
                <Comment>
                  <CommentInfoContainer>
                    <CommentAuthorInfo>
                      <AuthorProfileImage />
                      <AuthorNickname>{comment.nickname}</AuthorNickname>
                    </CommentAuthorInfo>
                    <CommentSubmittedTime>
                      {comment.createdAt}
                    </CommentSubmittedTime>
                  </CommentInfoContainer>
                  <CommentText>{comment.comment}</CommentText>
                </Comment>
                <CommentLikeContainer>
                  <AiFillHeart size={30} color={'red'} />
                  <CommentLikeCount>{comment.likes}</CommentLikeCount>
                </CommentLikeContainer>
              </CommentItemContainer>
            );
          })}
        </CommentList>
      </Container>
    </Fragment>
  );
};

const CommentCounter = styled.h1`
  font-size: 1.8rem;
  margin: 2rem 0;
`;

const CommentList = styled.section`
  display: flex;
  flex-direction: column;
`;

const CommentItemContainer = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin-bottom: 3rem;
`;

const Comment = styled(ShadowedContainer)`
  flex: 1;
  border-radius: 0;
  margin-bottom: 0;
  background-color: rgb(250, 250, 250);
`;

const CommentInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommentAuthorInfo = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorProfileImage = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
`;

const AuthorNickname = styled.span`
  font-size: 1.4rem;
  margin-left: 1.4rem;
  color: rgb(94, 94, 94);
`;

const CommentSubmittedTime = styled.span`
  font-size: 1.2rem;
  color: rgb(158, 158, 158);
  font-weight: light;
`;

const CommentText = styled.p`
  font-size: 1.2rem;
  margin-top: 1.2rem;
  color: rgb(158, 158, 158);
`;

const CommentLikeContainer = styled.div`
  width: auto;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
`;

const CommentLikeCount = styled.span`
  font-size: 1.6rem;
  margin-top: 1rem;
  font-weight: bold;
`;

export default StoryComment;
