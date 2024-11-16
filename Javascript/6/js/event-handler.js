function button() {
	var feedback = document.getElementById("feedback");
	if (this.value.length < 5) {
		feedback.textContent = "Username Must be 5 characters or more";
	} else {
		feedback.textContent = ""
	}
}

var elUsername = document.getElementById("username");
elUserName.onblur = button;
