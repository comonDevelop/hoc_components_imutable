/** 作者: ludan
 *  时间: 2019-08-24 12:27:41
 *  修改者:  ludan
 *  最后修改人: 2019-08-24 12:27:41 
 *  开发模块：
 *  说明： 高阶组件
 */
import React from 'react';

const GetHocComponent = (WrapedComponent ) => {
    return class newComponent extends React.Component{
        constructor(props){
            super(props);
            this.state={};
        }
        render() {
            const hocItem = {
                name: 'hoc'
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