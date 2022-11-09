import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import TasteCheckType1 from '../Pages/TasteCheck/TasteCheckType1';
import TasteCheckType2 from '../Pages/TasteCheck/TasteCheckType2';
import TasteCheckType3 from '../Pages/TasteCheck/TasteCheckType3';

const TasteCheckRouter = (props) => {
  const { match } = props;
  return (
    <Fragment>
      <Route
        path={`${match.url}/step1`}
        render={(props) => <TasteCheckType1 {...props} />}
      />
      <Route
        path={`${match.url}/step2`}
        render={(props) => <TasteCheckType2 {...props} />}
      />
      <Route
        path={`${match.url}/step3`}
        render={(props) => <TasteCheckType3 {...props} />}
      />
    </Fragment>
  );
};

export default TasteCheckRouter;
