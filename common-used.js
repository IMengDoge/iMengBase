let sortObj = function(value) {
	let arr = []
	for (let i in value) {
		arr.push([value[i], i])
	}
	arr.reverse()
	let len = arr.length
	let obj = {}
	for (let i = 0; i < len; i++) {
		obj[arr[i][1]] = arr[i][0]
	}
	return obj
}
// 对象转换数组
let isContainByClass = function(elem, className) {
	if (elem.className.indexOf(className) > -1) {
		return true;
	} else {
		return false;
	}
}
// 某元素是否包含某Class类名
let addClass = function(elem, className) {
	if (!isContainByClass(elem, className)) {
		elem.classList.add(className);
	}
}
// 为某元素增加Class类
let removeClass = function(elem, className) {
	if (isContainByClass(elem, className)) {
		elem.classList.remove(className);
	}
}
// 为某元素删除Class类
let getHost = function(url) {
	var host = "null";
	if (typeof url == "undefined" || null == url) {
		url = window.location.href;
	}
	var regex = /^\w+\:\/\/([^\/]*).*/;
	var match = url.match(regex);
	if (typeof match != "undefined" && null != match) {
		host = match[1];
	}
	return host;
}
// 获取域名主机
String.prototype.trim = function() {
	var reExtraSpace = /^\s*(.*?)\s+$/;
	return this.replace(reExtraSpace, "$1")
}
// 清除空格
String.prototype.replaceAll = function(beReplacedStr, replacedStr) {
	return this.replace(new RegExp(beReplacedStr, "gm"), replacedStr)
}
// 替换文本
Date.prototype.Format = function(formatStr) {
	var str = formatStr;
	var Week = ['日', '一', '二', '三', '四', '五', '六'];
	str = str.replace(/yyyy|YYYY/, this.getFullYear());
	str = str.replace(/yy|YY/, (this.getYear() % 100) > 9 ? (this.getYear() % 100).toString() : '0' + (this.getYear() %
		100));
	str = str.replace(/MM/, (this.getMonth() + 1) > 9 ? (this.getMonth() + 1).toString() : '0' + (this.getMonth() + 1));
	str = str.replace(/M/g, (this.getMonth() + 1));
	str = str.replace(/w|W/g, Week[this.getDay()]);
	str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : '0' + this.getDate());
	str = str.replace(/d|D/g, this.getDate());
	str = str.replace(/hh|HH/, this.getHours() > 9 ? this.getHours().toString() : '0' + this.getHours());
	str = str.replace(/h|H/g, this.getHours());
	str = str.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes().toString() : '0' + this.getMinutes());
	str = str.replace(/m/g, this.getMinutes());
	str = str.replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds().toString() : '0' + this.getSeconds());
	str = str.replace(/s|S/g, this.getSeconds());
	return str;
}
// 格式化重排日期时间
let isDigit = function(value) {
	var patrn = /^[0-9]*$/;
	if (patrn.exec(value) == null || value == "") {
		return false
	} else {
		return true
	}
}
// 是否为数字
let getCookie = function(name) {
	var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
	if (arr != null) return unescape(arr[2]);
	return null
}
// 获取Cookie
let addFavorite = function(sURL, sTitle) {
	try {
		window.external.addFavorite(sURL, sTitle)
	} catch (e) {
		try {
			window.sidebar.addPanel(sTitle, sURL, "")
			return true;
		} catch (e) {
			return false;
		}
	}
}
// 加入我的收藏夹吃灰去吧
let loadStyle = function(url) {
	try {
		document.createStyleSheet(url)
	} catch (e) {
		var cssLink = document.createElement('link');
		cssLink.rel = 'stylesheet';
		cssLink.type = 'text/css';
		cssLink.href = url;
		var head = document.getElementsByTagName('head')[0];
		head.appendChild(cssLink)
	}
}
// 添加样式文件
let getUrlState = function(URL) {
	var xmlhttp = new ActiveXObject("microsoft.xmlhttp");
	xmlhttp.Open("GET", URL, false);
	try {
		xmlhttp.Send();
	} catch (e) {} finally {
		var result = xmlhttp.responseText;
		if (result) {
			if (xmlhttp.Status == 200) {
				return (true);
			} else {
				return (false);
			}
		} else {
			return (false);
		}
	}
}
// 判断网址是否有效
let formatCss = function(s) {
	s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
	s = s.replace(/;\s*;/g, ";");
	s = s.replace(/\,[\s\.\#\d]*{/g, "{");
	s = s.replace(/([^\s])\{([^\s])/g, "$1 {\n\t$2");
	s = s.replace(/([^\s])\}([^\n]*)/g, "$1\n}\n$2");
	s = s.replace(/([^\s]);([^\s\}])/g, "$1;\n\t$2");
	return s;
}
// 格式化css代码
let compressCss = function(s) {
	s = s.replace(/\/\*(.|\n)*?\*\//g, "");
	s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
	s = s.replace(/\,[\s\.\#\d]*\{/g, "{");
	s = s.replace(/;\s*;/g, ";");
	s = s.match(/^\s*(\S+(\s+\S+)*)\s*$/);
	return (s == null) ? "" : s[1];
}
// 压缩css代码
let isMobile = function() {
	if (typeof this._isMobile === 'boolean') {
		return this._isMobile;
	}
	var screenWidth = this.getScreenWidth();
	var fixViewPortsExperiment = rendererModel.runningExperiments.FixViewport || rendererModel.runningExperiments.fixviewport;
	var fixViewPortsExperimentRunning = fixViewPortsExperiment && (fixViewPortsExperiment.toLowerCase() === "new");
	if (!fixViewPortsExperiment) {
		if (!this.isAppleMobileDevice()) {
			screenWidth = screenWidth / window.devicePixelRatio;
		}
	}
	var isMobileScreenSize = screenWidth < 600;
	var isMobileUserAgent = false;
	this._isMobile = isMobileScreenSize && this.isTouchScreen();
	return this._isMobile;
}
// 判断是否为移动端设备
let isMobileUserAgent = function() {
	return (/iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase()));
}
// 判断是否为移动设备UA
let isAppleMobileDevice = function() {
	return (/iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase()));
}
// 是否为苹果端
let isAndroidMobileDevice = function() {
	return (/android/i.test(navigator.userAgent.toLowerCase()));
}
// 是否为安卓端
let randomTimestamp = function() {
	var a = Math.random,
		b = parseInt;
	return Number(new Date()).toString() + b(10 * a()) + b(10 * a()) + b(10 * a());
}
// 随机时间戳
String.prototype.unique = function() {
	var x = this.split(/[\r\n]+/);
	var y = '';
	for (var i = 0; i < x.length; i++) {
		if (!new RegExp("^" + x[i].replace(/([^\w])/ig, "\\$1") + "$", "igm").test(y)) {
			y += x[i] + "\r\n"
		}
	}
	return y
}
// 清除重复数组元素
let toCDB = function(str) {
	var result = '';
	for (var i = 0; i < str.length; i++) {
		code = str.charCodeAt(i);
		if (code >= 65281 && code <= 65374) {
			result += String.fromCharCode(str.charCodeAt(i) - 65248);
		} else if (code == 12288) {
			result += String.fromCharCode(str.charCodeAt(i) - 12288 + 32);
		} else {
			result += str.charAt(i);
		}
	}
	return result;
}
// 全角转换半角