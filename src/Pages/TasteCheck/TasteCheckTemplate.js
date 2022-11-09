import React, { Fragment, useState } from 'react';
import Container from '../../Components/base/Container';
import GridContainer from '../../Components/base/GridContainer';
import Header from '../../Components/base/Header';
import CurationDetailHeader from '../../Components/Curation/detail/CurationDeatilHeader';
import SelectableBox from '../../Components/TasteCheck/SelectableBox';
import SelectionCompleteButton from '../../Components/TasteCheck/SelectionCompleteButton';

const TasteCheckTemplate = ({ pageTitle, pageType, pageData, nextUrl }) => {
  const [selected, setSelected] = useState([]);
  const [visible, setVisible] = useState(false);

  const handleContentClick = (e) => {
    if (e.target.checked) {
      const nextVal = [...selected, e.target.value];
      setSelected(nextVal);
      setVisible(nextVal.length > 0);
    } else {
      const nextVal = selected.filter((el) => el !== e.target.value);
      setSelected(nextVal);
      setVisible(nextVal.length > 0);
    }
  };

  return (
    <Fragment>
      <Header title="너의 취향은?" subTitle="당신의 OTT 취향을 알아봅시다" />
      <Container>
        <CurationDetailHeader
          item={{
            objectName: pageTitle,
            type: pageType,
          }}
        />
        <GridContainer nextUrl={nextUrl}>
          {pageData.map((content) => {
            return (
              <SelectableBox content={content} onChange={handleContentClick} />
            );
          })}
          <SelectionCompleteButton visible={visible} />
        </GridContainer>
      </Container>
    </Fragment>
  );
};

export default TasteCheckTemplate;
