function include() {

	let static_scripts = [
		"../global/js/Server.js",
		"../global/js/class/StringEasy.class.js",
		"../global/js/class/Network.class.js",
		//"../global/js/class/Geolocation.class.js",
		"../global/js/class/Map.class.js",
		"../global/js/class/Modal.class.js",
		"../global/js/listeners/Modal.js",
		"../global/js/third/bootstrap.min.js"
	];

	loadScripts(static_scripts, 0);

	$("<link/>", {
	   rel: "stylesheet",
	   type: "text/css",
	   href: "../global/css/bootstrap.min.css"
	}).appendTo("head");

	$("<meta/>", {
	   "http-equiv": "Content-Type",
	   "content": "text/html; charset=UTF-8",
	}).appendTo("head");

	$("<meta/>", {
	   "name": "viewport",
	   "content": "width=device-width, initial-scale=1, shrink-to-fit=no",
	}).appendTo("head");

	for (let count = 0; count < arguments.length; count++) {
		
		if(arguments[count].includes(".js")) {
			loadScript(arguments[count]);
		}
		
		if(arguments[count].includes(".css")) {
			$("<link/>", {
			   rel: "stylesheet",
			   type: "text/css",
			   href: arguments[count]
			}).appendTo("head");
		}
	}
}

function loadScripts(scripts, count) {

	if(count == scripts.length) {
		return;
	}

	$.getScript(scripts[count], function(data, textStatus, jqxhr) {
		if(jqxhr.status != 200) {
			return;
		}
	}).done(function() {
		count++;
		loadScripts(scripts, count);
	});
}

function loadScript(script) {
	let array = [script];
	loadScripts(array, 0);
}