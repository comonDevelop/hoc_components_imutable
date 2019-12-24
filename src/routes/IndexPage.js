import React from 'react';
import { connect } from 'dva';
import {Button} from 'antd';
import BaseComponent from './BaseComponent';
import config from "../utils/config";

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

  render() {
    console.log("渲染父组件 contents ")
    return (
      <div style={{textAlign:'center', marginTop: '60px'}}>
        <Button type={this.state.btnType? 'primary':''} onClick={() => this.setState({btnType: !this.state.btnType})}>点击</Button>
        <p>{`这是btnType值${this.state.btnType}`}</p>
        <Button type="primary" onClick={() => this.setState({btnType: this.state.btnType})}>点击设置相同state值，页面是否会渲染</Button>
        <TempCompoent />
        <br/><br/>
        {/* 第三方认证 https://github.com/login/oauth/authorize */}
        <div>
          <a 
            href={`https://github.com/login/oauth/authorize?client_id=${config.Client_ID}&client_secret=${config.Client_Secret}&scope=user`}
          >第三方认证</a> 
        </div>
      </div>
    )
  }

  handleClickOAuthBtn = () => {
    // https://github.com/login/oauth/authorize
  }
}




export default connect()(IndexPage);
