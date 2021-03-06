function startTime() {
    var today = new Date();
    var h = today.getHours() > 12 ? today.getHours() - 12:today.getHours();
    var am_pm = today.getHours() >= 12 ? "P.M." : "A.M.";
    var m = today.getMinutes();
    var s = today.getSeconds();
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
    curMonth = months[today.getMonth()],
    dayOfMonth = today.getDate(); 
    year = today.getFullYear();

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
    h + ":" + m + ":" + s + "<span class=\"period\"> " +am_pm + "</span>";
    
    document.getElementById('month').innerHTML = 
    curMonth;
    document.getElementById('day').innerHTML = 
    dayOfMonth;
    document.getElementById('year').innerHTML = 
    year;

    var t = setTimeout(startTime);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

