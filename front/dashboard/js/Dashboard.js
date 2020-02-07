let libs = [
	"./js/classes/Card.js",
	"./js/offcanvas.js",
	"./css/offcanvas.css",
	"../global/js/class/Geolocation.class.js"
];

let dashboard = {
	menu_opcao_ativador: false,
	ultima_pagina_acessada: 0,
	ultimo_hash_acessado: "#lista-restaurantes"
};

include(libs, main);

function main() {
	
	if(localStorage.getItem("logged") == 0 || localStorage.getItem("logged") == undefined) {
		
		location.replace("../login/index.html");
		return;
	}
		
	loadPages(
		[
			{
				"id":"#barra-navegacao-opcoes",
				"path":"./nav/barra-navegacao-opcoes.html"
			},
			{
				"id":"#barra-navegacao-aplicativo",
				"path":"./nav/barra-navegacao-aplicativo.html"
			},
			{
				"id":"#modais",
				"path":"./modais/modal.html"
			},
			{
				"id":"#perfil",
				"path":"./paginas/pagina-perfil.html"
			}		
		],
		0,
		function() {
			listeners();
		}
	);	
}

function listeners() {
	
	
	Transition.addPad(
		[
			{
				hash: "#lista-restaurantes",
				action: function() {
					checarBarraNavegacaoOpcao();					
					carregarRestaurantes();
					menuAplicativo(0);		
					dashboard["ultimo_hash_acessado"] = "#lista-restaurantes";
				}
			},
			{
				hash: "#lista-pedidos",
				action: function() {
					checarBarraNavegacaoOpcao();
					carregarPedidos();
					menuAplicativo(1);
					dashboard["ultimo_hash_acessado"] = "#lista-pedidos";
				}
			},
			{
				hash: "#perfil",
				action: function() {
					checarBarraNavegacaoOpcao();
					carregarPerfil(localStorage.getItem("id"));
					menuAplicativo(2);
					dashboard["ultimo_hash_acessado"] = "#perfil";
				}		
			},
			{
				hash: "#lista-produto",
				action: function() {
					console.log("lista-produto");
					dashboard["ultimo_hash_acessado"] = "#lista-produto";
				}	
			},
			{
				hash: "#opcao",
				action: function() {
					ativarMenuOpcao();
				}
			}
		]
	);
	
	Transition.init();
	Transition.start();
	
	document.getElementById("item-sobre").addEventListener('click', function() {
		abrirModal("modal-sobre", "Sobre", "MyBreakFaster é um aplicativo muito legal.");	
	});
	document.getElementById("item-ajuda").addEventListener('click', function() {
		abrirModal("modal-ajuda", "Ajuda", "Não posso ajudá-lo, desculpe.");	
	});
	document.getElementById("item-logout").addEventListener('click', function() {
		localStorage.clear();
		location.replace("../login/index.html");
	});
	
	document.getElementById("botao-opcao-menu").addEventListener('click', function() {
		if(dashboard["menu_opcao_ativador"] == true) {
			window.location.hash = dashboard["ultimo_hash_acessado"];
		}
		else {
			window.location.hash = "#opcao";
		}
	});
}

function checarBarraNavegacaoOpcao() {
	if(document.getElementById("barra-navegacao-opcao-producao").className == "navbar-collapse offcanvas-collapse open") {
		document.getElementById("barra-navegacao-opcao-producao").className = "navbar-collapse offcanvas-collapse";
		dashboard["menu_opcao_ativador"] = false;
	}
}

function ativarMenuOpcao() {
	
	document.getElementById("barra-navegacao-opcao-producao").className = "navbar-collapse offcanvas-collapse";
	console.log("----");
	if(dashboard["menu_opcao_ativador"] == true) {
		$('[data-toggle="offcanvas"]', function() {
			$('.offcanvas-collapse').toggleClass('');
		})
		
		dashboard["menu_opcao_ativador"] = false;
	}
	else {
		$('[data-toggle="offcanvas"]', function() {
			$('.offcanvas-collapse').toggleClass('open');
		});
		
		dashboard["menu_opcao_ativador"] = true;
		
	}
}


function verificarMenuPrincipal(hash) {

	let rehash = hash.split("=")[0];
	rehash = rehash.split("&")[0];

	switch(rehash) {
		case "#lista-restaurantes":
			if(document.getElementById("barra-navegacao-opcao-producao").className == "navbar-collapse offcanvas-collapse open") {
				document.getElementById("barra-navegacao-opcao-producao").className = "navbar-collapse offcanvas-collapse";
				ativador_menu_opcao = 0;
				return;
			}
			carregarRestaurantes();
			menuAplicativo(0);
			break;
		case "#lista-pedidos":

			if(document.getElementById("barra-navegacao-opcao-producao").className == "navbar-collapse offcanvas-collapse open") {
				document.getElementById("barra-navegacao-opcao-producao").className = "navbar-collapse offcanvas-collapse";
				ativador_menu_opcao = 0;
				return;
			}
			carregarPedidos();
			menuAplicativo(1);
			break;
		case "#perfil":
			if(document.getElementById("barra-navegacao-opcao-producao").className == "navbar-collapse offcanvas-collapse open") {
				document.getElementById("barra-navegacao-opcao-producao").className = "navbar-collapse offcanvas-collapse";
				ativador_menu_opcao = 0;
				return;
			}
			menuAplicativo(2);
			carregarPerfil(localStorage.getItem("id"));
			break;

		case "#lista-produto":
			abrirProduto(hash.split("=")[1]);
			break;
	}
}

