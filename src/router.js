import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Hoc from './routes/Hoc/index';
import ReactHooks from './routes/ReactHooks/index'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/hoc" exact component={Hoc} />
        <Route path="/ReactHooks" exact component={ReactHooks} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
