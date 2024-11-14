var elOne = document.getElementById("one");
elOne.className = "complete";

var elLast = document.getElementsByTagName("li")[3];
elLast.setAttribute("class", "cool");

var elTwo = document.getElementById("two");
var classTwo = elTwo.className + " hello";
elTwo.className = classTwo;

