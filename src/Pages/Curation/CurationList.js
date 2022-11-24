import React, { Fragment, useEffect, useState } from 'react';
import Container from '../../Components/base/Container';
import Header from '../../Components/base/Header';
import SectionHeader from '../../Components/base/SectionTitle';
import CurationItem from '../../Components/Curation/CurationItem';
import useUserContext from '../../hooks/useUserContext';
import { ApiFetchers } from '../../Utils/ApiFetcher';

const CurationList = (props) => {
  const { getAccessToken } = useUserContext();
  const { curationListReq } = ApiFetchers;
  const [mainCategory, setMainCategory] = useState();
  const [items, setItems] = useState([
    {
      mediaId: 98,
      name: '그리스 로마 신화: 신들의 사생활',
      imageUrl: '',
      genreList: ['예능'],
      platformList: ['watcha'],
    },
  ]);

  useEffect(() => {
    curationListReq(getAccessToken()).then(({ data }) => {
      setItems(data.result);
    });
  }, []);

  return (
    <Fragment>
      <Header title="이건 어떠니?" subTitle="OTT 트렌드 Curation" />
      <Container>
        <Fragment>
          <SectionHeader>당신에게 추천하는 OTT Contents</SectionHeader>
          <CurationItem items={items} />
        </Fragment>
      </Container>
    </Fragment>
  );
};

export default CurationList;
