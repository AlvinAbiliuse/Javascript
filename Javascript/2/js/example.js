var sign = "Montague House";
var tiles = 14;
var subtotal = 70;
var shipping = 7;
var total = 77;

var elSign = document.getElementById("sign");
elSign.textContent = sign;

var elTiles = document.getElementById("tiles");
elTiles.textContent = tiles;

var elSub = document.getElementById("subtotal");
elSub.textContent = "$" + subtotal;

var elShip = document.getElementById("shipping");
elShip.textContent = "$" + shipping;

var elTotal = document.getElementById("total");
elTotal.textContent = "$" + total;
