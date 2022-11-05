import React, { Fragment } from 'react';
import styled from 'styled-components';
import ShadowedContainer from './ShadowedContainer';

const OttContentDetail = ({ item }) => {
  const { genre, released, director, actors } = item.relatedInfo;

  return (
    <ShadowedContainer>
      <DetailContainerHeader>
        {item.objectName}
        <OttKindImage alt={item.type} />
      </DetailContainerHeader>
      <ContentInfoContainer>
        <ContentMainImmage src={item.objectImage} alt={item.objectName} />
        <div>
          <ContentInfoRowContainer>
            <ContentInfoRowWithLable>
              <ContentInfoRowLable>장르</ContentInfoRowLable>
              <ContentInfoRowValue>{genre}</ContentInfoRowValue>
            </ContentInfoRowWithLable>
            <ContentInfoRowWithLable>
              <ContentInfoRowLable>개봉</ContentInfoRowLable>
              <ContentInfoRowValue>{released}</ContentInfoRowValue>
            </ContentInfoRowWithLable>
            <ContentInfoRowWithLable>
              <ContentInfoRowLable>감독</ContentInfoRowLable>
              <ContentInfoRowValue>{director}</ContentInfoRowValue>
            </ContentInfoRowWithLable>
            <ContentInfoRowWithLable>
              <ContentInfoRowLable>장르</ContentInfoRowLable>
              <ContentInfoRowValue>
                {actors.map((name) => {
                  return <div>{name}</div>;
                })}
              </ContentInfoRowValue>
            </ContentInfoRowWithLable>
          </ContentInfoRowContainer>
        </div>
      </ContentInfoContainer>
      <div>{item.desc}</div>
    </ShadowedContainer>
  );
};

const DetailContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.9rem;
  font-weight: bold;
`;

const OttKindImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 5px;
`;

const ContentInfoContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
`;

const ContentInfoRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 5px;
`;

const ContentInfoRowWithLable = styled.span`
  display: flex;
  flex: 1;
  align-items: flex-start;
  gap: 15px;
`;

const ContentInfoRowLable = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: grey;
`;

const ContentInfoRowValue = styled.div`
  font-size: 1.4rem;
  flex: 1;
`;

const ContentMainImmage = styled.img`
  width: 10rem;
  height: 18rem;
  border-radius: 5px;
  background-color: gray;
`;

export default OttContentDetail;
