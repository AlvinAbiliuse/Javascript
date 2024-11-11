
var hotel = {
	name: "Quay",
	rooms: 40,
	booked: 15,
};

hotel.gym = true;
hotel.pool = false;

delete hotel.booked;

var elName = document.getElementById("hotelName");
elName.textContent = hotel.name;

var elGym = document.getElementById("gym");
elGym.className = '' + hotel.gym;

var elPool = document.getElementById("pool");
elPool.className = '' + hotel.pool;
