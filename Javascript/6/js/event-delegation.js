// function to remove element


function getTarget(e) {
	if (!e) {
		e = window.event;
	}
	return e.target || e.srcElement;
}

function removeElement(e) {
	var elTarget, elParent, elGrandParent;
	elTarget = getTarget(e);
	elParent = elTarget.parentNode;
	elGrandParent = elTarget.parentNode.parentNode;
	elGrandParent.removeChild(elParent);

	if (e.preventDefault) {
		e.preventDefault();
	} else {
		e.returnValue = false;
	}
}

var elList = document.getElementById("shoppingList");
if (elList.addEventListener) {
	elList.addEventListener('click', function(e) {
				removeElement(e);}, false);
} else {
	elList.attachEvent('onclick', function(e) {
				removeElement(e);}, false);
}


