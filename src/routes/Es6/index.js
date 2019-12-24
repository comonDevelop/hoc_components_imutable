// class 使用总结
import React from 'react';


/// ----------------js 构造函数用法--------------------- ///
function MathFun(x,y) {
    this.x=x;
    this.y=y
}

MathFun.prototype.add = function() {
    return this.x += this.y;
}

class Es6Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state={

        }
    }

    componentDidMount() {
        var mathAdd = new MathFun(3,4);
        var num = mathAdd.add();
        console.log(num, '-------num-----')
    }

    render() {
        return (
            <div>
                123
            </div>
        )
    }
}

export default Es6Demo;