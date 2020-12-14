// Clock App


var myRefresh = setInterval(myClock, 1000);

function myClock() {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'];
    let suffixes = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
        'th', 'th', 'th', 'th', 'th', 'th', 'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th',
        'th', 'th', 'st']

    var d = new Date()

    var currentTime = d.toLocaleTimeString();
    var currentDate = days[d.getDay()] + ',' + ' ' + months[d.getMonth()] + ' ' + d.getDate() + suffixes[d.getDate()];

    var numSuffix = currentDate.toString()

    document.getElementById("clock").innerHTML = currentTime;
    document.getElementById("date").innerHTML = currentDate;

}