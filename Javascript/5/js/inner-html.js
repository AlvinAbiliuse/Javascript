var firstItem = document.getElementById("one");

var itemContent = firstItem.innerHTML;

firstItem.innerHTML = "<a href=\"https://www.google.com\">" + itemContent + "</a>";
