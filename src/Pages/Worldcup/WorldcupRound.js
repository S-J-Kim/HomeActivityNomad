import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import Container from '../../Components/base/Container';
import Header from '../../Components/base/Header';
import { SingleCurationItem } from '../../Components/Curation/CurationItem';
import CurationDetailHeader from '../../Components/Curation/detail/CurationDeatilHeader';

const WorldcupRound = (props) => {
  const [worldcupItem] = useState([
    {
      itemImage: '',
      itemName: '월드컵대결',
      type: 'Food',
    },
    {
      itemImage: '',
      itemName: '월드컵대결',
      type: 'Food',
    },
  ]);

  return (
    <Fragment>
      <Header title="집콕 월드컵" subTitle="홈 액티비티 월드컵" />
      <Container>
        <CurationDetailHeader
          item={{ objectName: '더 좋아하는 것은 무엇?', type: 'Food' }}
        />
        {worldcupItem.map((item) => {
          return <WorldcupRoundItem item={item} />;
        })}
      </Container>
    </Fragment>
  );
};

const WorldcupRoundItem = styled(SingleCurationItem)`
  width: 100%;
  flex: 1;
`;

export default WorldcupRound;
