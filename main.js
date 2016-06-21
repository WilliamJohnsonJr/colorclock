var clockcounter = function (){
	setInterval(countUp, 1000);
};

var countUp = function(){
	var clockNums = document.querySelector(".clocknums");
	clockNums.innerHTML = Number(clockNums) + 1;
};

clockcounter();