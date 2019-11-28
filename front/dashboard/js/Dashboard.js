window.onload = function() {

	$("#barra-navegacao-opcoes").load("./nav/barra-navegacao-opcoes.html");
	$("#barra-navegacao-aplicativo").load("./nav/barra-navegacao-aplicativo.html");
	$("#modais").load("./modais/modal.html");
	$("#perfil").load("./paginas/pagina-perfil.html");
	$("#lista-produtos").load("./paginas/pagina-produto.html");

	carregarCards();
	
};

window.addEventListener('hashchange', function() {

	if(document.getElementById("navbarsExampleDefault").className == "navbar-collapse offcanvas-collapse open" && window.location.hash == "opcao") {
		document.getElementById("navbarsExampleDefault").className = "navbar-collapse offcanvas-collapse";
		return;
	}	

	switch(window.location.hash) {
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
			conteudo: "Venha ser feliz no MC Lanche Feliz!"
		},
		{
			id: 2,
			nome: "Bobs",
			conteudo: "O Bobs é dahora!"
		}
	];
	
	let restaurantes = new Card();
		
	document.getElementById("lista-restaurantes").innerHTML = restaurantes.gerarCardEstabelecimento(json);
}

var ultima_pagina_acessada = 0;
function menuAplicativo(pagina) {
	
	let paginas = ['lista-restaurantes', 'lista-pedidos', 'perfil'];
	let links = ['item-restaurantes', 'item-pedidos', 'item-perfil'];
	let contador = 0;

	document.getElementById(paginas[ultima_pagina_acessada]).style.display = "none";
	document.getElementById(links[ultima_pagina_acessada]).className = "nav-link";
	
	document.getElementById(paginas[pagina]).style.display = "block";
	document.getElementById(links[pagina]).className = "nav-link ativa";
		
	ultima_pagina_acessada = pagina;	
}


