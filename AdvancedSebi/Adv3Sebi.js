
function dynamicbackground(){
	var rgbx = Math.floor((Math.random() * 256));
	var rgby = Math.floor((Math.random() * 256));
	var rgbz = Math.floor((Math.random() * 256));
	var result_rgb = "RGB" + "(" + rgbx + "," + rgby + "," + rgbz + ")";
	document.write(result_rgb);
}