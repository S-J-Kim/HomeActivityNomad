import React, { useState } from 'react';
import TasteCheckTemplate from './TasteCheckTemplate';

const TasteCheckType1 = (props) => {
  const [OTTContents, setOTTContents] = useState([
    {
      name: '넷플릭스',
      image: `/images/OTTlogos/netflix.png`,
    },
    {
      name: '티빙',
      image: `/images/OTTlogos/tving.png`,
    },
    {
      name: '왓챠플레이',
      image: `/images/OTTlogos/watcha.jpeg`,
    },
    {
      name: '웨이브',
      image: `/images/OTTlogos/wavve.jpeg`,
    },
  ]);

  return (
    <TasteCheckTemplate
      pageTitle="성향조사 1: 구독중인 OTT 선택"
      pageType="OTT"
      pageData={OTTContents}
      nextUrl="/taste/step2"
    />
  );
};

export default TasteCheckType1;
