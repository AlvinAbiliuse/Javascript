var elText = document.getElementById("one");

if (elText.hasAttribute("class")) {
	var attr = elText.getAttribute("class");
	var el = document.getElementById("answer");
	el.innerHTML = "<p>The first item has a class name: " + 
		attr + "</p>";
}
