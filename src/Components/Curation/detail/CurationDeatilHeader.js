import React from 'react';
import styled from 'styled-components';
import LikeButton from '../LikeButton';

const CurationDetailHeader = ({ item, pk }) => {
  const { name, likeStatus } = item;

  return (
    <HeaderContainer>
      <CurationObjectName>{name}</CurationObjectName>
      <LikeButton likeStatus={likeStatus} pk={pk} />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.section`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CurationObjectName = styled.h1`
  font-size: 1.8rem;
  margin: 1.8rem 0;
`;

export default CurationDetailHeader;
