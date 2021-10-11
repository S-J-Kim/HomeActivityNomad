import React, { Fragment } from 'react';
import styled from 'styled-components';
import Header from '../../Components/base/Header';
import Container from '../../Components/base/Container';
import CurationDetailHeader from '../../Components/Curation/detail/CurationDeatilHeader';
import { BiDislike, BiLike } from 'react-icons/bi';
import {
  CategoryContainer,
  CategoryButton,
  CategoryButtonInput,
} from '../../Components/base/Category';

const ratings = [1, 2, 3, 4, 5];

const TasteCheck = (props) => {
  return (
    <Fragment>
      <Header title="너의 취향은?" subTitle="당신의 취향을 알아봅시다" />
      <Container>
        <CurationDetailHeader
          item={{ objectName: '성향조사 1', type: 'Food' }}
        />
        <ObjectImg />
        <RatingContainer>
          <BiDislike size={32} color="red" />
          <RatingButtonContainer>
            {ratings.map((el, idx) => {
              return (
                <Fragment>
                  <CategoryButtonInput
                    id={`rating${idx}${el}`}
                    name="rating"
                    value={el}
                  />
                  <RatingButtonLabel htmlFor={`rating${idx}${el}`} />
                </Fragment>
              );
            })}
          </RatingButtonContainer>
          <BiLike size={32} color="blue" />
        </RatingContainer>
      </Container>
    </Fragment>
  );
};

const ObjectImg = styled.img`
  width: 100%;
  height: 31.5rem;
  background-color: grey;
`;

const RatingContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
`;

const RatingButtonLabel = styled(CategoryButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.3rem;
  height: 3.3rem;
  margin: auto 0.5rem;
  border: 3px solid rgb(22, 160, 133);
  border-radius: 100%;
`;

const RatingButtonContainer = styled(CategoryContainer)`
  justify-content: center;
`;

export default TasteCheck;
