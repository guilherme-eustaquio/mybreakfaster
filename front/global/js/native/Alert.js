(function(proxied) {
	window.alert = function() {
		Modal.show({
			id:"modal-native-alert",
			element: "body",
			title: {
				keyboard: false, 
				backdrop: "static",
				nameOf: "Alert",
				exit: true
			},
			body: arguments[0],
			bottom: '<button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>'
		});
	};
})(window.alert);
