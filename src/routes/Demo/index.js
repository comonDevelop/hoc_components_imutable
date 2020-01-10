// 订阅、发布模式
class Obeserve {
    constructor() {
        this.sub = [];
    }
    addObeserve(fn) {
        this.sub.push(fn)
    }
    removeObserve(fn) {
        this.sub = this.sub.filter(k => k !== fn)
    }
    ObeserveDispatch(fn, message) {
        this.sub.map(k => {
            if(fn === k) {
                console.log("这个消息是：", message)
                fn.call(this, message);
            }
        })
    }
}

var a = new Obeserve();
var fn1 = function(message) {
    console.log("这是fn1 订阅"+message)
}
var fn2 = function(message) {
    console.log("这是fn2 订阅"+message)
}
a.addObeserve(fn1)
a.addObeserve(fn2)
a.ObeserveDispatch(fn1, '现在开始卖大米了啊')
a.ObeserveDispatch(fn1, '大米卖完了啊')
a.ObeserveDispatch(fn2, '大米卖完了啊')

export default Obeserve;
