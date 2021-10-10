import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import styled from 'styled-components';

const CommentHeader = (props) => {
  const { title } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <HeaderContainer>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 8rem;
  box-sizing: border-box;
  padding: 1.5rem;
  background-color: rgba(0, 0, 0, 0.01);
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.08);
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: black;
`;

const ProfileImage = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 100%;
`;

const SubTitle = styled.div`
  font-size: 1.3rem;
  color: grey;
  font-weight: 300;
`;

export default CommentHeader;
