import React, { useState } from 'react';
import LikeButton from '../LikeButton';
import styled from 'styled-components';
import { useParams } from 'react-router';

const CurationDetailHeader = ({ item }) => {
  const { objectName, type } = item;

  return (
    <HeaderContainer>
      <CurationObjectName>{objectName}</CurationObjectName>
      <LikeButton type={type} />
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
