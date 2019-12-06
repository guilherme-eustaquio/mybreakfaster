window.onload = function() {

	$("#barra-navegacao-opcoes").load("./nav/barra-navegacao-opcoes.html");
	$("#barra-navegacao-aplicativo").load("./nav/barra-navegacao-aplicativo.html");
	$("#modais").load("./modais/modal.html");
	$("#perfil").load("./paginas/pagina-perfil.html");

	carregarCards();
	
};

window.addEventListener('hashchange', function() {

	if(document.getElementById("navbarsExampleDefault").className == "navbar-collapse offcanvas-collapse open" && window.location.hash == "opcao") {
		document.getElementById("navbarsExampleDefault").className = "navbar-collapse offcanvas-collapse";
		return;
	}	

	let hash = window.location.hash.split("=");

	switch(hash[0]) {
		case "#lista-restaurantes":

			if(document.getElementById("navbarsExampleDefault").className == "navbar-collapse offcanvas-collapse open") {
				document.getElementById("navbarsExampleDefault").className = "navbar-collapse offcanvas-collapse";
				return;
			}

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
			break;

		case "#lista-produto":
			carregarProduto(hash[1]);
			break;

	}

});


function abrirModal(tipo) {
	$('#' + tipo).modal('toggle');
}

function carregarCards() {

	const json = [
		{
			id: 1,
			nome: "Mac Donalds",
			conteudo: "Venha ser feliz no MC Lanche Feliz!",
			avaliacao: 4
		},
		{
			id: 2,
			nome: "Bobs",
			conteudo: "O Bobs é dahora!",
			avaliacao: 3
		}
	];
		
	let restaurantes = new Card();
		
	document.getElementById("lista-restaurantes").innerHTML = restaurantes.gerarCardEstabelecimento(json);
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

function carregarProduto(id) {
	abrirModal("modal-voce-esta");
	$("#lista-restaurantes").hide();
	$("#lista-produtos").load("./paginas/pagina-produto.html");
	$("#lista-produtos").show();
	esconderTodos();
}