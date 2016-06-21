var seconds = Number(document.querySelector(".seconds").innerHTML);
var tensSeconds = Number(document.querySelector(".tensSeconds").innerHTML);
var minutes = Number(document.querySelector(".minutes").innerHTML);
var tensMinutes = Number(document.querySelector(".tensMinutes").innerHTML);
var hours = Number(document.querySelector(".hours").innerHTML);
var tensHours = Number(document.querySelector(".tensHours").innerHTML);

document.querySelector(".clockNums").innerHTML = "<span class=\"pound\">#</span><span class=\"tensHours\">0</span><span class=\"hours\">0</span><span class=\"tensMinutes\">0</span><span class=\"minutes\">0</span><span class=\"tensSeconds\">0</span><span class=\"seconds\">0</span>";

var marginShift = function (item) {
	var item = document.querySelector(item);
	item.style.marginRight = "0px";
};

marginShift(".tensHours");
marginShift(".hours");
marginShift(".tensMinutes");
marginShift(".minutes");
marginShift(".tensSeconds");
marginShift(".seconds");
marginShift(".pound");

var bodyObj= document.getElementById("body");

bodyObj.style.backgroundColor = "#024542";

var countUp = function(){
	if (seconds < 9){
			seconds = seconds + 1;
			document.querySelector(".seconds").textContent = seconds;
			if (seconds == 2) {
				bodyObj.style.backgroundColor = "#024548";
			} else if (seconds == 4) {
				bodyObj.style.backgroundColor = "#024551";
			} else if (seconds == 6) {
				bodyObj.style.backgroundColor = "#024542";
			} else if (seconds == 8) {
				bodyObj.style.backgroundColor = "#024548";
			}
		} else if (tensSeconds < 5) {
			tensSeconds = tensSeconds + 1;
			seconds = 0;
			document.querySelector(".seconds").textContent = seconds;
			document.querySelector(".tensSeconds").textContent = tensSeconds;
			if (seconds == 0) {
				bodyObj.style.backgroundColor = "#024542";
			}
		} else if (minutes < 9) {
			minutes = minutes + 1;
			tensSeconds = 0;
			seconds = 0;
			document.querySelector(".seconds").textContent = seconds;
			document.querySelector(".tensSeconds").textContent = tensSeconds;
			document.querySelector(".minutes").textContent = minutes;
		} else if (tensMinutes < 5) {
			tensMinutes = tensMinutes +1;
			minutes = 0;
			tensSeconds = 0;
			seconds = 0;
			document.querySelector(".seconds").textContent = seconds;
			document.querySelector(".tensSeconds").textContent = tensSeconds;
			document.querySelector(".minutes").textContent = minutes;
			document.querySelector(".tensMinutes").textContent = tensMinutes;
		} else if (hours < 9) {
			hours = hours + 1;
			tensMinutes = 0;
			minutes = 0;
			tensSeconds =0;
			seconds = 0;
			document.querySelector(".seconds").textContent = seconds;
			document.querySelector(".tensSeconds").textContent = tensSeconds;
			document.querySelector(".minutes").textContent = minutes;
			document.querySelector(".tensMinutes").textContent = tensMinutes;
			document.querySelector(".hours").textContent = hours;
		} else if (tensHours < 9) {
			tensHours = tensHours + 1;
			hours = 0;
			tensMinutes = 0;
			minutes = 0;
			tensSeconds = 0;
			seconds =0;
			document.querySelector(".seconds").textContent = seconds;
			document.querySelector(".tensSeconds").textContent = tensSeconds;
			document.querySelector(".minutes").textContent = minutes;
			document.querySelector(".tensMinutes").textContent = tensMinutes;
			document.querySelector(".hours").textContent = hours;
			document.querySelector(".tensHours").textContent = tensHours;
		} else {
			tensHours = 0;
			hours = 0;
			tensMinutes = 0;
			minutes = 0;
			tensSeconds = 0;
			seconds =0;
			document.querySelector(".seconds").textContent = seconds;
			document.querySelector(".tensSeconds").textContent = tensSeconds;
			document.querySelector(".minutes").textContent = minutes;
			document.querySelector(".tensMinutes").textContent = tensMinutes;
			document.querySelector(".hours").textContent = hours;
			document.querySelector(".tensHours").textContent = tensHours;
		}
};

var clockCounter = window.setInterval(countUp, 1000);