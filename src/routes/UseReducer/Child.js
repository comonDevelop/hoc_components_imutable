import React, { useContext } from 'react';
import { Consumer } from './index';

const Child = () => {
    return (
        <Consumer>
            {(item) => {
                return (
                    <div onClick={() => item.dispatch({type: 'decrement'})}>这是父组件传递的值{item.count}</div>
                )
            }}
        </Consumer>
    )
}
export default Child;