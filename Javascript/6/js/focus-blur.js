function toFocus() {
	elUser.focus();
}

function onBlur() {
	if (elUser.value.length < 5) {
		elMsg.className = "warning";
		elMsg.innerHTML = "not long enough, yet...";
	} else {
		elMsg.innerHTML = "";
	}
}

function userTip() {
	elMsg.className = "tip";
	elMsg.innerHTML = "Username must be 5 characters or more!";	
}

var elUser = document.getElementById("user");
var elMsg = document.getElementById("feedback");


window.addEventListener("load", toFocus, false);
elUser.addEventListener("focus", userTip, false);
elUser.addEventListener("blur", onBlur, false);
