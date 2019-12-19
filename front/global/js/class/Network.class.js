let countReq = 0;
let lastMsgReq = null;
let queueReq = {};

class Network {
	
	static makeHttpReq(json, sucess, fail, loading) {
		
		let host = HOST_DEV;

		window.dispatchEvent(LOADING_EVENT);	

		if(json.host !== undefined) {
			host = json.host;
		}

		$.ajax({
			url  : host + json.path,
			type : json.method,
			data : json.data
		 })
		 .done(function(msg) {
		 	
			window.dispatchEvent(LOADING_EVENT);
						
			sucess(msg);		
		 }).fail(function(jqXHR, textStatus, msg){
		 	
			window.dispatchEvent(LOADING_EVENT);		
			fail(jqXHR, textStatus, msg);
		});		
	}


	static multipleHttpReq(json, success, failed) {

		if(countReq == json.length) {
			success(queueReq);		
			return;
		}	
		
		Network.makeHttpReq(json[countReq], 
			function sucess(msg) {
				queueReq[countReq] = msg;
				countReq++;
				Network.multipleHttpReq(json, success, failed);
			},
			function error(jqXHR, textStatus, msg) {
				failed(jqXHR, textStatus, msg);
				return;
			}
		);
	}
}
