
var hotel = {
	hotel.name = "Quay";
	hotel.rooms = 40;
	hotel.booked = 15;
};

hotel.gym = true;
hotel.pool = false;

delete hotel.booked;

var elName = document.getElementById("hotelName");
elName.textContent = hotel.name;

var elGym = document.getELementById("gym");
elGym.className = '' + hotel.gym;

var elPool = document.getElementById("pool");
elPool.className = '' + hotel.pool;
