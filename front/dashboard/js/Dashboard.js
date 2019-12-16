var id_usuario = 0;
window.onload = function() {

	let hashCode = window.location.toString();

	$("#barra-navegacao-opcoes").load("./nav/barra-navegacao-opcoes.html");
	$("#barra-navegacao-aplicativo").load("./nav/barra-navegacao-aplicativo.html");
	$("#modais").load("./modais/modal.html");
	$("#perfil").load("./paginas/pagina-perfil.html");

	carregarCards();
	
	id_usuario = window.location.hash + "";
	id_usuario = id_usuario.split("&")[1];
};

window.addEventListener('hashchange', function() {
	
	if(document.getElementById("navbarsExampleDefault").className == "navbar-collapse offcanvas-collapse open" && window.location.hash == "opcao") {
		document.getElementById("navbarsExampleDefault").className = "navbar-collapse offcanvas-collapse";
		return;
	}

	verificarMenuPrincipal(window.location.hash);

});

function verificarMenuPrincipal(hash) {

	switch(hash.split("=")[0]) {
		case "#lista-restaurantes":

			if(document.getElementById("navbarsExampleDefault").className == "navbar-collapse offcanvas-collapse open") {
				document.getElementById("navbarsExampleDefault").className = "navbar-collapse offcanvas-collapse";
				return;
			}
			carregarCards();
			menuAplicativo(0);
			break;
		case "#lista-pedidos":

			if(document.getElementById("navbarsExampleDefault").className == "navbar-collapse offcanvas-collapse open") {
				document.getElementById("navbarsExampleDefault").className = "navbar-collapse offcanvas-collapse";
				return;
			}

			menuAplicativo(1);
			break;
		case "#perfil":

			if(document.getElementById("navbarsExampleDefault").className == "navbar-collapse offcanvas-collapse open") {
				document.getElementById("navbarsExampleDefault").className = "navbar-collapse offcanvas-collapse";
				return;
			}
			menuAplicativo(2);
			carregarPerfil(id_usuario);
			break;

		case "#lista-produto":
			abrirProduto(hash.split("=")[1]);
			break;

	}
}

function abrirModal(tipo) {
	$('#' + tipo).modal('toggle');
}

function carregarCards() {

	document.getElementById("carregando").style.display = "block";
	$.ajax({
		url : HOST_DEV + "estabelecimentos",
		type : 'GET'
	 })
	 .done(function(msg){
		let restaurantes = new Card();
		document.getElementById("lista-restaurantes").innerHTML = restaurantes.gerarCardEstabelecimento(msg);
		document.getElementById("carregando").style.display = "none";
	 }).fail(function(jqXHR, textStatus, msg){
		document.getElementById("carregando").style.display = "none";
	 });
}

var ultima_pagina_acessada = 0;
function menuAplicativo(pagina) {
	
	let paginas = ['lista-restaurantes', 'lista-pedidos', 'perfil'];
	let links = ['item-restaurantes', 'item-pedidos', 'item-perfil'];

	document.getElementById(paginas[ultima_pagina_acessada]).style.display = "none";
	document.getElementById(links[ultima_pagina_acessada]).className = "nav-link";


	document.getElementById(paginas[pagina]).style.display = "block";
	document.getElementById(links[pagina]).className = "nav-link active";

	$("#lista-produtos").hide();

	ultima_pagina_acessada = pagina;	
}

function esconderTodos() {
	
	let paginas = ['lista-restaurantes', 'lista-pedidos', 'perfil'];
	let links = ['item-restaurantes', 'item-pedidos', 'item-perfil'];
	let contador = 0;


	for(contador = 0; contador < 3; contador++) {
		document.getElementById(paginas[contador]).style.display = "none";
		document.getElementById(links[contador]).className = "nav-link";
	}
}

var id_lido = 0;
function abrirProduto(id) {

	$("#lista-restaurantes").hide();
	$("#lista-produtos").load("./paginas/pagina-produto.html");
	$("#lista-produtos").show();
	id_lido = id;
	esconderTodos();

}

function carregarProduto(tipo) {
	$.ajax({
		url : HOST_DEV + "produtos/" + id_lido, 
		type : 'GET'
	 })
	 .done(function(msg){
		let produtos = new Card();
		document.getElementById("produtos-cards").innerHTML = produtos.gerarCardProdutos(msg);
	 })
}

function carregarPerfil(id) {
	$.ajax({
		url : HOST_DEV + "usuario/" + id, 
		type : 'GET'
	 })
	 .done(function(msg) {
		document.getElementById("id-perfil").value = id;	
		document.getElementById("nome-perfil").value = msg.nome;
		document.getElementById("email-perfil").value = msg.email;
		document.getElementById("senha-perfil").value = msg.senha;
	 });	
}

function editarPerfil() {
	
	let id = document.getElementById("id-perfil").value;
	let nome = document.getElementById("nome-perfil").value;
	let email = document.getElementById("email-perfil").value;
	let senha = document.getElementById("senha-perfil").value;

	$.ajax({
		url : HOST_DEV + "usuario/editar", 
		type : 'POST',
		data : 'email=' + email + '&senha=' + senha + '&id=' + id + '&nome=' + nome
	 })
	 .done(function(msg) {
		document.getElementById("nome-perfil").value = msg.nome;
		document.getElementById("email-perfil").value = msg.email;
		document.getElementById("senha-perfil").value = msg.senha;
		document.getElementById("modal-status-mensagem").innerHTML = "Usuário editado com sucesso!";		
		abrirModal("modal-status");
	 })
	 .fail(function() {
		document.getElementById("modal-status-mensagem").innerHTML = "Falha ao editar usuário!";		
		abrirModal("modal-status");
	 });
}

