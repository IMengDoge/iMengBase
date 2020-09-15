// 原型方法修改
// string
String.prototype.findEx = function(leftText, rightText) {
	let left = this.indexOf(leftText) + 1;
	let right = this.indexOf(rightText);
	let rtn = this.substring(left, right);
	return rtn;
}
String.prototype.increase = function(stepNum) {
	let nowNum = this - 0;
	nowNum += stepNum;
	return nowNum.toString();
}
String.prototype.increaseEx = function(stepText) {
	let nowText = this;
	nowText += stepText;
	return nowText;
}
String.prototype.decrease = function(stepNum) {
	let nowNum = this - 0;
	nowNum -= stepNum;
	return nowNum.toString();
}
String.prototype.reverse = function() {
	return this.split('').reverse().join('');
}
String.prototype.iEncode = function() {
	let monyer = new Array();
	let i, s;
	for (i = 0; i < this.length; i++)
		monyer += "\\" + this.charCodeAt(i).toString(8);
	return monyer;
}
String.prototype.iDecode = function() {
	let monyer = new Array();
	let i;
	let s = this.split("\\");
	for (i = 1; i < s.length; i++)
		monyer += String.fromCharCode(parseInt(s[i], 8));
	return monyer;
}


