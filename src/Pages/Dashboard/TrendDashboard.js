import React, { Fragment } from 'react';
import styled from 'styled-components';
import Container from '../../Components/base/Container';
import Header from '../../Components/base/Header';
import SectionHeader from '../../Components/base/SectionTitle';

const TrendDashboard = (props) => {
  return (
    <Fragment>
      <Header title="집에서 뭐하니?" subTitle="홈 액티비티 트렌드 DashBoard" />
      <Container>
        <SectionHeader mb={2}>Food Trends</SectionHeader>
        <TrendPieChart />
        <SectionHeader mb={2}>Rankings</SectionHeader>
        <RankingContainer>
          <RankingBar proposition={80}>Obj1</RankingBar>
          <RankingBar proposition={65}>Obj2</RankingBar>
          <RankingBar proposition={55}>Obj3</RankingBar>
        </RankingContainer>
      </Container>
    </Fragment>
  );
};

const TrendPieChart = styled.div`
  width: 31.5rem;
  height: 31.5rem;
  background: conic-gradient(#8b22ff 0% 25%, #ffc33b 25% 56%, #21f3d6 56% 100%);
  border-radius: 50%;
  margin: auto;
`;

const RankingContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const RankingBar = styled.div`
  width: ${({ proposition }) => `${proposition}%`};
  height: 2.5rem;
  font-size: 1.5rem;
  border-radius: 999px;
  background-color: green;
  color: white;
  margin-bottom: 1rem;
  padding-left: 1rem;
`;
export default TrendDashboard;
