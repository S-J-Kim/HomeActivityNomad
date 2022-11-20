import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from '../../Components/base/Container';
import Header, { ProfileImage } from '../../Components/base/Header';
import SectionHeader from '../../Components/base/SectionTitle';
import CurationItem from '../../Components/Curation/CurationItem';
import useUserContext from '../../hooks/useUserContext';
import { ApiFetchers } from '../../Utils/ApiFetcher';

const MyPage = (props) => {
  const { getUserId, getAccessToken } = useUserContext();
  const { likedContentListReq } = ApiFetchers;
  const [items, setItems] = useState([
    {
      mediaId: 1,
      name: 'F1 : 본능의질주',
      imageUrl: '/images/media/f1.webp',
      platformList: ['netflix'],
    },
    {
      mediaId: 2,
      name: '프렌즈',
      imageUrl: `/images/media/friends.jpeg`,
      platformList: ['netflix'],
    },
    {
      mediaId: 3,
      name: '지옥',
      imageUrl: `/images/media/hellbound.jpg`,
      platformList: ['netflix'],
    },
    {
      mediaId: 4,
      name: '굿 플레이스',
      imageUrl: `/images/media/goodplace.jpeg`,
      platformList: ['netflix'],
    },
  ]);

  useEffect(() => {
    likedContentListReq(getAccessToken()).then(({ data }) => {
      setItems(data.result);
    });
  }, []);

  return (
    <Fragment>
      <Header title="마이페이지" subTitle="about me" />
      <Container>
        <UserInfoContainer>
          <MypageProfileImage src={'/images/base/defaultprofileimage.svg'} />
          <MyName>{getUserId()}</MyName>
        </UserInfoContainer>
        <SectionHeader>내가 좋아요 누른 미디어</SectionHeader>
        <CurationItem items={items} />
      </Container>
    </Fragment>
  );
};

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const MypageProfileImage = styled(ProfileImage)`
  width: 5rem;
  height: 5rem;
`;

const MyName = styled.h1`
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 0;
`;

export default MyPage;
