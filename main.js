var clockcount = window.setInterVal(countUp, 1000)

var countUp = function(){
	var clockNums = document.querySelector(".clocknums");
	clockNums.innerHTML = Number(clockNums) + 1;
};