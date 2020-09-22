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
import FormComp from './routes/FormComp';
import DomToImg from './routes/DomToImg';
import HookDemo from './routes/HookDemo';
import FromComp from './routes/FromComp';
import ContentComp from './routes/ContentComp';
import ProtalComp from './routes/ProtalComp';
import RenderToString from './routes/RenderToString';
import UseMemo from './routes/useMemo';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={UseMemo} />
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
        <Route path="/formComp" exact component={FormComp} />
        <Route path="/domToImg" exact component={DomToImg} />
        <Route path="/hookDemo" exact component={HookDemo} />
        <Route path="/FromComp" exact component={FromComp} />
        <Route path="/ContentComp" exact component={ContentComp} />
        <Route path="/ProtalComp" exact component={ProtalComp} />
        <Route path="/RenderToString" exact component={RenderToString} />  
        <Route path="/UseMemo" exact component={UseMemo} />  
      </Switch>
    </Router>
  );
}

export default RouterConfig;
