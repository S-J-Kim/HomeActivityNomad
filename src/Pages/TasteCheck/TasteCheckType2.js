import React, { useContext } from 'react';
import { TasteCheckContext } from '../../Context/TasteCheckContext';
import TasteCheckTemplate from './TasteCheckTemplate';

const TasteCheckType2 = (props) => {
  const { tasteCheckData } = useContext(TasteCheckContext);

  return (
    <TasteCheckTemplate
      pageTitle="성향조사 2: 좋아하는 배우 선택"
      pageType="Actors"
      pageData={tasteCheckData.actorList}
      nextUrl="/taste/step3"
    />
  );
};

export default TasteCheckType2;
