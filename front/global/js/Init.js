

function include(libs, init) {
	$.holdReady(true);
	let static_scripts = [
		"../global/js/third/bootstrap.min.js",
		"../global/js/Server.js",
		"../global/js/class/Network.class.js",
		"../global/js/class/Loading.class.js",
		"../global/js/Event.js",
		"../global/js/class/StringEasy.class.js",
		"../global/js/class/Modal.class.js",
		"../global/js/listeners/Modal.js"
	];

	loadScripts(static_scripts, 0);

	$("<link/>", {
	   rel: "stylesheet",
	   type: "text/css",
	   href: "../global/css/bootstrap.min.css"
	}).appendTo("head");

	$("<link/>", {
	   rel: "stylesheet",
	   type: "text/css",
	   href: "../global/css/loading.css"
	}).appendTo("head");

	$("<meta/>", {
	   "http-equiv": "Content-Type",
	   "content": "text/html; charset=UTF-8",
	}).appendTo("head");

	$("<meta/>", {
	   "name": "viewport",
	   "content": "width=device-width, initial-scale=1, shrink-to-fit=no",
	}).appendTo("head");
	
	
	for (let count = 0; count < libs.length; count++) {

		if(libs[count].includes(".js")) {
			loadScript(libs[count]);
		}
		
		if(libs[count].includes(".css")) {
			$("<link/>", {
			   rel: "stylesheet",
			   type: "text/css",
			   href: libs[count]
			}).appendTo("head");
		}
	}
	$(document).ready(function() {
		init();
	});

}

function loadScripts(scripts, count) {

	if(count == scripts.length) {
		$.holdReady(false);
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
