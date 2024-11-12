(function() {
	var hotelName, roomRate, specialRate, offerEnds;

	var hotel = {
		name: "Park",
		roomRate: 240.00,
		discount: 15,
		specialRate: function() {
			var offerRate = this.roomRate * ((100 - this.discount) / 100);
			return offerRate;
		}
	}

	hotelName = document.getElementById("hotelName");
	roomRate = document.getElementById("roomRate");
	specialRate = document.getElementById("specialRate");

	hotelName.textContent = hotel.name;
	roomRate.textContent = hotel.roomRate;
	specialRate.textContent = hotel.specialRate();

}())
	
