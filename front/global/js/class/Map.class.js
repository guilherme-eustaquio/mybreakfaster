class Map {

	static getInstance(position, properties) {
		
		if(Map.instance === undefined) {
				
			mapboxgl.accessToken = properties.key;

			Map.id = properties.id;
			Map.latitude = position.coords.latitude;
			Map.longitude = position.coords.longitude;
			
			Map.instance = new mapboxgl.Map(
			{	
				style: 'mapbox://styles/mapbox/streets-v11',
				center: [Map.longitude, Map.latitude],
				zoom: 18,
				interactive: true,
				pitch: 45,
				bearing: -17.6,
				container: Map.id,
				antialias: false
			});
		}
	
		return Map.instance;
	}
	static setPosition(position) {
		Map.instance.setCenter([position.coords.longitude, position.coords.latitude]);
	}

	/*
	showStaticMap() {
		
		let map = new mapboxgl.Map(
			{	
				style: 'mapbox://styles/mapbox/streets-v11',
				center: [this.longitude, this.latitude],
				zoom: this.zoom,
				interactive: false,
				pitch: 45,
				bearing: -17.6,
				container: this.id,
				antialias: false
			}
		);
	//-18.9172948,-48.3222604
//-18.9174046,-48.3198691
		var longitude = this.longitude;
		var latitude = this.latitude;	

		map.on('load', function() {
			map.loadImage('../global/icon/map/pin.png', function(error, image) {
				if (error) throw error;
				
				map.addImage('cat', image);
					map.addLayer(
					{
						'id': 'points',
						'type': 'symbol',
						'source': {
						'type': 'geojson',
						'data': {
							'type': 'FeatureCollection',
							'features': [
								{
									'type': 'Feature',
									'geometry': {
										'type': 'Point',
										'coordinates': [longitude, latitude]
									}	
								}
							]
						}
					},
					'layout': {
						'icon-image': 'cat',
						'icon-size': 0.25
						}
					});
				});
		});

		document.getElementsByClassName('mapboxgl-ctrl-logo')[0].style.display = "none";
		document.getElementsByClassName('mapboxgl-ctrl-attrib')[0].style.display = "none";
		
	}*/
}











