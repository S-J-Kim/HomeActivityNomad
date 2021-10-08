import React, { useState } from 'react';
import styled from 'styled-components';

const CategoryTag = (props) => {
  const { type } = props;

  return <StyledTag>{type}</StyledTag>;
};

const StyledTag = styled.div`
  width: 8rem;
  height: 2.5rem;
  font-size: 1.2rem;
  border-radius: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  background: rgb(26, 188, 156);
  color: white;
`;

export default CategoryTag;
