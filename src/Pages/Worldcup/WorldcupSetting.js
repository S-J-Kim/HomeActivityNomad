import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {
  CategoryButton,
  CategoryButtonInput,
  CategoryContainer,
} from '../../Components/base/Category';
import Container from '../../Components/base/Container';
import Header from '../../Components/base/Header';
import SectionHeader from '../../Components/base/SectionTitle';

const categories = ['Food', 'Dessert', 'Media', 'Workout'];
const rounds = ['8강', '16강', '32강', '64강'];

const WorldcupSetting = (props) => {
  const history = useHistory();

  return (
    <Fragment>
      <Header title="집콕 월드컵" subTitle="OTT Content 월드컵" />
      <Container style={{ flex: 1 }}>
        <SectionHeader>월드컵 설정하기</SectionHeader>
        <Fragment>
          {/* <ContainerLabel>
            카테고리 선택
            <CategoryButtonContainer>
              {categories.map((el, idx) => {
                return (
                  <Fragment>
                    <CategoryButtonInput
                      id={`main${idx}${el}`}
                      name="mainCategory"
                      value={el}
                    />
                    <CategoryButtonLabel htmlFor={`main${idx}${el}`}>
                      {el}
                    </CategoryButtonLabel>
                  </Fragment>
                );
              })}
            </CategoryButtonContainer>
          </ContainerLabel> */}
          <ContainerLabel>
            라운드 선택
            <CategoryButtonContainer>
              {rounds.map((el, idx) => {
                return (
                  <Fragment>
                    <CategoryButtonInput
                      id={`round${idx}${el}`}
                      name="rounds"
                      value={el}
                    />
                    <CategoryButtonLabel htmlFor={`round${idx}${el}`}>
                      {el}
                    </CategoryButtonLabel>
                  </Fragment>
                );
              })}
            </CategoryButtonContainer>
          </ContainerLabel>
        </Fragment>
        <NextButton onClick={() => history.push('/worldcup/round')}>
          시작하기
        </NextButton>
      </Container>
    </Fragment>
  );
};

const CategoryButtonLabel = styled(CategoryButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 9.6rem;
  border: 3px solid rgb(22, 160, 133);
  border-radius: 4px;
  font-size: 1.6rem;
`;

const ContainerLabel = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.7rem;
  margin-top: 4rem;
`;

const CategoryButtonContainer = styled(CategoryContainer)`
  justify-content: space-between;
`;

const NextButton = styled.button`
  width: 100%;
  height: 4rem;
  text-align: center;
  font-size: 1.6rem;
  color: white;
  background-color: rgb(52, 152, 219);
  border: none;
  border-radius: 5px;
  margin-top: auto;
`;

export default WorldcupSetting;
