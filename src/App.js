import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Footer from './Components/base/Footer';
import TrendDashboard from './Pages/Dashboard/TrendDashboard';
import MyPage from './Pages/MyPage/MyPage';
import AuthRouter from './Routers/AuthRouter';
import CurationRouter from './Routers/CurationRouter';
import TasteCheckRouter from './Routers/TasteCheckRouter';

const App = (props) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Switch>
        <Route
          path={['/', '/signup', '/signin']}
          exact
          render={(props) => <AuthRouter {...props} />}
        />
        <Route
          path="/curation"
          render={(props) => <CurationRouter {...props} />}
        />
        {/* <Route path="/story" render={(props) => <StoryRouter {...props} />} />
        <Route
          path="/worldcup"
          render={(props) => <WorldcupRouter {...props} />}
        /> */}
        <Route
          path="/taste"
          render={(props) => <TasteCheckRouter {...props} />}
        />
        <Route
          path="/trend"
          render={(props) => <TrendDashboard {...props} />}
        />
        <Route path="/mypage" render={(props) => <MyPage {...props} />} />
      </Switch>
      <Footer />
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

  #root{
    display:flex;
    flex-direction:column;
    height:100vh;
  }

  img {
    object-fit:cover;
  }
`;

export default App;
