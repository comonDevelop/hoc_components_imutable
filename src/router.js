import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Hoc from './routes/Hoc/index';
import ReactHooks from './routes/ReactHooks/index';
import ReactPrint from './routes/Print';
import {CodeSegmentation} from './routes/ReactFunction';
import ReactContext from './routes/ReactContext';
import Auth from './routes/Auth';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/hoc" exact component={Hoc} />
        <Route path="/ReactHooks" exact component={ReactHooks} />
        <Route path="/ReactPrint" exact component={ReactPrint} />
        <Route path="/CodeSegmentation" exact component={CodeSegmentation} />
        <Route path="/ReactContext" exact component={ReactContext} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
