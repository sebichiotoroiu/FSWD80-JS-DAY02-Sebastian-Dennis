

function averageGrade(){
	var math = prompt("Please give me the math note");
	var physics = prompt("Please give me the physics note");
	var english = prompt("Please give me the physics note");
	var result = parseInt(math) + parseInt(physics) + parseInt(english);
	document.write("Sum:" + result);
	var result2 = (parseInt(math) + parseInt(physics) + parseInt(english))/3;
	document.write("<br>" + "Ave:" + result2);
}

