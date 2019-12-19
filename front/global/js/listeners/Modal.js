const properties_status = {
	id:"modalOffline",
	element: "body",
	title: {
		keyboard: false, 
		backdrop: "static",
		nameOf: "Warning",
		exit: false
	},
	body: "You're offline!"
};

const modal_status = new Modal(properties_status);

window.addEventListener('online', function() {
	modal_status.hideModal();
});
window.addEventListener('offline', function() {
	modal_status.createModal();
	modal_status.showModal();
});
window.addEventListener('hashchange', function() { 
	$(".modal").modal('hide');
});