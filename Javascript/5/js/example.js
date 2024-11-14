

(function() {
	// get ul by tag name
	// appendChild to ul
	// add first element
	var ulEl = document.getElementsByTagName("ul")[0];

	var lastChild = document.createElement("li");
	lastChild.setAttribute("id", "five");
	lastChild.setAttribute("class", "hot");
	textNode = document.createTextNode("cucumber");
	lastChild.appendChild(textNode);

	ulEl.appendChild(lastChild);

	var firstElement= document.createElement("li");
	textNode = document.createTextNode("kale");
	firstElement.appendChild(textNode);
	ulEl.insertBefore(firstElement, ulEl.firstChild);



	// get h2
	// add list length to h2

	var elHeader = document.querySelector("h2");
	var listItem = document.getElementsByTagName("li");
	elHeader.innerHTML = elHeader.textContent + "<span>" + 
					listItem.length + "</span";


	//function to replace class name
	//for loop and if statements to check if element hasAttribute("class")
	for (var i = 0; i < listItem.length; i++) {
		listItem[i].className = "cool";
	}
}())
