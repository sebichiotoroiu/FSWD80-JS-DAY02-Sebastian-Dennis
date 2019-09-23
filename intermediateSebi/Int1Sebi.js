var capitalize = (function() {
	var text = prompt ("Write text");
	var firstletter = text.charAt(0).toUpperCase();
	console.log(firstletter + text.substring(1));
}());