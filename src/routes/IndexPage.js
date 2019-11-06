import React from 'react';
import { connect } from 'dva';
// import styles from './IndexPage.css';
// import { is } from 'immutable';
import {Button} from 'antd';
import BaseComponent from './BaseComponent';
// function IndexPage() {
//   return (
//     <div className={styles.normal}>
//       <h1 className={styles.title}>Yay! Welcome to dva!</h1>
//       <div className={styles.welcome} />
//       <ul className={styles.list}>
//         <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
//         <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
//       </ul>
//     </div>
//   );
// }

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
      </div>
    )
  }
}


export default connect()(IndexPage);
