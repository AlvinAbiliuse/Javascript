var elUserName = document.getElementById("username");
var feedback = document.getElementById("feedback");

function changeFeedback(number) {
	if (elUserName.value.length < number) {
		feedback.textContent = "Username must be " + number + 
			" characters or more!";
	} else {
		feedback.innerHTML = "";
	}
}

elUserName.addEventListener("blur", function() {
		changeFeedback(5);},
		false);	
