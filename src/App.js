import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import AuthRouter from './Routers/AuthRouter';

const App = (props) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Switch>
        <Route path="/" render={(props) => <AuthRouter {...props} />} />
      </Switch>
    </Fragment>
  );
};

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', sans-serif;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
  }
`;

export default App;
