import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Hooks from './routes/Hooks';
import Video from './routes/Video/index';
import Hoc from './routes/Hoc/index';
import ReactHooks from './routes/ReactHooks/index';
import ReactPrint from './routes/Print';
import {CodeSegmentation} from './routes/ReactFunction';
import ReactContext from './routes/ReactContext';
import Auth from './routes/Auth';
import ChildrenComp from './routes/Hoc/ChildrenComp';
import Es6 from './routes/Es6';
import AntdForm from './routes/AntdForm';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/hooks" exact component={Hooks} />
        <Route path="/video" exact component={Video} />
        <Route path="/hoc" exact component={Hoc} />
        <Route path="/ReactHooks" exact component={ReactHooks} />
        <Route path="/reactPrint" exact component={ReactPrint} />
        <Route path="/CodeSegmentation" exact component={CodeSegmentation} />
        <Route path="/ReactContext" exact component={ReactContext} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/childrenComp" exact component={ChildrenComp} />
        <Route path="/es6" exact component={Es6} />
        <Route path="/antdForm" exact component={AntdForm} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
