function observe (data) {
  if (!data || typeof data !== 'object') {
    return;
  }
  Object.keys(data).forEach(key => {
    observeProperty(data, key, data[key])
  })
}

function observeProperty (obj, key, val) {
  observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,   // 可枚举
    configurable: true, // 可重新定义
    get: function () {
      return val;
    },
    set: function (newVal) {
      if (val === newVal || (newVal !== newVal && val !== val)) {
        return;
      }
      console.log('数据更新啦 ', val, '=>', newVal);
      val = newVal;
    }
  });
}