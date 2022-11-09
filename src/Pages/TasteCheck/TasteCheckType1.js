import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import Header from '../../Components/base/Header';
import Container from '../../Components/base/Container';
import CurationDetailHeader from '../../Components/Curation/detail/CurationDeatilHeader';
import { BiDislike, BiLike } from 'react-icons/bi';
import {
  CategoryContainer,
  CategoryButton,
  CategoryButtonInput,
} from '../../Components/base/Category';
import GridContainer from '../../Components/base/GridContainer';
import SelectableBox from '../../Components/TasteCheck/SelectableBox';
import SelectionCompleteButton from './SelectionCompleteButton';

const ratings = [1, 2, 3, 4, 5];

const TasteCheckType1 = (props) => {
  const [selected, setSelected] = useState([]);
  const [visible, setVisible] = useState(false);
  const [OTTContents, setOTTContents] = useState([
    {
      name: '넷플릭스',
      image: `/images/OTTlogos/netflix.png`,
    },
    {
      name: '티빙',
      image: `/images/OTTlogos/tving.png`,
    },
    {
      name: '왓챠플레이',
      image: `/images/OTTlogos/watcha.jpeg`,
    },
    {
      name: '웨이브',
      image: `/images/OTTlogos/wavve.jpeg`,
    },
  ]);

  const handleContentClick = (e) => {
    if (e.target.checked) {
      const nextVal = [...selected, e.target.value];
      setSelected(nextVal);
      setVisible(nextVal.length > 0);
    } else {
      const nextVal = selected.filter((el) => el !== e.target.value);
      setSelected(nextVal);
      setVisible(nextVal.length > 0);
    }
  };

  return (
    <Fragment>
      <Header title="너의 취향은?" subTitle="당신의 OTT 취향을 알아봅시다" />
      <Container>
        <CurationDetailHeader
          item={{
            objectName: '성향조사 1: 구독중인 OTT 선택',
            type: 'Netflix',
          }}
        />
        <GridContainer>
          {OTTContents.map((content) => {
            return (
              <SelectableBox content={content} onChange={handleContentClick} />
            );
          })}
          <SelectionCompleteButton visible={visible} />
        </GridContainer>
      </Container>
    </Fragment>
  );
};

const ObjectImg = styled.img`
  width: 100%;
  height: 31.5rem;
  background-color: grey;
`;

const RatingContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
`;

const RatingButtonLabel = styled(CategoryButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.3rem;
  height: 3.3rem;
  margin: auto 0.5rem;
  border: 3px solid rgb(22, 160, 133);
  border-radius: 100%;
`;

const RatingButtonContainer = styled(CategoryContainer)`
  justify-content: center;
`;

export default TasteCheckType1;
