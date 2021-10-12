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
    objectName: '막국수',
    objectImage: `${process.env.PUBLIC_URL}/images/mak.jpeg`,
    desc: '메밀국수를 김칫국물에 말아먹는 음식. 메밀국수를 김칫국물에 말아먹는 음식. 강원도 향토음식의 하나이다.',
    type: cat,
    relatedInfo: {
      ingredients: ['무', '양파', '키위', '닭가슴살 캔', '땅콩', '메밀면'],
      directions: [
        '분량의 재료를 섞어 비빔장을 만듭니다. 무는 강판에 갈고 양파, 키위도 갈아서 넣어줍니다',
        '땅콩은 적당히 부숴둡니다',
        '메밀국수를 삶은후 찬물에서 재빨리 헹구어 주세요',
        '이제 넓은 접시에 준비한 메밀국수. 고명. 양념을 담아내시면 끝.',
      ],
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
  background-color: grey;
  object-fit: cover;
`;

const CurationObjectDesc = styled.p`
  width: 100%;
  font-size: 1.6rem;
`;

export default CurationDetail;