function abrirModal(tipo, titulo, corpo) {
	Modal.show({
		id:tipo,
		element: "body",
		title: {
			keyboard: true, 
			backdrop: "static",
			nameOf: titulo,
			exit: true
		},
		body: corpo
	});
}

function carregarRestaurantes() {

	let object = {
		path: "estabelecimentos",
		method: "GET",
		data: ""
	};
	
	Network.makeHttpReq(object, 
		
		function success(msg) {
			let restaurantes = new Card();
			document.getElementById("lista-restaurantes").innerHTML = restaurantes.gerarCardEstabelecimento(msg);
		},

		function failed() {

		}
	);
}

function carregarPedidos() {

	let json_geral;	
	document.getElementById("lista-pedidos").innerHTML = "";

	$.ajax({
		url : HOST_DEV + "pedidos/" + localStorage.getItem("id"),
		type : 'GET'
	 })
	 .done(function(msg){

		let json_pedido = msg;		
		let contador = 0;
		let contador_assincrono = 0;
		
		for(contador = 0; contador < json_pedido.length; contador++) {
			
			$.ajax({
				url : HOST_DEV + "produtos/" + json_pedido[contador].produto,
				type : 'GET'
			 })
			 .done(function(msg){
				
				let json_produto = msg;

				$.ajax({
					url : HOST_DEV + "estabelecimentos/" + json_produto.idEstabelecimento,
					type : 'GET'
				 })
				 .done(function(msg){
					
					let json_estabelecimento = msg;
					let card = new Card();

					document.getElementById("lista-pedidos").innerHTML += card.gerarCardsPedidos(json_pedido[contador_assincrono], json_produto, json_estabelecimento);
					contador_assincrono++;
				 }).fail(function(jqXHR, textStatus, msg){


				 });

			 }).fail(function(jqXHR, textStatus, msg){


			 });
		

		}



	 }).fail(function(jqXHR, textStatus, msg){


	 });

}

function menuAplicativo(pagina) {
	
	let paginas = ['lista-restaurantes', 'lista-pedidos', 'perfil'];
	let links = ['item-restaurantes', 'item-pedidos', 'item-perfil'];

	document.getElementById(paginas[dashboard["ultima_pagina_acessada"]]).style.display = "none";
	document.getElementById(links[dashboard["ultima_pagina_acessada"]]).className = "nav-link";


	document.getElementById(paginas[pagina]).style.display = "block";
	document.getElementById(links[pagina]).className = "nav-link active";

	$("#lista-produtos").hide();

	dashboard["ultima_pagina_acessada"] = pagina;
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

function carregarProduto() {


	Geolocation.getStaticPosition(function(position) {
		
		let mcdonalds_coordenadas = {longitude:-48.3195492, latitude:-18.9160555};

		if(Geolocation.isClose(mcdonalds_coordenadas, position.coords)) {
			tipo = 'local';
		}
		else {
			tipo = 'casa';
		}
	
		let object = {
			path:"produtos/" + id_lido + "/" + tipo,
			method: "GET",
			data: ""
		};	

		Network.makeHttpReq(object, 
			
			function success(msg) {
				let produtos = new Card();
				document.getElementById("produtos-cards").innerHTML = produtos.gerarCardProdutos(msg, localStorage.getItem("id"));
			},
			function failed() {}
		);

	});

}

function carregarPerfil(id) {
	
	let object = {
		path:"usuario/" + id,
		method: "GET",
		data: ""
	};	

	Network.makeHttpReq(object, 
		
		function success(msg) {
			document.getElementById("id-perfil").value = id;	
			document.getElementById("nome-perfil").value = msg.nome;
			document.getElementById("email-perfil").value = msg.email;
			document.getElementById("senha-perfil").value = msg.senha;
			document.getElementById("endereco-perfil").value = msg.endereco;
		},
		function failed() {}
	);
}

function editarPerfil() {
	
	let id = document.getElementById("id-perfil").value;
	let nome = document.getElementById("nome-perfil").value;
	let email = document.getElementById("email-perfil").value;
	let senha = document.getElementById("senha-perfil").value;
	let endereco = document.getElementById("endereco-perfil").value;

	let object = {
		path:"usuario/editar",
		method: "POST",
		data: 'email=' + email + '&senha=' + senha + '&id=' + id + '&nome=' + nome + "&endereco=" + endereco
	};	

	Network.makeHttpReq(object, 
		
		function success(msg) {
			document.getElementById("nome-perfil").value = msg.nome;
			document.getElementById("email-perfil").value = msg.email;
			document.getElementById("senha-perfil").value = msg.senha;
			abrirModal("modal-status", "Aviso", "Usuário cadastrado com sucesso!");
		},
		function failed() {
			abrirModal("modal-status", "Aviso", "Falha ao editar usuário!");
	
		}
	);
}
