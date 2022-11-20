import React from 'react';
import styled from 'styled-components';
import CategoryTag from '../base/CategoryTag';

const TasteCheckHeader = ({ item }) => {
  const { title, type } = item;
  return (
    <HeaderContainer>
      <CurationObjectName>{title}</CurationObjectName>
      <CategoryTag type={type} />
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

export default TasteCheckHeader;
