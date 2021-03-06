import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

const Category = (props) => {
  const { onCategoryChange } = props;
  const [mainCategory, setMainCategory] = useState();
  const [subCategory, setSubCategory] = useState([]);

  const handleMainCategorySelect = (e) => {
    onCategoryChange(e.target.value);
    setSubCategory(categories.find((el) => el.main === e.target.value).sub);
  };

  return (
    <Fragment>
      <CategoryContainer
        onChange={(e) => {
          handleMainCategorySelect(e);
        }}
      >
        {categories.map((el, idx) => {
          return (
            <Fragment>
              <CategoryButtonInput
                id={`main${idx}${el.main}`}
                name="mainCategory"
                value={el.main}
              />
              <CategoryButton htmlFor={`main${idx}${el.main}`}>
                {el.main}
              </CategoryButton>
            </Fragment>
          );
        })}
      </CategoryContainer>
      <CategoryContainer>
        {subCategory.map((el, idx) => {
          return (
            <Fragment>
              <CategoryButtonInput
                id={`sub${idx}${el}`}
                name="subCategory"
                value={el}
                key={`${el}${idx}`}
              />
              <CategoryButton sub htmlFor={`sub${idx}${el}`}>
                {el}
              </CategoryButton>
            </Fragment>
          );
        })}
      </CategoryContainer>
    </Fragment>
  );
};

const CategoryButton = styled.label`
  width: ${({ sub }) => (sub ? '5.5rem' : '7rem')};
  height: ${({ sub }) => (sub ? '1.7rem' : '2.2rem')};
  font-size: ${({ sub }) => (sub ? '1rem' : '1.2rem')};
  border-radius: 3rem;
  background-color: white;
  color: rgb(22, 160, 133);
  border: 1px solid rgb(22, 160, 133);
  text-align: center;
  vertical-align: middle;
`;

const CategoryButtonInput = styled.input.attrs({ type: 'radio' })`
  display: none;

  &:checked + ${CategoryButton} {
    background-color: rgb(22, 160, 133);
    color: white;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  height: auto;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
`;

const categories = [
  { main: 'Food', sub: ['??????', '??????', '??????', '??????', '??????'] },
  { main: 'Desert', sub: ['??????', '????????????', '??????', '?????????', '??????'] },
  {
    main: 'Media',
    sub: [
      '????????????',
      '??????',
      '??????',
      '?????????',
      '??????',
      '?????????',
      '??????',
      '??????',
    ],
  },
  { main: 'Workout', sub: ['??????', '?????????', '??????', '?????????', '??????'] },
];

export default Category;
export { CategoryButton, CategoryButtonInput, CategoryContainer };
