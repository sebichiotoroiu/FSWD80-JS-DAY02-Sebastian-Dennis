function area(width, height){
	var width = prompt("Please give me the width");
	var height = prompt("please give me the height");
	var area = width * height;
	document.write("Area= " + width + "*" + height + "=" + area);
}

function volum(width, height, depth){
	var width = prompt("Please give me the width");
	var height = prompt("please give me the height");
	var depth = prompt("please give me the depth");
	var area = width * height;
	var volum = width * height * depth;
	document.write("Area= " + width + "*" + height+ "=" + area);
	document.write("Volum= " + width + "*" + height + "*" + depth + "=" + volum);
}
