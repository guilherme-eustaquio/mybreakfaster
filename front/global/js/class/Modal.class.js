class Modal {
	
	constructor(json) {
		this.id = json.id;
		this.element = json.element;
		this.title = json.title;
		this.body = json.body;
		//this.bottom = json.bottom;
	}
	
	createModal() {

		if(document.getElementById(this.id)) {
			return;
		}

		let str = StringEasy.format('<div class="modal fade" id = "%s" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-keyboard="%s">', this.id, this.title.keyboard);

		str += '<div class="modal-dialog modal-dialog-centered" role="document">';
		str += '<div class="modal-content">';
		str += '<div class="modal-header">';
		str += StringEasy.format('<h5 class="modal-title" id="titulo-modal-lugar">%s</h5>', this.title.nameOf);
		
		if(this.title.exit) {
			str += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
			str += '<span aria-hidden="true">&times;</span></button>';
		}
		
		str += StringEasy.format('</div><div class="modal-body">%s</div></div></div></div>', this.body);
		document.getElementsByTagName(this.element)[0].innerHTML += str;
	}

	showModal() {
		$("#" + this.id).modal('toggle');
	}
	hideModal() {
		$("#" + this.id).modal('hide');
	}
}
