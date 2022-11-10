import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import Container from '../../Components/base/Container';
import Header, { ProfileImage } from '../../Components/base/Header';
import SectionHeader from '../../Components/base/SectionTitle';
import CurationItem from '../../Components/Curation/CurationItem';

const MyPage = (props) => {
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
      <Header title="마이페이지" subTitle="about me" />
      <Container>
        <UserInfoContainer>
          <MypageProfileImage src={'/images/base/defaultprofileimage.svg'} />
          <MyName>OTT다모아</MyName>
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
