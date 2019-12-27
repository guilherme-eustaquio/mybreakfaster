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

	static isClose(position_absolute, position_relative) {
		
		if(parseInt(position_relative.longitude) === parseInt(position_absolute.longitude) && parseInt(position_relative.latitude) === parseInt(position_absolute.latitude)) {
			
			let grau_aproxim_long = ((position_relative.longitude % 10) / (position_absolute.longitude % 10));
			let grau_aproxim_lat = ((position_relative.latitude % 10) / (position_absolute.latitude % 10));
			
			if((grau_aproxim_lat >= 0.9 && grau_aproxim_lat <= 1.0) && (grau_aproxim_long >= 0.9 && grau_aproxim_lat <= 1.0)) {
				console.log(grau_aproxim_long);
				console.log(grau_aproxim_lat);
				console.log("The locations are nearby!");
				return true;
			}
			else {
				console.log(grau_aproxim_long);
				console.log(grau_aproxim_lat);
				console.log("locations are not nearby!");
				return false;
			}
		}
		
		return false;

	}
	
}
