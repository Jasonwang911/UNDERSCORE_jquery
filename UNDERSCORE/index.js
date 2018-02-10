// UNDERSCORE.js基于函数式变成所开发的工具库
// 工具函数可以是 ajax  isWindow  isArray 等
// 对象可以自由的扩展  obj.name = 'max'
// UNDERSCORE 的意思是下划线的意思，本质是在对象上封装了一系列的东西: each 
// 支持两种变成风格的调用


(function() { // 全局作用域  局部作用域
	var root = typeof self == 'object' && self.self === self && self || typeof global == 'object' && global.global === global && global || this || {};

	var _ = function() {
		// console.log(this); // 第一次调用的时候this指向window
		if (!(this instanceof _)) return new _();
	}

	_.uniq = function() {
		console.log('uniq的方法执行了');
	}

	_.functions = function(obj) {
		var name = [];
		for (var key in obj) {
			name.push(key);
		}
		return name;
	}

	_.each = function(arr, callback) {
		//_自身方法扩展_.prototype
		console.log(arr)
		if (arr) { // isArray(arr)
			var len = arr.length;
			for (var i = 0; i < len; i++) {
				if (callback.call(arr[i], arr[i])) {

				}
			}
		}
	}

	// 自身方法 扩展到原型对象上去 _.prototype
	_.mixin = function(obj) {
		_.each(_.functions(obj), function(name) {
			//_自身方法扩展_.prototype
			console.log(name);
			var fun = obj[name];
			_.prototype[name] = function() {
				return fun();
			}
		});
	}

	if (typeof exports != 'undefined' && !exports.nodeType) {
		if (typeof module != 'undefined' && !module.nodeType && module.exports) {
			exports = module.exports = _;
		}
		exports._ = _;
	} else {
		root._ = _;
	}

	_.mixin(_);

})();

// console.log(_.uniq);
// console.log(_().uniq)

_.uniq();
_().uniq();