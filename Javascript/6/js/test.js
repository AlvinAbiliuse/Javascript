var el = document.getElementById("one");
var listItem = ["https://www.google.com",
				"https://www.youtube.com",
				"https://www.reddit.com",
				"https://www.twitter.com"];

function elFun() {
	for (var i = 0; i < listItem.length; i++) {
		window.open(listItem[i]);
	
	};
}

el.onclick = elFun();
