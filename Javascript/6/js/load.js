function setFocus() {
	var textInput;
	textInput = document.getElementById("user");
	textInput.focus();
}

window.addEventListener("load", setFocus, false);
