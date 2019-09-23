function ageCalc(birthYear, currentYear){

	var birthYear = prompt("give me your birth year");
	
    var currentdate= new Date();
    var currentYear2 = currentdate.getFullYear();
    var result1 = currentYear2 - birthYear;
    var result2 = result1-1;
    document.write("your age is between " + result1 + " or " +result2 + " Years");
	
}

function DegreeRadian(degree){
    var degree = prompt("Plz give me the degrees that should be converted to Radian");
    var result = degree * (Math.PI/180);
    document.write("the result is " + result.toFixed(3));
}

function CalcAreaVolumeBox(area, volume){
    var userwidth = prompt("plz give me the width");
    var userheight = prompt("plz give me now the height");
    var userdepth = prompt("plz give me the depth");
    var area = userwidth * userheight;
    var volume = userwidth * userheight * userdepth;
    document.write("The area of the box is " + area + " and <br> the volume of the box is " + volume);
}
