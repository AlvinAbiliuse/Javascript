function Hotels(name, rooms, booked) {
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	
	this.checkAvailability = function() {
		return this.rooms - this.booked;
	};
}

var quayHotel = new Hotels("Quay", 40, 25);

var elName = document.getElementById("quayName");
elName.textContent = quayHotel.name;

var elRooms = document.getElementById("quayRooms");
elRooms.textContent = quayHotel.checkAvailability();


var parkHotel = new Hotels("Park", 100, 70);

elName = document.getElementById("parkName");
elName.textContent = parkHotel.name;

elRooms = document.getElementById("parkRooms");
elRooms.textContent = parkHotel.checkAvailability();


