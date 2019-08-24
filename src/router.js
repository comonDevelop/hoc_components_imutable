import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Hoc from './routes/Hoc/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/hoc" exact component={Hoc} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
