class Map {

	constructor(position, properties) {
		this.latitude = position.coords.latitude;
		this.longitude = position.coords.longitude;
		this.zoom = properties.zoom;
		this.height = properties.size.height;
		this.width = properties.size.width;
		this.sensor = properties.sensor;
		this.key = properties.key;
	}

	getStaticMap() {
		let properties = StringEasy.format("%s,%s", this.latitude, this.longitude);
		let map = StringEasy.format("https://maps.googleapis.com/maps/api/staticmap?center=%s&zoom=%s&size=%sx%s&sensor=%s&key=%s", 
			properties, this.zoom, this.height, this.width, this.sensor, this.key);

		location.replace(map);
		return map;
	}
}