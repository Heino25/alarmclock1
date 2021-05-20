var timer = document.getElementById("timer");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var secondes = document.getElementById("secondes");
var ampm = document.getElementById("ampm");
var startstop = document.getElementById("startstop");
var startstop2 = document.getElementById("startstop2");
var startstop3 = document.getElementById("startstop3");

var currentTime;
var alarmElement;
var activeAlarm = false;
var sound = new Audio("alarmsound.mp3");
sound.loop = true;

function imageDisplay() {

    if (currentTime == imageElement) {
        imageDisplay("goodmorning.png");
    }

}

function showTime() {
    var now = new Date();
    currentTime = now.toLocaleTimeString();


    if (currentTime == alarmElement) {
        sound.play("alarmsound.mp3");
    }
    timer.textContent = currentTime;
    setTimeout(showTime, 1000);
}
showTime();

function addMinSec(id) {
    var select = id;
    var min = 59;

    for (i = 0; i <= min; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i);
    }
}


function addHour(id) {
    var select = id;
    var min = 12;

    for (i = 0; i <= min; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i);
    }
}
addHour(hours)
addMinSec(secondes);
addMinSec(minutes);


startstop.onclick = function() {
    if (activeAlarm === false) {


        alarmElement = hours.value + "," + minutes.value + ";" + secondes.value + " " + ampm.value;
        this.textContent = "Clear Reminder";
        activeAlarm = true;
    } else {

        sound.pause();
        this.textContent = "Wake Up";
        activeAlarm = false;

    }
}


startstop2.onclick = function() {
    if (activeAlarm === false) {

        alarmElement = hours.value + "," + minutes.value + ";" + secondes.value + " " + ampm.value;
        this.textContent = "Clear Reminder";
        activeAlarm = true;
    } else {

        sound.pause();
        this.textContent = "Lunch";
        activeAlarm = false;

    }
}

startstop3.onclick = function() {
    if (activeAlarm === false) {


        alarmElement = hours.value + "," + minutes.value + ";" + secondes.value + " " + ampm.value;
        this.textContent = "Clear Reminder";
        activeAlarm = true;
    } else {

        sound.pause();
        this.textContent = "Bedtime";
        activeAlarm = false;

    }
}

function myFunction() {
    var greeting;
    var time = new Date().getHours();
    if (time < 12) {
        greeting = "Good Morning";
    } else if (time < 20) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    document.getElementById("demo").innerHTML = greeting;
}