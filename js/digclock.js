 //create a time data function
 function currentTime() {
    //Declare variables
    var d = new Date(); //Get current date
    var hr = d.getHours(); //Get current hours
    var min = d.getMinutes(); //Get cutrrent minutes
    var sec = d.getSeconds(); //Get current seconds
    var ampm; //Declare empty variable to store AM or PM

//Add 0 to single digits for seconds
if (sec < 10) {
    sec = "0" + sec;
}
//Add 0 to single digits for minutes
if (min < 10) {
    min = "0" + min;
}

// Determine AM or PM string
if (hr == 12) {
    ampm = "PM"; //Set to PM
} else if ( hr > 12) {
    hr -= 12; //Deduct 12 from hours greater than 12
    ampm = "PM"; //Set to PM
} else {
    ampm = "AM"; //Set to AM
}

//Assemble time format to display
var time = hr + ":" + min + ":" + sec + " " + ampm;

//Display current locat time and time zone on HTML
document.getElementById("clock").innerText = time; //Adding time

//Run time data Function every 1 second
setInterval(currentTime, 1000); //setting timer
}

//Initial run of time data function
currentTime();