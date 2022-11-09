import React from 'react';
import styled from 'styled-components';

const GridContainer = ({ children }) => {
  return <InnerContainer>{children}</InnerContainer>;
};

const InnerContainer = styled.form`
  display: flex;
  justify-contents: space-between;
  flex-wrap: wrap;
  gap: 2.2rem;
`;

export default GridContainer;
