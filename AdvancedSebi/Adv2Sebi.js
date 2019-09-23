
var yesterdayDate = (function(){
    var d = new Date();
    //var yesterDay = date.setDate(date.getDate() - 1);
    d.setDate(d.getDate() - 1);
    document.write(d.toDateString());

}());