let countReq = 0;
let lastMsgReq = null;
let queueReq = {};

class Network {
	
	static makeHttpReq(json, sucess, fail) {
		
		let host = HOST_DEV;		

		if(json.host !== undefined) {
			host = json.host;
		}

		$.ajax({
			url  : host + json.path,
			type : json.method,
			data : json.data
		 })
		 .done(function(msg){
			sucess(msg);			
		 }).fail(function(jqXHR, textStatus, msg){
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
				Network.multipleHttpReq(json, success, null);
			},
			function error(jqXHR, textStatus, msg) {
				fail(jqXHR, textStatus, msg);
				return;
			}
		);
	}
}
