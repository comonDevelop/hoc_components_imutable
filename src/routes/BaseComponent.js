/** 作者: ludan
 *  时间: 2019-08-24 11:34:40
 *  修改者:  ludan
 *  最后修改人: 2019-08-24 11:34:40 
 *  开发模块：imutable 优化
 *  说明： React 当中最优化方法使用 imutable 进行处理
 */
import React from 'react';
import { is } from 'immutable';

 export default class BaseComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    shouldComponentUpdate(nextProps, nextState) {
        const thisProps = this.props || {};
        const thisState = this.state || {};
        nextState = nextState || {};
        nextProps = nextProps || {};
        if(Object.keys(thisProps)['length'] !== Object.keys(nextProps)['length'] || Object.keys(thisState)['length'] !== Object.keys(nextState)['length']) {
            return true;
        };
        for (const key in nextProps) {
            if (!is(thisProps[key], nextProps[key])) {
                return true;
            }
        }
        for (const key in nextState) {
            if (!is(thisState[key], nextState[key])) {
                return true;
            }
        }
        return false;
    }
}