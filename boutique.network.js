;;
class CookieUntil {
	constructor() {

	}
	// 设置(键，值，过期时间，域名，路径，安全)
	set(name, value, expires, domain, path, secure) {
		let cookieText = "";
		cookieText += encodeURIComponent(name) + "=" + encodeURIComponent(value);
		if (expires instanceof Date) {
			cookieText += ";expires=" + expires.toGMTString();
		}
		if (path) {
			cookieText += ";path=" + path;
		}
		if (domain) {
			cookieText += ";domain=" + domain;
		}
		if (secure) {
			cookieText += ";secure=" + secure;
		}
		document.cookie = cookieText;
	}
	// name=value; expires=expiration_time; path=domain_path; domain=domain_name; secure
	// 获取(键)
	get(name) {
		let cookieName = encodeURIComponent(name) + "=",
			cookieStart = document.cookie.indexOf(cookieName),
			cookieValue = "";
		if (cookieStart > -1) {
			let cookieEnd = document.cookie.indexOf(";", cookieStart);
			if (cookieEnd == -1) {
				cookieEnd = document.cookie.length;
			}
			cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
		}
		return cookieValue;
	}
	// 删除
	unset(name, domain, path, secure) {
		this.set(name, "", Date(0), domain, path, secure);
	}
}

class CookieUntilEx {
	constructor(cookieText) {
		if (cookieText) {
			this.cookieStr = cookieText;
			this.cookieArr = parseArr(cookieText);
		}
	}
	parseArr(cookieText) {
		let text = cookieText;
		if (text.substr(text.length - 1, 1) == ";") {
			text = text.substr(0, text.length - 1);
		}
		let arr = text.split(';');
		this.cookieArr = arr;
		return arr;
	}
	isCookie(name) {
		let cookieStart = document.cookie.indexOf(name),
			isTrue = false;
		if (cookieStart > -1) {
			isTrue = true;
		}
		return isTrue;
	}
	addCookie(cookieText) {
		let str = cookieText;
		if (cookieText.substr(text.length - 1, 1) != ";") {
			str = cookieText + ";";
		}
		this.cookieStr += str;
	}
}

let openUrl = function(url) {
	window.location.href = url;
}

