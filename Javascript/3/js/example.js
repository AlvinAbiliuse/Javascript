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
	roomRate.textContent = "$" +  hotel.roomRate;
	specialRate.textContent = "$" + hotel.specialRate();

	var expiryMsg;
	var today;
	var elEnds;

	function offerEnds(today) {
		var weekFromToday, day, date, month, year, dayNames, monthNames;
		
		weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
		dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		day = dayNames[weekFromToday.getDay()];
		date = weekFromToday.getDate();
		month = monthNames[weekFromToday.getMonth()];
		year = weekFromToday.getFullYear();
		expiryMsg = "Offer Expires next " + day + "<br />(";
		expiryMsg += date + ' ' + month + " " + year + ")";
		return expiryMsg;
	}

	today = new Date();
	elEnds = document.getElementById("offerEnds");
	elEnds.innerHTML = offerEnds(today);
}())
	
