var scores = [24, 32, 17];
var msg = "";

for (var i = 0; i < scores.length; i++) {
	msg += "Round " + (i + 1) + ": " + scores[i] + "<br />";
}

document.getElementById("answer").innerHTML = msg;
