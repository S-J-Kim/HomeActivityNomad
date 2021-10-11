import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import WorldcupRound from '../Pages/Worldcup/WorldcupRound';
import WorldcupSetting from '../Pages/Worldcup/WorldcupSetting';

const WorldcupRouter = (props) => {
  const { match } = props;

  return (
    <Fragment>
      <Route path={`${match.url}/setting`} render={() => <WorldcupSetting />} />
      <Route path={`${match.url}/round`} render={() => <WorldcupRound />} />
    </Fragment>
  );
};

export default WorldcupRouter;
