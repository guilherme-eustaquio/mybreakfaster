class Loading {
	
	static showLoading() {
		
		let str = '<div class = "loading-center text-center" id = "loading-schema">';
		str += '<div class = "loading-content">';
		str += '<div class="spinner-border text-light" role="status">';
		str += '<span class="sr-only"></span></div></div></div>';
	
		$("body").append(str);
		$("#loading-schema").show();

	}

	static hideLoading() {
		if(document.getElementById("loading-schema")) {
			$("#loading-schema").hide();
			$("#loading-schema").remove();

		}
	}
}
