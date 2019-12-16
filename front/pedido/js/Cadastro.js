function preencherEndereco() {
	let id = localStorage.getItem("id");

	$.ajax({
		url : HOST_DEV + "usuario/" + id, 
		type : 'GET'
	 })
	 .done(function(msg) {
		document.getElementById("endereco").value = msg.endereco;	
	 });

}
