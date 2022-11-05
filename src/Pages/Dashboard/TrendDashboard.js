import React, { Fragment } from 'react';
import styled from 'styled-components';
import Container from '../../Components/base/Container';
import Header from '../../Components/base/Header';
import SectionHeader from '../../Components/base/SectionTitle';

const TrendDashboard = (props) => {
  return (
    <Fragment>
      <Header title="집에서 뭐하니?" subTitle="OTT 트렌드 DashBoard" />
      <Container>
        <SectionHeader mb={2}>Netflix Trends</SectionHeader>
        <TrendPieChart />
        <SectionHeader mb={2}>Rankings</SectionHeader>
        <RankingContainer>
          <RankingBar proposition={80} color="#21f3d6">
            강철부대2
          </RankingBar>
          <RankingBar proposition={65} color="#ffc33b">
            솔로지옥
          </RankingBar>
          <RankingBar proposition={55} color="#8b22ff">
            F1 : 본능의질주
          </RankingBar>
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
  background-color: ${({ color }) => color};
  color: white;
  margin-bottom: 1rem;
  padding-left: 1rem;
`;
export default TrendDashboard;
