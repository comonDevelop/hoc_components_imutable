/** 作者: ludan
 *  时间: 2019-08-24 11:58:47
 *  修改者:  ludan
 *  最后修改人: 2019-08-24 11:58:47 
 *  开发模块：高阶组件
 *  说明： 高阶函数封装
 */
import React from 'react';
import GetHocComponent from './WrapedComponent';

class Hoc extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
        console.log(this.props, '-----props------')
    }
    render() {
        return (
            <>
                1234656
            </>
        )
    }
}

export default GetHocComponent(Hoc);