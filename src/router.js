import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Hoc from './routes/Hoc/index';
import ReactHooks from './routes/ReactHooks/index';
import ReactPrint from './routes/Print';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/hoc" exact component={Hoc} />
        <Route path="/ReactHooks" exact component={ReactHooks} />
        <Route path="/ReactPrint" exact component={ReactPrint} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
