(function(proxied) {

	window.prompt = function() {

		let body = '<div class = form-group>';
		body += StringEasy.format('<label for="modal-native-prompt-input">%s</label>', arguments[0]);

		body += StringEasy.format('<input type="text" class="form-control" id="modal-native-prompt-input" value="%s"></div>', arguments[1]);
		
		Modal.show({

			id:"modal-native-prompt-input",
			element: "body",
			title: {
				keyboard: false, 
				backdrop: "static",
				nameOf: "Prompt",
				exit: false
			},
			body: body,
			bottom: '<button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>'
		});
	};
})(window.prompt);



