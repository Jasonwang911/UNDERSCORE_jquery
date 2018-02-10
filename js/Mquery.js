// 起手函数是一个立即执行的闭包
(function(global, factory) {
	"use strict";

	if (typeof module === "object" && typeof module.exports === "object") {
		// 模块加载器
		module.exports = global.document ?
			factory(global, true) :
			function(w) {
				if (!w.document) {
					throw new Error("jQuery requires a window with a document");
				}
				return factory(w);
			};
	} else {
		factory(global);
	}

})(typeof window !== "undefined" ? window : this, function(window, noGlobal) {

	"use strict";

	var jQuery = function() {
		return new jQuery.fn.init();
	}

	jQuery.fn = jQuery.prototype = {
		init: function() { // 构造函数

		}
	}
	// 定义工厂函数  window /global / $  共享原型 
	var jQuery = function factory(global) {

	}

	jQuery.fn.init.prototype = jQuery.fn;

	jQuery.extend = jQuery.fn.extend = function() {
		// $.extend
	}

	// 通过工具函数来进行管理和维护 extend  是用来给对象扩展，可以给本身扩展，给实例对象扩展，
	// $.fn.extend   是原型上的一个方法  
	// 面向对象的编程，扩展工具方法 eg： 
	jQuery.extend({

	});

	if (!noGlobal) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
}); //