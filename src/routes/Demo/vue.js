class Vue {
    constructor(options) {
        this.$options = options;
        this.$data = options.data;
        this.observeActiveDate(options.data); 
    }
    // 数据劫持
    observeActiveDate(data) {
        if(!data || typeof data !== 'object') return;
        Object.keys(data).map(key => {
            this.observedata(data, key, data[key])
        })
    }

    observedata(data, key, val) {
        Object.defineProperty(data, key, {
            get() {
                return val;
            },
            set(newVal) {
                if(val === newVal) return;
                val = newVal;
            }
        })
    }
}

class ObeServes {
    constructor() {
        this.sub = [];
    }

    addSub(fn) {
        this.sub.push(fn);
    }

    dispatchState(fn) {
        this.sub.forEach(k => k.update())
    }
}

class watcher {
    constructor() {
        this.vm
        ObeServes.target = this;
    }
}