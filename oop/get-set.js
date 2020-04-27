const data = {
    locations=[],
	get location() {
		return this._location;
	},
	set location(location) {
		// location=location.trim()
        this._location = location.trim();
        this.locations.push(this._location)
	},
};
data.location = 'Houston';
console.log(data.location);
