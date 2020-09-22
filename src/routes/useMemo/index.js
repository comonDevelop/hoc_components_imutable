import React, { useState } from 'react';

function Child({name}) {
    console.log(name)
    return <h1>{name}</h1>
}

function areEqual(prevProps, nextProps) {
    /*
    如果把 nextProps 传入 render 方法的返回结果与
    将 prevProps 传入 render 方法的返回结果一致则返回 true，
    否则返回 false
    */
}

// 减少数据渲染
const Child1 = React.memo(Child, areEqual);


const useMemo = () => {
    const [title, setTitle] = useState("这是一个 title")
    return (
        <div className="App">
            <h1>{title}</h1>
            <button onClick={() => setTitle("title 已经改变")}>改名字</button>
            <Child1 name="桃桃"></Child1>
        </div>
    )
}

export default React.memo(useMemo);