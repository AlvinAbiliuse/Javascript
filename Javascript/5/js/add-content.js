var elNew = document.createElement("li");

var elText = document.createTextNode("Quinoa");

elNew.appendChild(elText);

var position = document.getElementsByTagName("ul")[0];

position.appendChild(elNew);
