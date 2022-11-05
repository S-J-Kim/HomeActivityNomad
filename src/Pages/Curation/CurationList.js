import React, { Fragment, useState } from 'react';
import Category from '../../Components/base/Category';
import Header from '../../Components/base/Header';
import Container from '../../Components/base/Container';
import SectionHeader from '../../Components/base/SectionTitle';
import CurationItem from '../../Components/Curation/CurationItem';

const CurationList = (props) => {
  const { match } = props;
  const [mainCategory, setMainCategory] = useState();
  const [items, setItems] = useState([
    {
      id: 1,
      itemName: 'F1 : 본능의질주',
      itemImage: '/images/media/f1.webp',
      type: '넷플릭스',
    },
    {
      id: 2,
      itemName: '프렌즈',
      itemImage: `/images/media/friends.jpeg`,
      type: '넷플릭스',
    },
    {
      id: 3,
      itemName: '지옥',
      itemImage: `/images/media/hellbound.jpg`,
      type: '넷플릭스',
    },
    {
      id: 4,
      itemName: '굿 플레이스',
      itemImage: `/images/media/goodplace.jpeg`,
      type: '넷플릭스',
    },
  ]);

  return (
    <Fragment>
      <Header title="이건 어떠니?" subTitle="OTT 트렌드 Curation" />
      <Container>
        <Category onCategoryChange={setMainCategory} />
        {mainCategory && (
          <Fragment>
            <SectionHeader>당신에게 추천하는 {mainCategory}</SectionHeader>
            <CurationItem items={items} />
          </Fragment>
        )}
      </Container>
    </Fragment>
  );
};

export default CurationList;
