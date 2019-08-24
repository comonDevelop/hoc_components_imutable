import React from 'react';
import WrapedComponent from './WrapedComponent';

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            _bool: true,
        }
    }

    render() {
        console.log("这是子组件状态。")
        return (
            <>
                <div onClick={() => this.setState({_bool: !this.state._bool})}>{this.state._bool?"状态1":'状态2'}</div>
            </>
        )
    }
}

export default WrapedComponent(Footer);