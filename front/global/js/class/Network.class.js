class Network {
	
	static makeHttpReq(json, sucess, fail) {
		
		let host = HOST_DEV;
		
		Loading.showLoading();

		if(json.host !== undefined) {
			host = json.host;
		}

		$.ajax({
			url  : host + json.path,
			type : json.method,
			data : json.data
		 })
		 .done(function(msg) {
			Loading.hideLoading();
			sucess(msg);		
		 }).fail(function(jqXHR, textStatus, msg){
			Loading.hideLoading();
			fail(jqXHR, textStatus, msg);
		});		
	}

	static multipleHttpReq(json, success, failed) {
		
		if(Network.countReq === undefined) {
			Network.countReq = 0;
			Network.queueReq = [];
		}

		if(countReq == json.length) {
			success(Network.queueReq);
			Network.countReq = undefined;
			return;
		}	
		
		Network.makeHttpReq(json[Network.countReq], 
			function sucess(msg) {
				Network.queueReq[Network.countReq] = msg;
				Network.countReq++;
				Network.multipleHttpReq(json, success, failed);
			},
			function error(jqXHR, textStatus, msg) {
				failed(jqXHR, textStatus, msg);
				return;
			}
		);
	}
}
