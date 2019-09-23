function ageCalculator(birth_year, current_year){
	var birth_year = 1971;
	var currentdate = new Date();
	var current_year2 = currentdate.getFullYear();
	var result = current_year2 - birth_year;
	var result2 = current_year2 - birth_year - 1;
	document.write("You are either " + result + "years old.");
	document.write("You are either " + result2 + "years old.");
}

