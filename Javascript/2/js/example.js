var sign = "Montague House";
var tiles = 14;
var subtotal = 70;
var shipping = 7;
var total = 77;

var greeting = "Howdy ";
var name = "Molly"
var message = ", please check your order:";

var elMessage = document.getElementById("message");
elMessage.textContent = greeting + name + message; 

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
