/**
 * rendertoSting 方法
 */

import {renderToString} from 'react-dom/server'
import React from 'react'

const RenderToString1 = () => {
    return (
        <div>111111</div>
    )
}
class RenderToString2 extends React.Component{
    render() {
        return (
            <div>
                1111{`${renderToString(RenderToString1)}`}
            </div>
        )
    }
}
export default RenderToString2;
