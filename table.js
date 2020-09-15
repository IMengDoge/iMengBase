;;
/*
	前端数据表格化渲染
*/
(function(global, factory) {
	// if (typeof exports === "object" && typeof module !== "undefined") {
	// 	// 支持CommandJS
	// 	module.exports = factory();
	// 	// 引出模块代码
	// } else {
	// 	if (typeof define === 'function' && define.amd) {
	// 		define(factory);
	// 	} else {
	// 		global.Table = factory();
	// 	}

	// 	 // typeof exports === "object" && typeof module !== "undefined"?(module.exports = factory()):typeof define === 'function' && define.amd?define(factory):(global.Table = factory());
	// 	typeof define === 'function' && define.amd?define(factory):(global.Table = factory())
	// }
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(global = global || self, global.Table = factory());
})(this, function() {
	'use strict';
	// 严格模式
	// 1.变量必须声明后再使用
	// 2.函数的参数不能有同名属性
	// 3.不能使用with语句
	// 4.不能对只读属性复制
	// 5.不能用前缀0表示八进制数
	// 6.不能删除不可删除的属性
	// 7.不能删除变量delete prop
	// 8.eval不会再它的外层作用域引入变量
	// 9.eval和arguments不能被重新赋值
	// 10.arguments不会自动反映函数参数的变化
	// 11.不能使用arguments.callee
	// 12.不能使用arguments.caller
	// 13.禁止this指向全局对象
	// 14.不能使用fn.caller和fn.arguments获取函数调用的堆栈
	// 15.增加了保留字


	// 工具集

	function isObject(obj) {
		return typeof obj === "object" && obj !== null;
	}

	function isArray(arr) {
		return arr.constructor === Array;
	}

	return function(obj) {
		if (isArray(obj) || !isObject(obj)) {
			throw new Error("数据类型错误，类型应该为[Object]");
		}
		let el = obj.el,
			theadCon = obj.theadCon,
			colums = obj.colums,
			data = obj.data;
		let tableParentNode = document.querySelector(el);
		let table = document.createElement('table');
		table.className = "baseTable";
		table.border = 1;
		table.style.width = "100%";
		table.style.textAlign = "center";
		table.cellPadding = 0;
		table.cellSpacing = 0;
		tableParentNode.appendChild(table);
		let theadNode = document.createElement("thead");
		let str = "";
		theadCon.forEach(function(content) {
			let td = document.createElement("td");
			td.innerText = content;
			theadNode.appendChild(td);
		});
		table.appendChild(theadNode);

		data.forEach(function(doc) {
			let tr = document.createElement('tr');
			colums.forEach(function(dataName) {
				let key = dataName.data;
				let td = document.createElement('td');
				td.innerText = doc[key];
				tr.appendChild(td);
			});
			table.appendChild(tr);
		});
	}
});
