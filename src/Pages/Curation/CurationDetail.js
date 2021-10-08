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
    objectName: '푸드이름 1234',
    objectImage: '',
    desc: '블라블라 쏠라쏠라 블라블라 쏠라쏠라 블라블라 쏠라쏠라 블라블라 쏠라쏠라 블라블라 쏠라쏠라 블라블라 쏠라쏠라 블라블라 쏠라쏠라 블라블라 쏠라쏠라 블라블라 쏠라쏠라블라블라 쏠라쏠라블라블라 쏠라쏠라',
    type: cat,
    relatedInfo: {
      ingredients: ['재료1', '재료2', '재료3'],
      directions: ['방법1', '방법2', '방법3'],
    },
    relatedStories: [
      { thumbnail: '', author: 'freind1' },
      { thumbnail: '', author: 'freind1' },
      { thumbnail: '', author: 'freind1' },
      { thumbnail: '', author: 'freind1' },
    ],
  });

  return (
    <Fragment>
      <Header title="이건 어떠니?" subTitle="홈 액티비티 트렌드 Curation" />
      <Container>
        <CurationDetailHeader item={item} />
        <CurationObjectImage src={item.objectImage} />
        <CurationObjectDesc>{item.desc}</CurationObjectDesc>
        <CurationDetailRelatedInfo item={item} />
        <RelatedStories stories={item.relatedStories} />
      </Container>
    </Fragment>
  );
};

const CurationObjectImage = styled.img`
  width: 100%;
  padding-bottom: 100%;
  background-color: grey;
  object-fit: cover;
`;

const CurationObjectDesc = styled.p`
  width: 100%;
  font-size: 1.6rem;
`;

export default CurationDetail;
