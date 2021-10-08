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
      itemName: '아이템이름',
      itemImage: '',
      type: 'Food',
    },
    {
      id: 2,
      itemName: '아이템이름',
      itemImage: '',
      type: 'Food',
    },
    {
      id: 3,
      itemName: '아이템이름',
      itemImage: '',
      type: 'Food',
    },
    {
      id: 4,
      itemName: '아이템이름',
      itemImage: '',
      type: 'Food',
    },
  ]);

  return (
    <Fragment>
      <Header title="이건 어떠니?" subTitle="홈 액티비티 트렌드 Curation" />
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
