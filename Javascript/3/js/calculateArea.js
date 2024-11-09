function calculateArea(width, height) {
	return width * height;
}

var elOne = document.getElementById("wallOne");
elOne.textContent = calculateArea(3, 5);

var elTwo = document.getElementById("wallTwo");
elTwo.textContent = calculateArea(8, 5);
