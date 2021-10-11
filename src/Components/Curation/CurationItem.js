import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CategoryTag from './CategoryTag';

const CurationItem = (props) => {
  const { items, match } = props;

  return (
    <CurationItemsContainer>
      {items.map((el) => {
        return (
          <Link to={`${el.type}/${el.id}`}>
            <SingleCurationItem item={el} />
          </Link>
        );
      })}
    </CurationItemsContainer>
  );
};

const SingleCurationItem = ({ item }) => {
  const { itemImage, itemName, type } = item;

  return (
    <ItemContainer>
      <ItemImage src={itemImage} />
      <ItemName>{itemName}</ItemName>
      <CategoryTag type={type} />
    </ItemContainer>
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
  align-content: stretch;
  background-color: grey;
`;

const ItemName = styled.h2`
  padding: 0;
  font-size: 1.6rem;
  font-weight: bold;
`;

export default CurationItem;
export { SingleCurationItem };
