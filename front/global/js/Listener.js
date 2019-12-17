
let properties_status = {
	id:"modalOffline",
	element: "body",
	title: {
		keyboard: false, 
		backdrop: "static",
		nameOf: "Atenção!",
		exit: false
	},
	body: "Você está offline!"
};

let modal_status = new Modal(properties_status);

window.addEventListener('online', function() {
	modal_status.hideModal();
});

window.addEventListener('offline', function() {
	modal_status.createModal();
	modal_status.showModal();
	window.stop();	
});





