import React from 'react';
import styled from 'styled-components';

const SelectionCompleteButton = ({ visible }) => {
  return (
    <CompleteButton type="button" visible={visible}>
      선택완료
    </CompleteButton>
  );
};

const CompleteButton = styled.button`
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  width: 100%;
  height: 4rem;
  background-color: rgb(52, 152, 219);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  color: white;
  border: none;
`;

export default SelectionCompleteButton;
