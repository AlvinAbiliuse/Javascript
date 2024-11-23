var openButton, hideButton, firstList, liLinks;

openButton = document.getElementById("openAll1");
hideButton = document.getElementById("hideButton1");
firstList = document.getElementById("firstList");

liLinks = document.querySelectorAll("ul#firstList a");
console.log(liLinks.length);

function linkOpen() {
	for (var i = 0; i < liLinks.length; i++) {
		console.log(i);
		window.open(liLinks[i].href);
	}	
}

function linkHide() {
	if (firstList.className == "") {
		firstList.className = "hide";
	} else {
		firstList.className = "";
	}
}

openButton.addEventListener("click", linkOpen, false);
hideButton.addEventListener("click", linkHide, false);
