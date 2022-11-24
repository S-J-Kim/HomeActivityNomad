import React, { useContext, useEffect } from 'react';
import { TasteCheckContext } from '../../Context/TasteCheckContext';
import useUserContext from '../../hooks/useUserContext';
import { ApiFetchers } from '../../Utils/ApiFetcher';
import TasteCheckTemplate from './TasteCheckTemplate';

const TasteCheckType1 = (props) => {
  const { getAccessToken, isTokenAvailable } = useUserContext();
  const { tasteCheckReq } = ApiFetchers;
  const { tasteCheckData, setTasteCheckData } = useContext(TasteCheckContext);

  useEffect(() => {
    if (isTokenAvailable()) {
      tasteCheckReq({
        method: 'get',
        data: null,
        token: getAccessToken(),
      }).then(({ data }) => {
        setTasteCheckData(data.result);
      });
    }
  }, []);

  return (
    <TasteCheckTemplate
      pageTitle="성향조사 1: 구독중인 OTT 선택"
      pageType="OTT"
      pageData={tasteCheckData.platformList}
      nextUrl="/taste/step2"
    />
  );
};

export default TasteCheckType1;
