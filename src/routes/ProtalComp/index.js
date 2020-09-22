/**
 * reactDom 中 传送门 createPortal 使用
 * 组件加载在最外层body上
 */
import React from 'react';
import ReactDom, { createPortal } from 'react-dom';

const ModalComp = () => {
    return (
        <div style={{ position: 'absolute', top: '20%', left: '30%', height: '300px', width: '300px', border: '1px solid #ddd'}}>
            1234565
        </div>
    )
}


class ProtalComp extends React.Component {
    componentWillMount(){}
    componentWillUpdate(){}

    getDerivedStateFromProps() {}
    getSnapshotBeforeUpdate(){}
    
    componentDidMount() {}
    componentWillReceiveProps(){}
    shouldComponentUpdate(){}
    componentDidUpdate(){}
    componentWillUnmount(){}
    
    render() {
        return (
            <div>
                {createPortal(<ModalComp />, document.querySelector('body'))}
            </div>
        )
    }
}

export default ProtalComp;