import React, { useState } from 'react';
import styled from 'styled-components';

const Header = (props) => {
  const { title, subTitle } = props;

  return (
    <HeaderContainer>
      <TitleContainer>
        <Title>{title}</Title>
        <ProfileImage
          src={process.env.PUBLIC_URL + '/images/base/defaultprofileimage.svg'}
        />
      </TitleContainer>
      <SubTitle>{subTitle}</SubTitle>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 6rem;
  padding: 1.5rem;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  background: #ffffff;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.08);
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
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

export default Header;
