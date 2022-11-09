import React, { useState } from 'react';
import styled from 'styled-components';

const LikeButton = (props) => {
  const { type } = props;
  const [liked, setLiked] = useState(false);

  const handleLikeButtonClick = () => {
    setLiked(!liked);
  };

  return (
    <LikeButtonContainer liked={liked} onClick={handleLikeButtonClick}>
      ♡ <div>좋아요</div>
    </LikeButtonContainer>
  );
};

const StyledTag = styled.div`
  width: 8rem;
  height: 2.5rem;
  font-size: 1.2rem;
  border-radius: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  background: rgb(26, 188, 156);
  color: white;
`;

const LikeButtonContainer = styled.button`
  width: 10rem;
  height: 3rem;
  border-radius: 4px;
  border: 2px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: auto 5px;
  color: ${({ liked }) => (liked ? 'white' : 'red')};
  background-color: ${({ liked }) => (liked ? 'red' : 'transparent')};
  cursor: pointer;
  transition: 0.12s ease-in all;
`;

export default LikeButton;
