function include() {

	$.getScript("../global/js/class/StringEasy.class.js");
	$.getScript("../global/js/class/Network.class.js");
	$.getScript("../global/js/class/Modal.class.js");
	$.getScript("../global/js/Listener.js");
	$.getScript("../global/js/Server.js");
	$.getScript("../global/js/third/bootstrap.min.js");

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
			$.getScript(arguments[count]);
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

