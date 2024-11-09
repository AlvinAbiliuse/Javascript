function calculateArea(width, height) {
	var area = width * height;
	return area;
}

var wallOne = calculateArea(3, 5);
var elOne = document.getElementById("wallOne");
elOne.textContent = wallOne;

var wallTwo = calculateArea(8, 5);
var elTwo = document.getElementById("wallTwo");
elTwo.textContent = wallTwo;
