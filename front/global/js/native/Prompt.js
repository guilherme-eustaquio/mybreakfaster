(function(proxied) {

	window.prompt = function(ask, default_value, callback) {

		let body = '<div class = form-group>';
		body += StringEasy.format('<label for="modal-native-prompt-input">%s</label>', ask);
		
		if(default_value === undefined) {
			default_value = "";
		}
		body += StringEasy.format('<input type="text" class="form-control" id="modal-native-prompt-input" value="%s"></div>', default_value);
		
		Modal.show({

			id:"modal-native-prompt",
			element: "body",
			title: {
				keyboard: false, 
				backdrop: "static",
				nameOf: "Prompt",
				exit: false
			},
			body: body,
			bottom: '<button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>'
		}, function() {
			callback(document.getElementById("modal-native-prompt-input").value);
		});
	};
})(window.prompt);



