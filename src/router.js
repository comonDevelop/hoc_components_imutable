import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Hooks from './routes/Hooks';
import Video from './routes/Video/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/hooks" exact component={Hooks} />
        <Route path="/video" exact component={Video} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
