import React, { useContext, useState } from 'react';
import { TasteCheckContext } from '../../Context/TasteCheckContext';
import TasteCheckTemplate from './TasteCheckTemplate';

const TasteCheckType3 = (props) => {
  const { tasteCheckData } = useContext(TasteCheckContext);

  return (
    <TasteCheckTemplate
      pageTitle="성향조사 3: 좋아하는 장르 선택"
      pageType="Genre"
      pageData={tasteCheckData.genreList}
      nextUrl="/trend"
    />
  );
};

export default TasteCheckType3;
