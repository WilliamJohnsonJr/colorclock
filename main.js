var seconds = Number(document.querySelector(".seconds").innerHTML);
var minutes = Number(document.querySelector(".minutes").innerHTML);
var hours = Number(document.querySelector(".hours").innerHTML);

var countUp = function(){
	if (seconds < 60){
			seconds = seconds + 1;
		} else if (minutes < 60) {
			minutes = minutes + 1;
			seconds = 00;
		} else {
			hours = hours + 1;
			minutes = 00;
			seconds = 00;
		}
};

var clockCounter = window.setInterval(countUp, 300);