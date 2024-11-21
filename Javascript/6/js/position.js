var sx, sy, px, py, cx, cy

sx = document.getElementById("sx");
sy = document.getElementById("sy");
px = document.getElementById("px");
py = document.getElementById("py");
cx = document.getElementById("cx");
cy = document.getElementById("cy");

function showPosition(e) {
	sx.value = e.screenX;
	sy.value = e.screenY;
	px.value = e.pageX;
	py.value = e.pageY;
	cx.value = e.clientX;
	cy.value = e.clientY;
}

var el = document.getElementById("body");
el.addEventListener("mousemove", showPosition, false);
