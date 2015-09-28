var closure = function() {
  var privateVar = 0; // 私有属性
  var privateFn = function() {
    // 私有方法
  };
  return {
    publicVar: 1, // 共有属性
    publicFn: function() {
      // 公有方法
    }
  }
};

var fn = function(param, callback) {
  callback(param);
};

fn('hello', function(data) {
  console.log(data);
});