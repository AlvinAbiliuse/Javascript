var hotItems = document.querySelectorAll("li.hot");

if (hotItems.length > 0) {
	for (var i=0; i < hotItems.length; i++) {
		hotItems[i].className = "cool";
	}
}

var test = document.getElementById("four");
test.textContent += " fresh"
