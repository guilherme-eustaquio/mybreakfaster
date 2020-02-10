window.addEventListener('online', function() {
	Vibration.stopAllVibration();
	Modal.listener = false;
	Modal.hide();
});
window.addEventListener('offline', function() {
	
	
	Vibration.whenError();
	
	Modal.show({
		id:"modalOffline",
		element: "body",
		title: {
			keyboard: false, 
			backdrop: "static",
			nameOf: "Warning",
			exit: false
		},
		body: "You're offline!"
	});

	Modal.listener = true;
});
window.addEventListener('hashchange', function() { 
	$(".modal").modal('hide');
});
