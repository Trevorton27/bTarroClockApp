// SDMM Clock App
// Preloads

let myDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let myMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'];
let suffixes = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
    'th', 'th', 'th', 'th', 'th', 'th', 'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th',
    'th', 'th', 'st'];


// 12h Local Clock 

// preload loal clock to avoid delay inital display of clock due to interval refresh
function earlyLocalClock() {
    let d = new Date();

    let currentTime = d.toLocaleTimeString();
    let currentDate = myDays[d.getDay()] + ',' + ' ' + myMonths[d.getMonth()] + ' ' + d.getDate() + suffixes[d.getDate()];

    document.getElementById("clock").innerHTML = currentTime;
    document.getElementById("date").innerHTML = currentDate;
    document.getElementById("clocktype").innerHTML = "24h"
    localClock();
}

// 12h Logic & Display
function localClock() {
    var newClock = setInterval(myLocalClock, 1000);
    function myLocalClock() {
        let d = new Date();

        let currentTime = d.toLocaleTimeString();
        let currentDate = myDays[d.getDay()] + ',' + ' ' + myMonths[d.getMonth()] + ' ' + d.getDate() + suffixes[d.getDate()];

        document.getElementById("clock").innerHTML = currentTime;
        document.getElementById("date").innerHTML = currentDate;
        document.getElementById("clocktype").innerHTML = "24h"
        document.getElementById("clocktype").onclick = function () { clearInterval(newClock); earlyMilClock(); };

    }

}

// 24h Military Time Clock

// preload the mil clock to avoid delay inital display of clock due to interval refresh
function earlyMilClock() {
    let d = new Date();

    let currentTime = d.toTimeString().slice(0, 8);
    let currentDate = myDays[d.getDay()] + ',' + ' ' + myMonths[d.getMonth()] + ' ' + d.getDate() + suffixes[d.getDate()];

    document.getElementById("clock").innerHTML = currentTime;
    document.getElementById("date").innerHTML = currentDate;
    document.getElementById("clocktype").innerHTML = "12h"
    milClock();
}

// 24h logic & Display
function milClock() {
    var newClock = setInterval(myMilClock, 1000);
    function myMilClock() {
        let d = new Date();

        let currentTime = d.toTimeString().slice(0, 8);
        let currentDate = myDays[d.getDay()] + ',' + ' ' + myMonths[d.getMonth()] + ' ' + d.getDate() + suffixes[d.getDate()];

        document.getElementById("clock").innerHTML = currentTime;
        document.getElementById("date").innerHTML = currentDate;
        document.getElementById("clocktype").innerHTML = "12h"
        document.getElementById("clocktype").onclick = function () { clearInterval(newClock); earlyLocalClock(); };

    }

}

