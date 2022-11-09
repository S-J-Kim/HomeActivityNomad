import React, { useState } from 'react';
import TasteCheckTemplate from './TasteCheckTemplate';

const TasteCheckType3 = (props) => {
  const [OTTContents, setOTTContents] = useState([
    {
      name: '호러',
      image: `/images/OTTlogos/netflix.png`,
    },
    {
      name: '코메디',
      image: `/images/OTTlogos/tving.png`,
    },
    {
      name: '액션',
      image: `/images/OTTlogos/watcha.jpeg`,
    },
    {
      name: '멜로',
      image: `/images/OTTlogos/wavve.jpeg`,
    },
  ]);

  return (
    <TasteCheckTemplate
      pageTitle="성향조사 3: 좋아하는 장르 선택"
      pageType="Genre"
      pageData={OTTContents}
      nextUrl="/trend"
    />
  );
};

export default TasteCheckType3;
