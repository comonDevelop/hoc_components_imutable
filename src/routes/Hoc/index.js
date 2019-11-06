/** 作者: ludan
 *  时间: 2019-08-24 11:58:47
 *  修改者:  ludan
 *  最后修改人: 2019-08-24 11:58:47 
 *  开发模块：高阶组件
 *  说明： 高阶函数封装
 */
import React from 'react';
import GetHocComponent from './WrapedComponent';
import {Button} from 'antd';
import Footer from './Footer';
import { Router, Route, Switch, Link } from 'dva/router';
import ChildrenComp from './ChildrenComp';

class Hoc extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            _type: true,
        }
        console.log(this.props, '-----props------')
    }

    render() {
        console.log("这是父组件状态。")
        return (
            <div style={{paddingTop: '60px',textAlign: "center"}}>
                <Button type="primary" onClick={() => this.props.handleClickBtn("btnClick")}>点击</Button>
                <div onClick={() => this.setState({_type: !this.state._type})}>{!this.state._type? '这是正常状态':'这是点击之后的状态'}</div>
                <Link to='/childrenComp'> 
                    <Button>点击跳转到二级目录</Button>
                </Link> 
                <Footer />
            </div>
        )
    }
}

export default GetHocComponent(Hoc);