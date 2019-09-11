/**
 * 💡Hooks 在解决什么问题
 * React 一直在解决一个问题，如何实现分离业务逻辑代码，实现组件内部相关业务逻辑的复用。
 * 一般情况下，我们都是通过组件和自上而下传递的数据流将我们页面上的大型UI组织成为独立的小型UI，实现组件的重用。但是我们经常遇到很难侵入一个复杂的组件中实现重* 用，因为组件的逻辑是有状态的，无法提取到函数组件当中。这在处理动画和表单的时候，尤其常见，当我们在组件中连接外部的数据源，然后希望在组件中执行更多其他的操作* 的时候，我们就会把组件搞得特别糟糕：
 * 难以重用和共享组件中的与状态相关的逻辑，造成产生很多巨大的组件
 * 逻辑复杂的组件难以开发与维护，当我们的组件需要处理多个互不相关的 localstate 时，每个生命周期函数中可能会包含着各种互不相关的逻辑在里面。
 * 复杂的模式，如渲染道具和高阶组件。
 * 由于业务变动，函数组件不得不改为类组件。
 * 这时候，Hooks就派上用场了。 Hooks 允许我们将组件内部的逻辑，组织成为一个可复用的隔离模块。
 **/
import React, {useState} from 'react';
import {Button} from 'antd';

// class ReactHooks extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             count: 0,
//         };
//     }
//     render() {
//         return (
//             <div style={{textAlign:'center', marginTop: '60px'}}>
//                 <p>这是Hooks页面</p>
//                 <Button type="primary" onClick={() => {
//                     this.setState({count: this.state.count+1 })
//                 }}>点击</Button>  
//                 <p>这是点击之后的数据展示：{`${this.state.count}`}</p>
//             </div>
//         )
//     }
// }

// 使用 useState 方式初始化
function ReactHooks() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <Button  type="primary" onClick={() => setCount(count + 1)}>
                Click me
            </Button>
        </div>
    );
}

export default ReactHooks;