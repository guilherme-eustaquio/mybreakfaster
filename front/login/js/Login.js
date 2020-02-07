const lib = [
	'./css/signin.css'
]

include(lib, main);

function main() {
	localStorage.setItem("logged", 0);
	listeners();
}

function listeners() {
	
	Transition.addPad(
		[
			{
				hash: "#login",
				action: transicaoLogin
			},
			{
				hash: "#criarConta",
				action: transicaoCadastro
			}
		
		]
	);
	
	Transition.init();		
	Transition.start();
	
	document.getElementById("botao-login").addEventListener("click", function() {
		login();
	});
	document.getElementById("botao-cadastrar").addEventListener("click", function() {
		cadastrar();
	});	
}

function login() {

	
	let email = document.getElementById("email").value;
	let senha = document.getElementById("senha").value;
	
	if(email == "" || senha == "") {
		alert("Preencha todos os campos!");
		return;
	}
	
	let object = {
		path: "usuario",
		method: "POST",
		data: "email=" + email + "&senha=" + senha, 
	};

	Network.makeHttpReq(object, 
		function success(msg) {
			localStorage.setItem("id", msg.id);
			localStorage.setItem("logged", 1);
			location.replace("../dashboard/index.html#lista-restaurantes");	
		},

		function failed(jqXHR, textStatus, msg) {
			alert(msg.message);
		}
	);	
}

function cadastrar() {
	
	let email = document.getElementById("email-cadastro").value;
	let nome = document.getElementById("nome-cadastro").value;
	let senha = document.getElementById("senha-cadastro").value;
	let endereco = document.getElementById("endereco-cadastro").value;
	
	if(email == "" || nome == "" || senha == "" || endereco == "") {
		alert("Preencha todos os campos!");
		return;
	}
	
	let object = {
		path: "usuario/criar",
		method: "POST",
		data: 'email=' + email + '&senha=' + senha + '&nome=' + nome + "&endereco=" + endereco, 
	};

	Network.makeHttpReq(object,
	
		function success(msg) {
			alert("Cadastrado com sucesso!");
		},

		function failed() {
			alert("Erro no servidor!");
		}
	);	
}

function transicaoLogin() {
	$("#modulo-cadastro").hide();
	$("#modulo-login").fadeIn(100);
}


function transicaoCadastro() {
	$("#modulo-login").hide();
	$("#modulo-cadastro").fadeIn(100);
}
