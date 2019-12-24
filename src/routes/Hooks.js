import React, {
    useState, 
    useEffect, 
    useReducer, 
    useContext,
} from "react";
import { Input, Button } from 'antd'

const Hooks = () => {
    const [count, setCount] = useState(0);
    const [fruits, setFruits] = useState(['banana', 'Apple'])
    const [fruit, setFruit] = useState("");

    // 依赖执行一次
    useEffect(() => {
        console.log("状态执行一次，componentDidMount")
    }, [])
    // 依赖执行多次
    useEffect(() => {
        console.log("状态执行多次，shouldComponentUpdate")
    })
     // 依赖执行多次
     useEffect(() => {
        console.log("状态执行多次,监听状态")
    }, ["fruits"])

    return (
        <div style={{textAlign:'center', marginTop: '60px'}}>
            <p>这是count: {count}</p>
            <Button onClick={() => setCount((count) => {
                return count + 1
            })}>点击修改count</Button>
            <br/><br/>
            <p>---------------------------------------------------------------</p>
            <div style={{width: '400px', padding: "20px", margin: '0 auto'}}>
                <Input value={fruit} onChange={(e) => setFruit(e.target.value)}/>
                <Button type="primary" onClick={() => {
                    console.log(fruits, '------fruits---');
                    console.log(fruit, '-----item----');
                    fruit != '' && setFruits([...fruits, fruit])
                }}>添加水果</Button>
                <div style={{background: '#03ccdd'}}>
                    {fruits.map((k, i) => <p key={i}>{k}</p>)}
                </div>
            </div>
            <p>---------------------------------------------------------------</p>

        </div>
    )
}

export default Hooks;