var elList, elAddText, elButton, newEl, newText, elCounter

elList = document.getElementById("list");
elAddText = document.getElementById("insertItem");
elButton = document.getElementById("addButton");
elCounter = document.getElementById("counter");

function addItem(e) {
	if (elAddText.value.length > 1) {
		e.preventDefault();
		newEl = document.createElement("li");
		newText = document.createTextNode(elAddText.value);
		newEl.appendChild(newText);
		elList.appendChild(newEl);
		elAddText.value = "";
	}
	elCounter.textContent = document.querySelectorAll("ul#list li").length;
	
}


elButton.addEventListener("click", addItem, false);


