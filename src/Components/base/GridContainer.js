import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const GridContainer = ({ children, onSubmit }) => {
  return <InnerContainer onSubmit={onSubmit}>{children}</InnerContainer>;
};

const InnerContainer = styled.form`
  display: flex;
  justify-contents: space-between;
  flex-wrap: wrap;
  gap: 2.2rem;
`;

export default GridContainer;
