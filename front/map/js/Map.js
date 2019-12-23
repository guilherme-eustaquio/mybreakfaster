

const libs = [
	"../global/css/mapbox-gl.css",
	"../global/js/Key.js",
	"../global/js/third/mapbox-gl.js",
	"../global/js/class/Geolocation.class.js",
	"../global/js/class/Map.class.js"
];

include(libs, main);

function main() {

	Geolocation.getStaticPosition(function(position) {
		Map.getInstance(position, {
			id: "map",
			zoom: 18,
			size: {
				height: 400,
				width: 400
			},
			key: "pk.eyJ1IjoiZ3VpbGhlcm1lbW9yZTIwIiwiYSI6ImNrNGQ1Znd0ODA4dDQzZm11ZmphZnBrcXUifQ.vTk8ZSZ6TEntcEBVBi62BQ"
		});
	});

	Geolocation.getDynamicPosition(function(position) {
		Map.setPosition(position);
	});
}




