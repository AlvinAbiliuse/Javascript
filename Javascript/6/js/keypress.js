function charCount(e) {
	var textEntered, charactersLeft, lastKey, counter;
	textEntered = document.getElementById("textEntered");
	charactersLeft = document.getElementById("charactersLeft");
	if (textEntered.value.length < 180) {
		charactersLeft.className = "";
		charactersLeft.innerHTML = (180 - (textEntered.value.length + 1)) + " characters left";
	} else {
		charactersLeft.innerHTML = ("too many characters!!");
		charactersLeft.className = "warning";
	}

	lastKey = document.getElementById("lastKey");
	lastKey.textContent = "Last key in ASCII code: " + e.keyCode;
}

el = document.getElementById("textEntered");
el.addEventListener("keypress", charCount, false);

