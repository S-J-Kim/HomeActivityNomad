import React, { useState } from 'react';
import TasteCheckTemplate from './TasteCheckTemplate';

const TasteCheckType2 = (props) => {
  const [OTTContents, setOTTContents] = useState([
    {
      name: '배우1',
      image: `/images/OTTlogos/netflix.png`,
    },
    {
      name: '배우2',
      image: `/images/OTTlogos/tving.png`,
    },
    {
      name: '배우3',
      image: `/images/OTTlogos/watcha.jpeg`,
    },
    {
      name: '배우4',
      image: `/images/OTTlogos/wavve.jpeg`,
    },
  ]);

  return (
    <TasteCheckTemplate
      pageTitle="성향조사 2: 좋아하는 배우 선택"
      pageType="Actors"
      pageData={OTTContents}
      nextUrl="/taste/step3"
    />
  );
};

export default TasteCheckType2;
