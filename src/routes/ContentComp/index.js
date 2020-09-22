/**
 * 组件通信简单处理方式，
 * export const { Provider, Consumer } = React.createContext("");
 */
import React from 'react';
import { Button } from 'antd';

export const { Provider, Consumer } = React.createContext("");
class Child1 extends React.Component {
    render() {
        return (
            <Consumer>
                {(value) => {
                    return `class compoents value name : ${value.name} value age : ${value.age}`
                }}
            </Consumer>
        )
    }
}


const Child2 = () => {
    return (
        <Consumer>
            {(value) => {
                return `function compoents type : ${value.name} value age : ${value.age}`
            }}
        </Consumer>
    )
}

const CenterComp = () => {
    return (
        <div>
            <Child1 /><br/>
            <Child2 />
        </div>
    )
} 

class ContentComp extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            paytype: true
        }
    }
    render() {
        const { paytype } = this.state; 
        const _item =  paytype? {name: 'zhangsan',age: '15'}:{name: 'lisi',age: '18'};
        return (
            <Provider value={_item}>
                <CenterComp />
                <Button type="primary" onClick={() => this.setState({paytype: !this.state.paytype})}>点击更改状态</Button>
                <p>当前组件状态： {`${this.state.paytype}`}</p>
            </Provider>
        )
    }
}

export default ContentComp;