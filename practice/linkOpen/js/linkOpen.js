var openButton, hideButton, firstList, liLinks;

openButton = document.getElementById("openAll1");
hideButton = document.getElementById("hideButton1");
firstList = document.getElementById("firstList");

liLinks = document.querySelectorAll("ul#firstList a");
console.log(liLinks[1].textContent);
function linkOpen() {
	firstList.value;	
	}

function linkHide() {
	if (firstList.className == "") {
		firstList.className = "hide";
	} else {
		firstList.className = "";
	}
}

hideButton.addEventListener("click", linkHide, false);
