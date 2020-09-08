let el = function(jsSelector) {
	let prefix = jsSelector.substr(0, 1);
	let path;
	let elem;
	if (prefix == "#") {
		path = jsSelector.substr(1, jsSelector.length - 1);
		elem = document.getElementById(path);
	} else if (prefix == ".") {
		path = jsSelector.substr(1, jsSelector.length - 1);
		elem = document.getElementsByClassName(path);
	} else if (prefix == "[") {
		path = jsSelector.substr(1, jsSelector.length - 2);
		elem = document.getElementsByName(path);
	} else {
		elem = document.getElementsByTagName(jsSelector);
	}
	return elem;
}
