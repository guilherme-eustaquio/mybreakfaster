class Modal {

	static show(properties, callback) {
		
		if(properties === undefined) {
			return;
		}
	
		Modal.properties = properties;
		
		if(Modal.opened) {
			Modal.enqueue(properties);
			return;
		}		

		Modal.opened = true;		
	
		if(document.getElementById(Modal.properties.id)) {
			$("#" + Modal.properties.id).modal('show');
			return;
		}

		let str = StringEasy.format('<div class="modal fade" id = "%s" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-keyboard="%s", data-backdrop = "%s">', Modal.properties.id, Modal.properties.title.keyboard, Modal.properties.title.backdrop);

		str += '<div class="modal-dialog modal-dialog-centered" role="document">';
		str += '<div class="modal-content">';
		str += '<div class="modal-header">';
		str += StringEasy.format('<h5 class="modal-title" id="titulo-modal-lugar">%s</h5>', Modal.properties.title.nameOf);
		
		if(Modal.properties.title.exit) {
			str += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
			str += '<span aria-hidden="true">&times;</span></button>';
		}
		
		str += StringEasy.format('</div><div class="modal-body">%s</div>', Modal.properties.body);
	
		if(Modal.properties.bottom) {
			str += StringEasy.format('<div class="modal-footer">%s</div>', Modal.properties.bottom);
		}

		str += '</div></div></div>';

		$("body").append(str);
		$("#" + Modal.properties.id).modal('show');

		$('.modal').on('hidden.bs.modal', function (e) {

			if(Modal.listener === false) { // check if has any eventlistener activated
				Modal.opened = false;
				return;
			}

			Modal.opened = false;
			Modal.dequeue();	
		});

	}
	
	static hide() {
		$("#" + Modal.properties.id).modal('hide');
	}

	static enqueue(properties) {
		
		if(Modal.queue === undefined) {
			Modal.queue = [];
		}

		if(Modal.queue.length > 10) {
			console.log("10 is the max modals allowed per page!");
			return;
		}
		
		Modal.queue.push(properties);
	}

	static dequeue() {
		if(Modal.queue !== undefined) {
			Modal.show(Modal.queue.pop());
		}
	}
}
