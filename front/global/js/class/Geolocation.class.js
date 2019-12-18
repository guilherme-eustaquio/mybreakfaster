class Geolocation {
	
	constructor() {
		this.watch = null;
	}

	getStaticPosition(callback) {
		navigator.geolocation.getCurrentPosition(
			function(position) {
				callback(position);
			}
		);
	}

	getDynamicPosition(callback) {
		this.watch = navigator.geolocation.watchPosition(
			function(position) {
				callback(position);
			}
		);
	}

	stopDynamicPosition() {
		if(this.watch === undefined) {
			return;
		}
		navigator.geolocation.clearWatch(this.watch);
	}
}