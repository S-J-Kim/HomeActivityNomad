import React, { Fragment } from 'react';
import { Route } from 'react-router';
import Splash from '../Splash';
import Signin from '../auth/Signin';
import Signup from '../auth/Signup';

const AuthRouter = (props) => {
  return (
    <Fragment>
      <Route path="/" exact render={() => <Splash />} />
      <Route path="/signin" render={() => <Signin />} />
      <Route path="/signup" render={() => <Signup />} />
    </Fragment>
  );
};

export default AuthRouter;
