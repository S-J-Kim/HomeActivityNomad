import React, { useState, Fragment } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Header from '../../Components/base/Header';
import Container from '../../Components/base/Container';
import CurationDetailHeader from '../../Components/Curation/detail/CurationDeatilHeader';
import CurationDetailRelatedInfo from '../../Components/Curation/detail/CurationDetailRelatedInfo';
import RelatedStories from '../../Components/Curation/detail/RelatedStories';

const CurationDetail = (props) => {
  const { cat, pk } = useParams();
  const [item, setItem] = useState({
    objectName: '미디어이름 미디어이름',
    objectImage: `/images/mak.jpeg`,
    desc: '대충 미디어에 대한 설명 와랄라 와랄라 와랄라 엇쩌고 저쩌고 후루룩 짭짭',
    type: cat,
    relatedInfo: {
      genre: '장르',
      released: '2021.01.01',
      director: '감독이름 누구',
      actors: ['배우1', '배우2'],
    },
  });

  return (
    <Fragment>
      <Header title="이건 어떠니?" subTitle="홈 액티비티 트렌드 Curation" />
      <Container>
        <CurationDetailHeader item={item} />
        {/* <CurationObjectImage src={item.objectImage} />
        <CurationObjectDesc>{item.desc}</CurationObjectDesc> */}
        <CurationDetailRelatedInfo item={item} />
        {/* <RelatedStories stories={item.relatedStories} /> */}
      </Container>
    </Fragment>
  );
};

const CurationObjectImage = styled.img`
  width: 100%;
  background-color: grey;
  object-fit: cover;
`;

const CurationObjectDesc = styled.p`
  width: 100%;
  font-size: 1.6rem;
`;

export default CurationDetail;
