import React, { useState, useEffect, useContext } from 'react';
import {Button, Input} from 'antd'
//自定义
function useName() {
    const [name, setName] =useState("张三");
    useEffect(() => {
        setTimeout(() => {
            setName("李思思")
        }, 1000);
    });
    return name;
}

const MyContext = React.createContext();

function Child({foo}) {
    return<div>Child{foo}</div>
}
function Child2() {
    const ctx = useContext(MyContext);
    return<div>Child2{ctx.foo}</div>
}

export default function HookDemo () {
    const  [count, setCount] = useState(0);
    // 副作用钩子，每次render都执行,comopnentDidMount/update/unmount
    // componentDidMount,参数[];
    useEffect(() => {
        document.title=`${count}`
    })

    useEffect(() => {
        console.log('api调用')
    },[])

    useEffect(() => {
        console.log('count变化')
    },[count])

    const  [InputValue, setInputValue] = useState('');
    const [list, setList] = useState(["zhangsan","lisi"]);
    const name = useName();
    return (
        <div style={{width: '1000px', margin: '0 auto'}}>
            <Button  type="primary" onClick={() => setCount(count+1)}>点击添加</Button>
            <p>count <span>{count}</span></p>
            <hr/>
            <p>循环操作
                <Input style={{width: '200px'}} type="text" onChange={e => setInputValue(e.target.value)}/>
                <Button type="primary" onClick={() => { setList([...list, InputValue])}}>点击添加</Button>
            </p>
            {list.map((k,i) => (<p key={i}>{k}</p>))}
            <hr/>
            <p>自定义钩子函数</p>
            <p>{`自动变化的名字${name}`}</p>
            <pre>
                {`function useName() {
                    const [name, setName] =useState("张三");
                    useEffect(() => {
                        setTimeout(() => {
                            setName("李思思")
                        }, 1000);
                    });
                    return name;
                }`}
            </pre>

            <hr/>
            <p>组件夸层级通信</p>
            <MyContext.Provider value={{foo: 'bar'}}>
                <MyContext.Consumer>
                <pre>--------使用Consumer--------</pre>
                    {value => <Child {...value} />}
                </MyContext.Consumer>
                <pre>--------使用Hook-------------</pre>
                <Child2></Child2>
            </MyContext.Provider>
        </div>
    )
}