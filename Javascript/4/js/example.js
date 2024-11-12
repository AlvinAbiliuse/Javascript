var timesTable = 3;
var repetition = 10;
var msg = "";
var i = 0;

while(i < repetition) {
	msg += (i + 1) + " + " + timesTable + " = " + ((i + 1) + 
		timesTable) + "<br />";
	i++;
}

document.getElementById("blackboard").innerHTML = msg;

