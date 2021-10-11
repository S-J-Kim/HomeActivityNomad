import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import TasteCheck from '../Pages/TasteCheck/TasteCheck';

const TasteCheckRouter = (props) => {
  const { match } = props;
  return (
    <Fragment>
      <Route
        path={`${match.url}/step1`}
        render={(props) => <TasteCheck {...props} />}
      />
    </Fragment>
  );
};

export default TasteCheckRouter;
