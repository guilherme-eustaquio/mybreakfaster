function include(libs, init) {

	$.holdReady(true);

	let static_scripts = [
		"../global/js/third/bootstrap.min.js",
		"../global/js/Server.js",
		"../global/js/native/Alert.js",
		"../global/js/native/Prompt.js",
		"../global/js/class/Loading.class.js",
		"../global/js/class/Network.class.js",
		"../global/js/Event.js",
		"../global/js/class/StringEasy.class.js",
		"../global/js/class/Modal.class.js",
		"../global/js/listeners/Modal.js",
		"../global/js/class/Transition.class.js"
	];

	loadScripts(static_scripts);

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
	$.holdReady(false);
	
	$(document).ready(function() {
		if(init !== undefined) {
			init();
		}
	});
}

function loadScripts(scripts) {
	
	for(count = 0; count < scripts.length; count++) {
		$.ajax({
			url: scripts[count],
			dataType: 'script',
			async: false
		});
	}
}

function loadScript(script) {
	
	let array = [script];

	loadScripts(array);
}

function loadPages(pages, count, callback) {
	
	if(count == pages.length) {
		
		if(callback !== undefined) {
			callback();
		}
		
		return;
	}
	
	$(pages[count]["id"]).load(pages[count]["path"], function() {
		count++;
		loadPages(pages, count, callback);
	});
}
