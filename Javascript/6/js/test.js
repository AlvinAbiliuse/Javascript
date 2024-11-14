var el = document.getElementById("one");
var itemList = ["https://www.google.com",
				"https://www.youtube.com",
				"https://www.reddit.com",
				"https://www.twitter.com"];

function openItems() {
	for (var i = 0; i < itemList.length; i++) {
		window.open(itemList[i]);
	}
}

el.onclick = openItems
