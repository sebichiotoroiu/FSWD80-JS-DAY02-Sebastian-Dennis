/*var upperCase = (function(){
    var text = prompt("Write some Text");
    var firstLetter = text.charAt(0).toUpperCase();
    console.log(firstLetter+text.substring(1))
}());*/

function averageGrade(){
    var math = prompt("plz give me your math grade");
    var physics = prompt("plz give me your physics grade");
    var english = prompt("plz give me your english grade");
    var result = parseInt(math) + parseInt(physics) + parseInt(english);
    var result2 = result / 3;
    document.write("Sum: " + result + "<br> Average: " + result2)
}