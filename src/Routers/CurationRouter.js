import React, { Fragment } from 'react';
import { Route } from 'react-router';
import CurationDetail from '../Pages/Curation/CurationDetail';
import CurationList from '../Pages/Curation/CurationList';

const CurationRouter = (props) => {
  const { match } = props;
  return (
    <Fragment>
      <Route path={`${match.url}/list`} render={() => <CurationList />} />
      <Route
        path={`${match.url}/:cat/:pk`}
        render={(props) => <CurationDetail {...props} />}
      />
    </Fragment>
  );
};

export default CurationRouter;
