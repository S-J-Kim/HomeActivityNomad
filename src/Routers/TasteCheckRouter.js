import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import TasteCheckType1 from '../Pages/TasteCheck/TasteCheckType1';

const TasteCheckRouter = (props) => {
  const { match } = props;
  return (
    <Fragment>
      <Route
        path={`${match.url}/step1`}
        render={(props) => <TasteCheckType1 {...props} />}
      />
    </Fragment>
  );
};

export default TasteCheckRouter;
