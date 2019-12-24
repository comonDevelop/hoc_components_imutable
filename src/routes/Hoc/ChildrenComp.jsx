import React from 'react'
import GetHocComponent from './WrapedComponent';

class ChildrenComp extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props, '-------children.porps------')
        return (
            <div>我是Hoc 子组件</div>
        )
    }
}

export default GetHocComponent(ChildrenComp);