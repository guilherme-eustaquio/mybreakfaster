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

var tipo;
function checarTipo() {
	tipo = window.location.hash.split("&")[1];
	tipo = tipo.split("=")[1];

	if(tipo == "casa") {
		document.getElementById("campo-endereco").style.display = "block";
	}
}


function fazerPedido() {

	let forma_pagamento = document.getElementById("forma-pagamento").value;
	let endereco = document.getElementById("endereco").value;
	let id_produto = window.location.hash.split("#")[1];
	id_produto = id_produto.split("&")[0];
	id_produto = id_produto.split("=")[1];

	$.ajax({
		url : HOST_DEV + "pedidos",
		type : 'POST',
		data : 'id_produto=' + id_produto + '&id_usuario=' + localStorage.getItem("id") + '&formaPagamento=' + forma_pagamento + '&endereco=' + endereco
	 })
	 .done(function(msg) {

		document.getElementById("modal-pedido-mensagem").innerHTML = "Pedido realizado com sucesso!";
		$('#modal-pedido').modal('toggle');	
		setTimeout(function() {
			location.replace("../dashboard/index.html#lista-pedidos");
		}, 1000);

	 }).fail(function(jqXHR, textStatus, msg){
		document.getElementById("modal-pedido-mensagem").innerHTML = "Falha ao realizar pedido!";
		$('#modal-pedido').modal('toggle');	
	 });
	
}
