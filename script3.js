function timeConvert(){
    var userMinutes = prompt("plz give me the minutes you want to convert")
    var hour = userMinutes/60;
    var hourRest = Math.round(hour);
    var minutes = (hour-hourRest)*60;
    var minuteRest = Math.round(minutes);
    document.write(hourRest + " hour" + minuteRest + " minutes")    
}

var yesterdayDate = (function(){
    var d = new Date();
    //var yesterDay = date.setDate(date.getDate() - 1);
    d.setDate(d.getDate() - 1);
    document.write(d.toDateString());
    
}());

function dynamicBackground(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 document.write(bgColor);
  
    document.body.style.background = bgColor; 
}