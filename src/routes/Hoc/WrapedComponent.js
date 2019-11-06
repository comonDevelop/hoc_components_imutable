/** 作者: ludan
 *  时间: 2019-08-24 12:27:41
 *  修改者:  ludan
 *  最后修改人: 2019-08-24 12:27:41 
 *  开发模块：
 *  说明： 高阶组件
 */
import React from 'react';
import { is } from 'immutable';

const GetHocComponent = (WrapedComponent ) => {
    return class newComponent extends React.Component{
        constructor(props){
            super(props);
            this.state={};
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

        handleClickBtn = (_type) => {
            console.log(_type, '----1111---')
        }

        render() {
            const hocItem = {
                name: 'hoc',
                handleClickBtn: this.handleClickBtn,
            }
            return(
                <>
                    <WrapedComponent  {...this.porps} {...hocItem}/>
                </>
            )
        }
    }
}

export default GetHocComponent;