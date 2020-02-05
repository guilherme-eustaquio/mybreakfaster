class Transition {

	static addPad (pad) {	
		Transition.pad = pad;
	}
		
	static start() {
		
		
		if(Transition.pad === undefined) {
			console.log("There's no have any pad defined.");
			return;
		}
		
		window.addEventListener('hashchange', function() {
			
			let count;
			
			for(count = 0; count < Transition.pad.length; count++) {
				if(Transition.pad[count].hash == window.location.hash) {
					Transition.pad[count].action();
					break;
				}
			}
		});	
	}
}