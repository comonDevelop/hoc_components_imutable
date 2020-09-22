import React from 'react';
import { connect } from 'dva';
import {Button, Menu, Icon} from 'antd';
import BaseComponent from './BaseComponent';
import config from "../utils/config";
import { Link } from 'dva/router';

const { SubMenu } = Menu;
class TempCompoent extends BaseComponent {
  constructor(props){
    super(props);
    this.state={
      clickType: false,
    };
  }

  render() {
    console.log("渲染子组件 contents ")
    return (
      <div 
        onClick={() => this.setState({clickType: !this.state.clickType})}
      >这是一个空组件TempCompoent</div>)
  }
}


class IndexPage extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      btnType: false,
    }
  }
  componentDidMount() {
   
  }

  handleClickMenu = (e) => {
    
  }

  render() {
    console.log("渲染父组件 contents ")
    return (
      <div style={{textAlign:'center', marginTop: '60px'}}>
        <Button type={this.state.btnType? 'primary':''} onClick={() => this.setState({btnType: !this.state.btnType})}>点击</Button>
        <p>{`这是btnType值${this.state.btnType}`}</p>
        <Button type="primary" onClick={() => this.setState({btnType: this.state.btnType})}>点击设置相同state值，页面是否会渲染</Button>
        <TempCompoent />
        <div>
          <a 
            href={`https://github.com/login/oauth/authorize?client_id=${config.Client_ID}&client_secret=${config.Client_Secret}&scope=user`}
          >第三方认证</a> 
        </div>
        <div>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
            style={{ width: "200px",textAlign: "left"}}
          >
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span onClick={(e) => this.handleClickMenu(e)}>Hooks</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Video</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="inbox" />
              <span>Hoc</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="inbox" />
              <span>ReactHooks</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="inbox" />
              <span>ReactPrint</span>
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="inbox" />
              <span>CodeSegmentation</span>
            </Menu.Item>
            <Menu.Item key="7">
              <Icon type="inbox" />
              <span>ReactContext</span>
            </Menu.Item>
            <Menu.Item key="8">
              <Icon type="inbox" />
              <span>Auth</span>
            </Menu.Item>
            <Menu.Item key="9">
              <Icon type="inbox" />
              <span>ChildrenComp</span>
            </Menu.Item>
            <Menu.Item key="10">
              <Icon type="inbox" />
              <span>Es6</span>
            </Menu.Item>
            <Menu.Item key="11">
              <Icon type="inbox" />
              <span>AntdForm</span>
            </Menu.Item>
            <Menu.Item key="12">
              <Icon type="inbox" />
              <span>FormComp</span>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    )
  }

  handleClickOAuthBtn = () => {
    // https://github.com/login/oauth/authorize
  }
}




export default connect()(IndexPage);
