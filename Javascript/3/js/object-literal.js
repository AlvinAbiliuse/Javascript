
var hotel = {
	name: "Guay",
	rooms: 40,
	booked: 25,
	checkAvailability: function() {
		return this.rooms - this.booked;
	}
};

var elName = document.getElementById("name");
elName.textContent = hotel.name;

var elName = document.getElementById("rooms");
elName.textContent = hotel.checkAvailability();
