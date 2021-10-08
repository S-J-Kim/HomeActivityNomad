import React from 'react';
import styled from 'styled-components';

const ShadowedContainer = styled.section`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  padding: 1rem 2rem;
  margin-bottom: 1.5rem;
  border-radius: 0.6rem;
  background-color: white;
`;

export default ShadowedContainer;
