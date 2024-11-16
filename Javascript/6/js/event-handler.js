function button() {
	var elMsg = document.getElementById("feedback");
	if (this.value.length < 5) {
		elMsg.textContent = "Username Must be 5 characters or more";
	} else {
		elMsg.textContent = ""
	}
}

var elUsername = document.getElementById("username");
elUsername.onblur = button;
