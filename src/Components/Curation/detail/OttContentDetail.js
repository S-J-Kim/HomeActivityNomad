import React, { Fragment } from 'react';
import styled from 'styled-components';
import ShadowedContainer from './ShadowedContainer';

const OttContentDetail = ({ item }) => {
  const { name, imageUrl, description, platformList, genreList, actorList } =
    item;

  return (
    <ShadowedContainer>
      <DetailContainerHeader>
        {name}
        <OttKindImage alt={platformList[0]} />
      </DetailContainerHeader>
      <ContentInfoContainer>
        <ContentMainImmage src={imageUrl} alt={name} />
        <div>
          <ContentInfoRowContainer>
            <ContentInfoRowWithLable>
              <ContentInfoRowLable>장르</ContentInfoRowLable>
              <ContentInfoRowValue>{genreList[0]}</ContentInfoRowValue>
            </ContentInfoRowWithLable>

            <ContentInfoRowWithLable>
              <ContentInfoRowLable>배우</ContentInfoRowLable>
              <ContentInfoRowValue>
                {actorList.map((name) => {
                  return <div>{name}</div>;
                })}
              </ContentInfoRowValue>
            </ContentInfoRowWithLable>
          </ContentInfoRowContainer>
        </div>
      </ContentInfoContainer>
      <div>{description}</div>
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
