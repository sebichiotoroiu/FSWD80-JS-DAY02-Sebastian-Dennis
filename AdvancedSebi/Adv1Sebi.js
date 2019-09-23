

function Convert(){
    var userMinutes = prompt("Insert the minutes fot to convert")
    var hour = userMinutes/60;
    var hourRest = Math.round(hour);
    var minutes = (hour-hourRest)*60;
    var minuteRest = Math.round(minutes);
    document.write(hourRest + " hour" + minuteRest + " minutes")    
}

