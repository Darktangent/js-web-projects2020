let restaurant = {
	name: 'ASB',
	guestCapacity: 75,
	guestCount: 0,
	checkAvailability: function (partySize) {
		let seatsLeft = this.guestCapacity - this.guestCount;
		return partySize <= seatsLeft;
	},
	seatParty: function (partySize) {
		// let checkAvailability=this.guestCapacity-this.guestCount
		this.guestCount += partySize;
		// return
	},

	removeParty: function (partySize) {
		// let checkAvailability=this.guestCapacity-this.guestCount
		this.guestCount -= partySize;
		// return
	},
};
restaurant.seatParty(43);
console.log(restaurant.checkAvailability(40));
restaurant.removeParty(43);
let status = restaurant.checkAvailability(40);
console.log(status);
