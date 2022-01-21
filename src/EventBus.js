// class 实现事件总线
class EventEmitter {
    constructor () {
        // 缓存列表
        this.listener = {}
    }
    // 订阅事件
    on (EventName, fn) {
        // 如果订阅的事件不存在，则新增
        if (!this.listener[EventName]) {
            this.listener[EventName] = [];
        }
        // 如果存在则放入数组中
        this.listener[EventName].push(fn);
    }
    // 发布事件
    emit (EventName, content) {
        const fns = this.listener[EventName];
        if (fns) {
            fns.forEach(fn => fn.apply(this, [... arguments].slice(1)));
        }
    }
    // 取消订阅事件
    off (EventName, fn) {
        const fns = this.listener[EventName];
        if (!fns) return false;
        // 如果没有指定取消那个订阅，则取消该事件的全部订阅
        if (!fn) {
            fns.length = 0;
        }
        // 否则取消某个订阅
        const index = fns.indexOf(fn);
        fns.splice(index, 1);
    }
    // 一次性订阅事件
    once (EventName, fn) {
        const _fn = content => {
            fn(content)
            // 执行一次马上取消订阅
            this.off(EventName, _fn);
        }
        // 先正常订阅
        this.on(EventName, _fn);
    }
}

let ev = new EventEmitter();
ev.on('myevent', name => {
    console.log("hello", name);
})
ev.on('myevent', name => {
    console.log("hello11", name);
})
ev.once('myevent', name => {
    console.log("once",name)
})
ev.emit('myevent', 'jack')
ev.emit('myevent', 'ss ')