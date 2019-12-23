import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Hooks from './routes/Hooks';
import Video from './routes/Video/index';
import Hoc from './routes/Hoc/index';
import ReactHooks from './routes/ReactHooks/index';
import ReactPrint from './routes/Print';
import ChildrenComp from './routes/Hoc/ChildrenComp';
import Es6 from './routes/Es6';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/hooks" exact component={Hooks} />
        <Route path="/video" exact component={Video} />
        <Route path="/hoc" exact component={Hoc} />
        <Route path="/ReactHooks" exact component={ReactHooks} />
        <Route path="/ReactPrint" exact component={ReactPrint} />
        <Route path="/childrenComp" exact component={ChildrenComp} />
        <Route path="/es6" exact component={Es6} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
