import React, { useReducer, useState } from 'react';
import Child from './Child';
import { reducer, initialState } from './reducer';

export const { Provider, Consumer } = React.createContext({});
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Provider value={{count: state.count, dispatch: dispatch}}>
            Count: {state.count}
            <Child />
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </Provider>
    )
}

export default UseReducer;