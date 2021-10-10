import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import StoryComment from '../Pages/Story/StoryComment';
import StoryList from '../Pages/Story/StoryList';

const StoryRouter = (props) => {
  const { match } = props;
  return (
    <Fragment>
      <Route
        path={`${match.url}/list`}
        render={(props) => <StoryList {...props} />}
      />
      <Route
        path={`${match.url}/comment/:pk`}
        render={(props) => <StoryComment {...props} />}
      />
    </Fragment>
  );
};

export default StoryRouter;
