import React, { useState, Fragment, useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Header from '../../Components/base/Header';
import Container from '../../Components/base/Container';
import CurationDetailHeader from '../../Components/Curation/detail/CurationDeatilHeader';
import CurationDetailRelatedInfo from '../../Components/Curation/detail/CurationDetailRelatedInfo';
import RelatedStories from '../../Components/Curation/detail/RelatedStories';
import useUserContext from '../../hooks/useUserContext';
import { ApiFetchers } from '../../Utils/ApiFetcher';
import OttContentDetail from '../../Components/Curation/detail/OttContentDetail';

const CurationDetail = (props) => {
  const { cat, pk } = useParams();
  const { getAccessToken } = useUserContext();
  const { curationDetailReq } = ApiFetchers;
  const [item, setItem] = useState({
    name: '미디어이름 미디어이름',
    imageUrl: `/images/mak.jpeg`,
    description:
      '대충 미디어에 대한 설명 와랄라 와랄라 와랄라 엇쩌고 저쩌고 후루룩 짭짭',
    platformList: [],
    genreList: '장르',
    actorList: ['배우1', '배우2'],
    likeStatus: false,
  });

  useEffect(() => {
    curationDetailReq({ mediaId: pk, token: getAccessToken() }).then(
      ({ data }) => {
        setItem(data.result);
      }
    );
  }, []);

  return (
    <Fragment>
      <Header title="이건 어떠니?" subTitle="홈 액티비티 트렌드 Curation" />
      <Container>
        <CurationDetailHeader item={item} pk={pk} />
        {/* <CurationObjectImage src={item.objectImage} />
        <CurationObjectDesc>{item.desc}</CurationObjectDesc> */}
        <OttContentDetail item={item} />
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
