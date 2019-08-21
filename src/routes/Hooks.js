import React, {
    useState, 
    useEffect, 
    useReducer
} from "react";
import { Button } from 'antd'

const Hooks = () => {
    const [count, setCount] = useState(0)
    return (
        <div style={{textAlign:'center', marginTop: '60px'}}>
            <p>这是count: {count}</p>
            <Button onClick={() => setCount((count) => {
                return count + 1
            })}>点击修改count</Button>
        </div>
    )
}

export default Hooks;