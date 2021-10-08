import React, { Fragment } from 'react';
import styled from 'styled-components';
import ShadowedContainer from './ShadowedContainer';

const FoodRecipe = ({ item }) => {
  const { ingredients, directions } = item.relatedInfo;

  return (
    <ShadowedContainer>
      <Ingredients ingredients={ingredients} />
      <Directions directions={directions} />
    </ShadowedContainer>
  );
};

const Ingredients = ({ ingredients }) => {
  return (
    <Fragment>
      <RecipeTitle>재료</RecipeTitle>
      <ul>
        {ingredients.map((ingredient) => {
          return <li>{ingredient}</li>;
        })}
      </ul>
    </Fragment>
  );
};

const Directions = ({ directions }) => {
  return (
    <Fragment>
      <RecipeTitle>조리법</RecipeTitle>
      <ol>
        {directions.map((direction) => {
          return <li>{direction}</li>;
        })}
      </ol>
    </Fragment>
  );
};

const RecipeTitle = styled.h3`
  font-size: 1.6rem;
`;

export default FoodRecipe;
