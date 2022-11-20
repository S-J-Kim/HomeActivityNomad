import React, { Fragment, useState } from 'react';
import Container from '../../Components/base/Container';
import GridContainer from '../../Components/base/GridContainer';
import Header from '../../Components/base/Header';
import CurationDetailHeader from '../../Components/Curation/detail/CurationDeatilHeader';
import SelectableBox from '../../Components/TasteCheck/SelectableBox';
import SelectionCompleteButton from '../../Components/TasteCheck/SelectionCompleteButton';
import { useHistory, useLocation } from 'react-router';
import { ApiFetchers } from '../../Utils/ApiFetcher';
import useUserContext from '../../hooks/useUserContext';
import TasteCheckHeader from '../../Components/TasteCheck/TasteCheckHeader';

const ApiRequestKeyMap = {
  OTT: 'platformList',
  Genre: 'genreList',
  Actors: 'actorList',
};

const ApiRequestIdMap = {
  OTT: 'platformId',
  Actors: 'actorId',
  Genre: 'genreId',
};

const TasteCheckTemplate = ({ pageTitle, pageType, pageData, nextUrl }) => {
  const history = useHistory();
  const location = useLocation();
  const { tasteCheckReq } = ApiFetchers;
  const { getAccessToken } = useUserContext();

  const [selected, setSelected] = useState(
    location.state ?? {
      platformList: [],
      genreList: [],
      actorList: [],
    }
  );
  const [visible, setVisible] = useState(false);

  const handleContentClick = (e) => {
    if (e.target.checked) {
      setSelected({
        ...selected,
        [ApiRequestKeyMap[pageType]]: [
          ...selected[ApiRequestKeyMap[pageType]],
          { [ApiRequestIdMap[pageType]]: e.target.value },
        ],
      });

      setVisible(true);
    } else {
      const nextVal = selected[ApiRequestKeyMap[pageType]].filter(
        (el) => el[ApiRequestIdMap[pageType]] !== e.target.value
      );

      setSelected({
        ...selected,
        [ApiRequestKeyMap[pageType]]: nextVal,
      });

      setVisible(nextVal.length > 0);
    }
  };

  const handleNextButtonClick = (e) => {
    e.preventDefault();

    if (pageType === 'Genre') {
      tasteCheckReq({
        method: 'post',
        data: selected,
        token: getAccessToken(),
      }).then((res) => {});
    }

    history.push(nextUrl, selected);
  };

  return (
    <Fragment>
      <Header title="너의 취향은?" subTitle="당신의 OTT 취향을 알아봅시다" />
      <Container>
        <TasteCheckHeader
          item={{
            title: pageTitle,
            type: pageType,
          }}
        />
        <GridContainer onSubmit={(e) => handleNextButtonClick(e)}>
          {pageData.map((content) => {
            return (
              <SelectableBox
                content={content}
                onChange={handleContentClick}
                pageType={pageType}
              />
            );
          })}
          <SelectionCompleteButton visible={visible} />
        </GridContainer>
      </Container>
    </Fragment>
  );
};

export default TasteCheckTemplate;
