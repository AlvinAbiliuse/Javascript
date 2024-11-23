var openButton, hideButton, liLinks;

openButton = document.getElementById("openAll1");
hideButton = document.getElementById("hideButton1");
function linkOpen() {
	}

function linkHide() {
	var firstList = document.getElementById("firstList");
	if (firstList.className == "") {
		firstList.className = "hide";
	} else {
		firstList.className = "";
	}
}

hideButton.addEventListener("click", linkHide, false);
