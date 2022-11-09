import React, { Fragment } from 'react';
import styled from 'styled-components';

const SelectableBox = ({ content, onChange }) => {
  const { name, image } = content;

  return (
    <Fragment>
      <BoxConainerInput
        type="checkbox"
        id={name}
        value={name}
        onChange={onChange}
      />
      <BoxContainer htmlFor={name}>
        <BoxItemImage src={image} />
        <BoxItemDesc>{name}</BoxItemDesc>
      </BoxContainer>
    </Fragment>
  );
};

const BoxConainerInput = styled.input`
  display: none;

  &:checked + label {
    border: 2px solid rgb(22, 160, 133);
  }
`;

const BoxContainer = styled.label`
  width: 14.5rem;
  height: 16.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  padding: 1rem 2rem;
  margin-bottom: 1.5rem;
  border-radius: 0.6rem;
  background-color: white;
`;

const BoxItemImage = styled.img`
  width: 8rem;
  height: auto;
`;

const BoxItemDesc = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
`;

export default SelectableBox;
