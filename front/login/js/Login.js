const lib = [
	'./css/signin.css',
	'../global/js/class/Transition.class.js'
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
	
	Transition.start();
	
	document.getElementById("botao-login").addEventListener("click", function() {
		login();
	});
}

function login() {

	
	let email = document.getElementById("email").value;
	let senha = document.getElementById("senha").value;
	let json = {email:email, senha:senha};

	validarDados(json);
}

function validarDados(json) {

	object = {
		path: "usuario",
		method: "POST",
		data: "email=" + json.email + "&senha=" + json.senha, 
	};

	Network.makeHttpReq(object, 
		function success(msg) {
			if(typeof(msg) == "object") {
				localStorage.setItem("id", msg.id);
				localStorage.setItem("logged", 1);
				location.replace("../dashboard/index.html#lista-restaurantes&" + msg.id);	
			}	
			else {
				alert("Usuário ou senha incorretos!");
			}
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
