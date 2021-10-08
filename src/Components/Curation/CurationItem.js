import React from 'react';
import styled from 'styled-components';
import CategoryTag from './CategoryTag';

const CurationItem = (props) => {
  const { items } = props;

  return (
    <CurationItemsContainer>
      {items.map((el) => {
        return (
          <ItemContainer>
            <ItemImage src={el.itemImage} />
            <ItemName>{el.itemName}</ItemName>
            <CategoryTag type={el.type} />
          </ItemContainer>
        );
      })}
    </CurationItemsContainer>
  );
};

const CurationItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 4rem;
`;

const ItemContainer = styled.div`
  width: 16.5rem;
  height: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  padding-top: 2rem;
  margin: 1rem auto;
`;

const ItemImage = styled.img`
  width: 12.5rem;
  height: 12.5rem;
  background-color: grey;
`;

const ItemName = styled.h2`
  padding: 0;
  font-size: 1.6rem;
  font-weight: bold;
`;

export default CurationItem;
