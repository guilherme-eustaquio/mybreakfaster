class Loading {
	
	static showLoading() {
		
		if(document.getElementById("loading-schema")) {
			$("#loading-schema").modal('show');
			return;
		}

		let str = '<div class="modal" id = "loading-schema" tabindex="-1" role="dialog" aria-labelledby="loading-schema" data-keyboard="false" data-backdrop="static">';
			
		str += '<div class="modal-dialog" role="document" style="margin-top: 50vh">';
		str += '<p class="spinner-border text-light" style="text-align: center;" role="status">';
		str += '<span class="sr-only">Loading...</span>';
		str += '</p>';
		str += '</div>';
		str += '</div>';

		$("body").append(str);
		$("#loading-schema").modal('show');

	}

	static hideLoading() {
		if(document.getElementById("loading-schema")) {
			$("#loading-schema").modal('hide');
		}
	}
}