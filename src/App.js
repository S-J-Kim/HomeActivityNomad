import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Splash from './Splash';
import Signin from './auth/Signin';
import Signup from './auth/Signup';

const App = (props) => {
  return (
    <Switch>
      <Route path="/" exact render={() => <Splash />} />
      <Route path="/signin" render={() => <Signin />} />
      <Route path="/signup" render={() => <Signup />} />
    </Switch>
  );
};

export default App;
