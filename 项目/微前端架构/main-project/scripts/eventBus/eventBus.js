(function(fn, global) {
  global.EventBus = fn()
})(function() {
  function EventBus() {
    this.observer = {};
  }

  // 监听事件
  EventBus.prototype.subscribe = function(eventName, callback) {
    const _this = this;
    // 判断该系列事件之前是否存在
    if (!_this.observer[eventName]) {
      _this.observer[eventName] = [];
    }
    // 添加到该事件名称的队列中
    _this.observer[eventName].push(callback);
    // 返回注销该事件的方法
    return function unsubscribe() {
      // 新的事件队列
      var newEventQueue = [];
      // 旧的事件队列
      var oldEventQueue = _this.observer[eventName];
      // 遍历事件队列
      for (var i = 0; i < oldEventQueue.length; i++) {
        // 获取当前回调事件
        const itemCallback = oldEventQueue[i];
        // 判断当前回调和订阅时的是否相同
        if (callback !== itemCallback) {
          // 不同则加入新的事件队列
          newEventQueue.push(itemCallback);
        }
      }
      // 覆盖之前的事件队列
      _this.observer[eventName] = newEventQueue;
    };
  };

  // 触发某一事件
  EventBus.prototype.dispatch = function(eventName) {
    const eventQueue = this.observer[eventName];
    // 确保该事件队列存在
    if (!eventQueue) {
      return false;
    }
    const args = Array.prototype.slice.call(arguments, 1)
    // 挨个调用订阅的回调
    for (var i = 0; i < eventQueue.length; i++) {
      const itemCallback = eventQueue[i];
      // 调用回调，传入参数， 进行this 的软绑定
      itemCallback.apply(null, args);
    }
  };
  return EventBus
}, window);
