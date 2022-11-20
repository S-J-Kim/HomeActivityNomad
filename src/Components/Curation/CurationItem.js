import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LikeButton from './LikeButton';
import CategoryTag from '../base/CategoryTag';
import { useLocation } from 'react-router';

const CurationItem = (props) => {
  const { items, match } = props;
  const location = useLocation();

  return (
    <CurationItemsContainer>
      {items.map((el) => {
        return (
          <Link
            to={() => {
              if (location.pathname !== '/mypage') {
                return `${el.platformList[0]}/${el.mediaId}`;
              } else return '#';
            }}
          >
            <SingleCurationItem item={el} />
          </Link>
        );
      })}
    </CurationItemsContainer>
  );
};

const SingleCurationItem = ({ item }) => {
  const { imageUrl, name, platformList } = item;
  const location = useLocation();

  return (
    <ItemContainer>
      <ItemImage src={imageUrl} />
      <ItemName>{name}</ItemName>
      {/* <LikeButton type={type} /> */}
      {location.pathname !== '/mypage' && (
        <CategoryTag type={platformList[0]} />
      )}
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
  border-radius: 6px;
  align-content: stretch;
  background-color: grey;
`;

const ItemName = styled.div`
  padding: 0;
  color: black;
  text-align: center;
  margin: 0.5rem auto;
  font-size: 1.6rem;
  font-weight: bold;
  width: 14rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  word-break: break-all;
`;

export default CurationItem;
export { SingleCurationItem };
