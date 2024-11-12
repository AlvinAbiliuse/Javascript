var score = 75;
var msg;

if (score > 50) {
	msg = "Congratulations! ";
	msg += "Proceed to the next round.";
};

var elMsg = document.getElementById("answer");
elMsg.textContent = msg;
