var score = 75;
var msg = "";

function congratulate() {
	msg += "Congratulations! ";
	msg += "Proceed to the next round.";
};

if (score > 50) {
	congratulate();
}

var el = document.getElementById("answer");
el.textContent = msg;
