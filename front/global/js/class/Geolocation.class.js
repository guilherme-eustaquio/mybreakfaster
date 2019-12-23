class Geolocation {
	
	static getStaticPosition(callback) {

		navigator.geolocation.getCurrentPosition(
			function(position) {
				callback(position);
			}
		);
	}

	static getDynamicPosition(callback) {
		Geolocation.watch = navigator.geolocation.watchPosition(
			function(position) {
				callback(position);
			}
		);
	}

	static stopDynamicPosition() {
		if(Geolocation.watch === undefined) {
			return;
		}
		navigator.geolocation.clearWatch(Geolocation.watch);
	}
	
}
